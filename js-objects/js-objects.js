const person = {
  name: "Mihai",
  age: "32",
  city: "Timisoara",
};

//person = {};

const array = [];

array.push[1];

console.log(array);

Object.freeze(person);

person.age = 35;

person.country = "Romania";

console.log(person);

for (let proprietate in person) {
  if (proprietate === "age") {
    console.log(proprietate, person[proprietate]);
  }
}

for (let [key, value] of Object.entries(person)) {
  console.log(key, value);
}
