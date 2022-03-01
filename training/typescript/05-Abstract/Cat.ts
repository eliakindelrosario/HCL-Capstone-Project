import { Animal } from "./Animal";

export class Cat extends Animal {
	constructor(
		name: string,
		gender: string,
		private _tail: boolean,
		private numOfLegs: number
	) {
		super(name, "Cat", gender);
	}

	getInfo(): string {
		return (
			super.getInfo() +
			` ${
				this._tail ? "with a tail" : "without a tail"
			}  and has ${this.numberOfLegs()} legs.`
		);
	}

	// Must implement abstract method
	numberOfLegs(): number {
		return this.numOfLegs;
	}
}
