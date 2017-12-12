// * Write an object for an `adventurer` and give the adventurer some belongings
// * Access the belongings array and print the last element to the console

const adventurer = {
  name: "Tim",
  hitpoints: 20,
  belongings: ["makeup bag", "sword", "pizza"]
}

;
console.log(adventurer.belongings[2])
// **Extra**
//
// * Use `.push()` to add a "Vogue Magazine" to the belongings array

adventurer.belongings.push("Vogue Magazine");

//
// **Extra**
//
// * Write a for loop that prints each element in the belongings array to the console

for (let i = 0; i < adventurer.belongings.length; i++) {
  console.log(adventurer.belongings[i]);
}


// * Write the companion object into the adventurer object
// * Print just the companion's name to the console
//
adventurer.companion = {
  name: "Toots",
  type: "Fat Cat"
}
console.log(adventurer.companion.name);

// Activity
//
// * Change the companion's name "Velma" to "Susan"
// * Console.log to check that the name was changed

adventurer.companion.name = "Susan";

console.log(adventurer.companion.name);

//
// Extra
//
// * Add another object to the `adventurer` object called `companion2`.
// * `companion2` should have a name and a type "Insect"

adventurer.companion2 = {
  name: "Tiny Tim",
  type: "Insect"
}
console.log(adventurer.companion2)

// * 6 minutes
