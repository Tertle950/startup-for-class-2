import { GameState, Player } from "./game.ts";
import { User } from "./main.ts";

let tables = new Map<string, Table>([]);

// https://stackoverflow.com/a/1349426
function makecode(): string { // dynamic length may come in useful later
	let len = 6;
	const characters = 'ABEFGHIJKLMNQRSTUWXYZ234679';
	const charamount = characters.length;
	let result: string = '';
	let counter = 0;

	while (counter < len) {
		//if (counter != 0 && counter % 3 == 0) result = result.concat('','-');
		result = result.concat('',characters.charAt(Math.floor(Math.random() * charamount)));
		counter += 1;
	}

	return result;
}

class Table {
	joincode: string;
	gameState: GameState = new GameState();
	players: Player[] = [];
	gameStarted: boolean = false;

	constructor() {
		var joincodeTry = makecode();
		while(tables.get(joincodeTry) != undefined) {
			joincodeTry = makecode();
		}
		this.joincode = joincodeTry;
	}

	addPlayer(player: Player): boolean {
		if(this.gameStarted) return false;
		this.players.push(player);
		return true;
	}
}