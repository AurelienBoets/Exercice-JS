export class Vehicle {
  constructor(marque, modele, kilometrage, annee) {
    this.marque = marque;
    this.modele = modele;
    this.kilometrage = kilometrage;
    this.annee = annee;
  }
  Display() {
    return `${this.marque}-${this.modele}-${this.kilometrage}km-${this.annee}`;
  }
}
