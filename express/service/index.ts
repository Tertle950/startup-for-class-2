const express = require('express');
//import uuid from 'uuid';

const app = express();

app.get('/', (_req, res) => {
  res.send('Hello world!');
});

const PORT = process.argv.length > 2 ? process.argv[2] : 3000;

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

class GameState {
	// TODO
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

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
});
