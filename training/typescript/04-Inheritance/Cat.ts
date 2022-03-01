import { Animal } from "./Animal";

export class Cat extends Animal {
	constructor(name: string, gender: string, private _tail: boolean) {
		super(name, "Cat", gender);
	}

	getInfo(): string {
		return (
			super.getInfo() +
			` ${this._tail ? "with a tail." : "without a tail."}`
		);
	}
}
