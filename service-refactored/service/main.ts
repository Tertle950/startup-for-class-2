import express from "express";
//import ViteExpress from "vite-express";
import { v4 as uuidv4 } from 'uuid';

import { GameState } from "./game.js";
import Sha256 from './sha256.js';

import { MongoClient } from 'mongodb';

import { WebSocketServer } from 'ws';
const wss = new WebSocketServer({ port: 9900 });

// -- MongoDB creds import
import config from './dbConfig.json';
import { JsonWebKeyInput } from "crypto";
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

const client = new MongoClient(url);
const db = client.db('rental');

// -- Classes

class User {
	name: string;
	email: string;
	password: string;
  salt: string;
	token: string | null;
  //loginTime: number;

	constructor(name: string, email: string, password: string, salt: string, token: string | null) {
		this.name = name;
		this.email = email;
		this.password = password;
    this.salt = salt;
		this.token = token;
    //this.loginTime = Date.now();
	}
}

class Game {
	id: number;
	game: string;
	state: GameState;

	constructor(id: number, game: string, state: GameState) {
		this.id = id;
		this.game = game;
		this.state = state;
	}
}

//var testGame = new Game(1, "s", new GameState());
// It works! Don't listen to vscode.

const app = express();

const PORT: number = 4000;

// -- User stuff

const userCollection = client.db('not-too-high').collection('users');

//await userCollection.insertOne(new User("test", "test@example.com", "test", "", null));
//fetchUser("test@example.com");

async function fetchUser(email: string): Promise<User | null> {
  const query = { email: email };

  const matches = await userCollection.find(query).toArray();

  //console.log(matches);

  if(matches.length == 0) return null;
  const theMatch = matches[0];

  return new User(theMatch.name, theMatch.email, theMatch.password, theMatch.salt, null);
}

async function findUser(email: string): Promise<User | null> {
  const userArray = users.get(email);
  if(userArray) return userArray;

  const userDb = await fetchUser(email);
  if(userDb != null) {
    users.set(email, userDb);
  }
  return null; 
}

// The users are currently saved in memory and disappear whenever the service is restarted.
let users = new Map<string, User>([]);

// JSON body parsing using built-in middleware
app.use(express.json());

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// Stolen from StackOverflow!
// https://stackoverflow.com/a/59915458
const requireParams = params => (req, res, next) => {
  const reqParamList = Object.keys(req.body);
  //console.log(reqParamList);
  const hasAllRequiredParams = params.every(param =>
    reqParamList.includes(param)
  );

  if (!hasAllRequiredParams)
    return res
      .status(400)
      .send(
        `The following parameters are all required for this route: ${params.join(", ")}`
      );

  next();
};

/*
apiRouter.post('/test', async (req, res) => {
  //console.log(req);
  console.log(req.body.password);
  res.sendStatus(418).end();
});
*/

// CreateAuth a new user
apiRouter.post('/auth/create', requireParams(["name", "email", "password"]), async (req, res) => {
  const user = await fetchUser(req.body.email);
  if (user) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
		const user: User = new User(
      req.body.name,
      req.body.email,
      Sha256.hash("thisisassault" + req.body.password), // password is hashed! :)
      "thisisassault", // this is a salt (a very simple one...)
      uuidv4()
    );
    users.set(req.body.email, user);
    userCollection.insertOne(user);
    res.send({ token: user.token });
  }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', requireParams(["email", "password"]), async (req, res) => {
  const user = await fetchUser(req.body.email);
  if (user) {
    if (Sha256.hash(user.salt + req.body.password) === user.password) {
      user.token = uuidv4();
      res.send({ token: user.token, userName: user.name });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', requireParams(["token"]), (req, res) => {
  const user = Object.values(users).find((u) => u.token === req.body.token);
  if (user) {
    delete user.token;
  }
  res.status(204).end();
});

// Default error handler
app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

apiRouter.get('/auth/list', async (req, res) => {
	console.log(users);
	res.status(418).end();
})

app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

// Return the application's default page if the path is unknown
const httpService = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

