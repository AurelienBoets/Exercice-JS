import { Vehicle } from "./Vehicle.js";
export class Moto extends Vehicle {
  constructor(marque, modele, kilometrage, annee) {
    super(marque, modele, kilometrage, annee);
  }
  display = () => {
    document.body.innerHTML += "<p>Moto : " + super.Display() + "</p><br>";
  };
}
