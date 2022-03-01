import { Animal } from "./Animal";
import { Dog } from "./Dog";
import { Cat } from "./Cat";

// Create instances
let animal = new Animal("Red", "Unknown", "Male");
let rex = new Dog("Rex", "Male", true);
let princess = new Cat("Princess", "Female", false);

console.log(animal.getInfo());
console.log(rex.getInfo());
console.log(princess.getInfo());
