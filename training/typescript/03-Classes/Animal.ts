class Animal {
	private _name: string;
	private _breed: string;
	private _gender: string;
	private canFly: boolean = false;
	private isWild: boolean = true;

	constructor(name: string, breed: string, gender: string) {
		this._name = name;
		this._breed = breed;
		this._gender = gender;
	}

	// Getter & Setters - traditional
	public getName(): string {
		return this._name;
	}

	public setName(name: string): void {
		this._name = name;
	}

	// Getter & Setters - Typscript modifier
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
}

// Create an instances
let animal1 = new Animal("Dixy", "Dog", "female");
let animal2 = new Animal("Dixy", "Dog", "female");

animal2.setName("Res");
animal2.breed = "Cat";
animal2.gender = "Male";

// Display
console.log("\nAnimal One");
console.log(animal1.getName());
console.log(animal1.breed);
console.log(animal1.gender);
console.log("\nAnimal Two");
console.log(animal2.getName());
console.log(animal2.breed);
console.log(animal2.gender);
