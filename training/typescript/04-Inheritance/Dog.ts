import { Animal } from "./Animal";

export class Dog extends Animal {
	constructor(name: string, gender: string, private _tail: boolean) {
		super(name, "Dog", gender);
	}

	getInfo(): string {
		return (
			super.getInfo() +
			` ${this._tail ? "with a tail." : "without a tail."}`
		);
	}
}
