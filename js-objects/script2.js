let car1 = {
  brand: "Audi",
  hp: 150,
  details: {
    registrationNumber: "B111JSC",
    series: "ASKLJHFDN",
  },
  startENGINE: () => {
    console.log("Starting engine");
  },
};
car1.startENGINE();

// 1.  SHALLOW COPY

let car2 = car1;

car2.hp = 250;
car1.brand = "BMW";

console.log(car1);
console.log(car2);

car2.startENGINE();

// 2.  SHALLOW COPY

let car3 = { ...car1, details: { ...car1.details } };

car3.brand = "VW";
car3.hp = 183;

car3.details.series = "LAKSJD";

car3.startENGINE();

console.log(car3);

// 3.  SHALLOW COPY

let car5 = Object.assign({}, car1);
car5.details.series = "CCC";
console.log(car5);

// 4.  SHALLOW COPY

let car4 = JSON.parse(JSON.stringify(car1));

car4.brand = "Mercedes";

car4.details.series = "asljked";

console.log(car4);
