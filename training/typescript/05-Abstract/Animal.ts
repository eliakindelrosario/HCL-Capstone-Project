export abstract class Animal {
	private canFly: boolean = false;
	private isWild: boolean = true;

	constructor(
		private _name: string,
		private _breed: string,
		private _gender: string
	) {}

	public get name(): string {
		return this._name;
	}

	public set name(value: string) {
		this._name = value;
	}

	public get breed(): string {
		return this._breed;
	}
	public set breed(value: string) {
		this._breed = value;
	}

	public get gender(): string {
		return this._gender;
	}
	public set gender(value: string) {
		this._gender = value;
	}

	getInfo(): string {
		return `${this.name} is a ${this._gender} ${this._breed}`;
	}

	// Abstract method
	abstract numberOfLegs(): number;
}
