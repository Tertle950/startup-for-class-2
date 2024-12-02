// -9..-1: Magic Carpets
// 0: Null
// 1..10: 1 through 10
// 11: Copy
// 12: Aladdin's Lamp
// 13: Reverse
// 14: Straw

// There is a better way to do this, but I do NOT care right now!
const startingDeck: number[] = [
    -1,
    -2,
    -3,
    -4,
    -5,
    -6,
    -7,
    -8,
    -9,
    1,1,1,1,
    2,2,2,2,
    3,3,3,3,
    4,4,4,4,
    5,5,5,5,
    6,6,6,6,
    7,7,7,7,
    8,8,8,8,
    9,9,9,9,
    10,10,10,10,
    11,11,11,11,11,11,
    12,12,12,12,12,12,
    13,13,13,13,13,13,
    14
];

class Player {
	hand: number[] = [];

	makeDecision(gameState: GameState, camel: number, cardOnTop: number) {
		var cardPlayed: number = this.hand.pop();
		this.hand.push(gameState.drawCard());
		return cardPlayed;
	}
}

export class GameState {
	deck: number[] = [...startingDeck];

	camel: number = 0;
	cardOnTop: number = 0;

	handSize = 4;

	drawCard() {
		return this.deck.pop();
	}
}