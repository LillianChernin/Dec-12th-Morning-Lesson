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

const adventurer2 = {
	name: "Timothy",
	hitpoints: 10,
	belongings: ["sword", "potion", "Tums"],
	companion: {
	             name: "Velma",
	             type: "Bat",
	             companion: {
	             					name: "Tim",
	             					type: "Parasite",
	             					belongings: ["SCUBA tank", "Rogan josh", "health insurance"]	                        }
	           }
}

// console.log(adventurer2[companion]companion.type);
// console.log(adventurer2.companion.companion.belongings[2]);

for (let key in adventurer2) {
	console.log(adventurer2[key]);
}


const movie = { title: "Eraserhead", director: "David Lynch", year: 1978 }


// * Use a **for..in** loop to print all the keys of the movie object
// * Use a **for..in** loop to print all the values of the movie object
// * 7 minutes

for (let key in movie) {
  console.log(key);
}

for (let key in movie) {
  console.log(movie[key]);
}


const movies = [
               { title: "L'Avventura", director: "Michelangelo Antonioni", year: 1960 },
               { title: "Eraserhead", director: "David Lynch", year: 1978 },
               { title: "Dayereh", director: "Jafar Panahi", year: 2000 },
               { title: "Dayereh", director: "Jafar Panahi", year: 2000 }
             ]


// Create an empty object. Leverage the fact that Keys are unique in an object. Loop over the movies array and add the movie titles as keys in the object. This will consequently omit the duplicate movie. At the same time, give each a value of **0** in the object.
//
// _Tip:_ You might want to use this technique for the hardest part of tonight's homework.
//
// * Use **Object.keys** loop to print all the values of the movie object.
// * 10 minutes

const movies2 = {}

for (let i = 0; i < movies.length; i++) {
  movies2[movies[i].title] = 0;
}

const keysOfMovies2 = Object.keys(movies2);

for (let i = 0; i < keysOfMovies2.length; i++) {
  console.log(movies2[keysOfMovies2[1]]);
}
