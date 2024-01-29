const number1 = "123";
const number2 = "6539.764";

console.log(parseFloat(number1));
console.log(parseFloat(number2));

console.log(parseFloat(number1) === 123);
// ... (spread operator)
console.log(Math.max(...[1, 20, 876, -40]));

const numbers1 = [1, 2, 3, 4, 5, 6];
const numbers2 = [7, 8, 9, 10];

console.log([...numbers1, ...numbers2]);

const person = {
  name: "Mihai",
  age: 20,
  addres: {
    street: "Nume Strada",
    numar: "10",
  },
};

function generateSibling(person, name, age, city) {
  return {
    ...person,
    name: name,
    age: age,
    address: {
      ...person.address,
      city: city,
    },
  };
}

console.log(generateSibling(person, "Ioana", 9, "Cluj"));

window.alert(`Hello! ${person.name}`);
window.prompt("Enter your name", "Name");
