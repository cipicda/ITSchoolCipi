const a = 10;
const b = 50;

// && (SI)

if (a > 10 && b < 100) {
}

if (false && b < 100) {
}

if (false && true) {
}

if (false) {
}

// || (SAU)

if (a > 10 || b < 100) {
}

if (false || b < 100) {
}

if (false || true) {
}

if (true) {
}

// || ex:2

if (a > 0 || b < 100) {
}

if (true || b < 100) {
}

if (true) {
}

// ! (NOT)

if (a === 10 && b === 50) {
}

if (true && true) {
}

// SAUUUU

if (!(a !== 10 && b !== 50)) {
}

if (!(true && true)) {
}

if (!true) {
}

if (!false) {
}

// !true => !false
// !false => !true

const name = "";
const num = 0;
if (num) {
}
