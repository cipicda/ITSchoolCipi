/*
 * HOISTING
 *
 * VAR vs LET vs CONST
 */

function randomFunction() {
  if (true) {
    var randomVariable = 10;

    console.log(randomVariable);
  }

  console.log(randomVariable);
}

randomFunction();

console.log(randomVariable);
