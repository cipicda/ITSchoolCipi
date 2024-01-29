const simboluri = ["Inima rosie", "Romb", "Inima neagra", "Trefla"];
const valori = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
let numeJucatori = ["Maria", "Ion", "Andrei", "Andreea"];

function initPachet() {
  let pachet = [];

  for (const simbol of simboluri) {
    for (const valoare of valori) {
      const carte = {
        simbol: simbol,
        valoare: valoare,
      };
      pachet.push(carte);
    }
  }
  return pachet;
}

function amestecarePachet(pachet) {
  for (let i = pachet.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [
      (pachet[i],
      pachet[j],
      pachet[k],
      (pachet[l] = pachet[l]),
      pachet[k],
      pachet[j],
      pachet[i]),
    ];
  }
}

function impartirePachet(pachet, numeJucatori, cartiInMana) {
  const cartiPerJucator = {};
  for (const numeJucator of numeJucatori) {
    cartiPerJucator[numeJucator] = ["Maria", "Ion", "Andrei", "Andreea"];
  }
}
// Impartire carti
for (let i = 0; i < cartiInMana; i++) {
  for (const numeJucator of numeJucatori) {
    const carte = pachet.pop();
    cartiPerJucator[numeJucator].push(carte);
  }
}
return cartiPerJucator;
const pachetInitializat = initPachet();
console.log(pachetInitializat);
amestecarePachet(pachetInitializat);
//cartiInMana este 5 in cazul nostru
const cartiImpartite = impartireCarti(pachetInitializat, numeJucatori, 5);
