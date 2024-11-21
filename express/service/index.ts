const express = require('express');
const uuid = require('uuid');
import ViteExpress from "vite-express";

// -- Classes

class User {
	name: string;
	email: string;
	password: string;
	token: string;

	constructor(name: string, email: string, password: string, token: string) {
		this.name = name;
		this.email = email;
		this.password = password; // TODO needs more security
		this.token = token;
	}
}

import { GameState } from "./game";

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

// -- Server stuff

const app = express();

const PORT = process.argv.length > 2 ? process.argv[2] : 3000;

// The users are currently saved in memory and disappear whenever the service is restarted.
let users = new Map<string, User>([]);

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('../public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
  const user = users[req.body.email];
  if (user) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
		const user = new User(req.body.name, req.body.email, req.body.password, uuid.v4());
    users[user.email] = user;

    res.send({ token: user.token });
  }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  const user = users[req.body.email];
  if (user) {
    if (req.body.password === user.password) {
      user.token = uuid.v4();
      res.send({ token: user.token });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', (req, res) => {
  const user = Object.values(users).find((u) => u.token === req.body.token);
  if (user) {
    delete user.token;
  }
  res.status(204).end();
});

apiRouter.get('/auth/list', async (req, res) => {
	console.log(users);
	res.status(204).end();
})

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: '..' });
});

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
});
