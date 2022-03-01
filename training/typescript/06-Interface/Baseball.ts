import { Sport } from "./Sport";

export class Baseball implements Sport {
	name: string = "Baseball";
	hasBall: boolean = true;
	numOfPlayers: number = 9;

	constructor() {}

	description(): string {
		return "Baseball is a bat-and-ball game played between two opposing teams, of nine players each, that take turns batting and fielding.";
	}
}
