import { Sport } from "./Sport";

export class Basketball implements Sport {
	name: string = "Basketball";
	hasBall: boolean = true;
	numOfPlayers: number = 9;

	constructor() {}

	description(): string {
		return "Basketball a game played between two teams of five players in which goals are scored by throwing a ball through a netted hoop fixed above each end of the court.";
	}
}
