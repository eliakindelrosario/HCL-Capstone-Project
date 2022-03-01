import { Animal } from "./Animal";
import { Dog } from "./Dog";
import { Cat } from "./Cat";

// Create instances
// let animal = new Animal("Red", "Unknown", "Male"); // Cannot create instance of an abstarct class
let rex = new Dog("Rex", "Male", true, 3);
let princess = new Cat("Princess", "Female", false, 4);

console.log(rex.getInfo());
console.log(princess.getInfo());
