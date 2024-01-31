class Bank {
  constructor(name, swift, tara, conturi, creare, afisare, cont) {
    this.name = name;
    this.swift = swift;
    this.tara = tara;
    this.conturi = conturi;
    this.creare = creare;
    this.afisare = afisare;
    this.cont = cont;
  }

  nume() {
    this.name = Cipi;
  }

  bnr() {
    console.log(`Banca BNR! Subsemnatul ${this.name} cu swiftu-ul ${this.swift}, creat in ${this.tara}, fiind 0`);
  }
}
const banca = new Bank(
  "Cipi",
  2854749,
  "Romania",
  "Conturi create",
  "Creare cont",
  "Afisarea conturilor deschise",
  "Soldul contului"
);

banca.nume();
