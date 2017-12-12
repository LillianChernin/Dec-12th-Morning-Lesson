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
