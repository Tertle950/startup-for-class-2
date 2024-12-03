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
		var cardPlayed: number | undefined = this.hand.pop();
		if(cardPlayed) {
			var cardPlayed: 
		}
		this.hand.push(gameState.drawCard());
		return cardPlayed;
	}
}

// I LOVE STACKOVERFLOW
// https://stackoverflow.com/a/2450976
function shuffle(array: any[]) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

export class GameState {
	deck: number[] = [...startingDeck];

	camel: number = 0;
	cardOnTop: number = 0;

	handSize = 4;

	reshuffleDeck(): void {
		this.deck = [...startingDeck];
		shuffle(this.deck);
	}

	drawCard(): number {
		var card: number | undefined = this.deck.pop();
		if(card) {
			return card;
		}
		
	}
}