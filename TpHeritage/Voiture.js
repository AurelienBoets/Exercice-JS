import { Vehicle } from "./Vehicle.js";
export class Voiture extends Vehicle {
  constructor(marque, modele, kilometrage, annee, clim) {
    super(marque, modele, kilometrage, annee);
    this.clim = clim;
  }
  display = () => {
    document.body.innerHTML +=
      "<p>Voiture : " + super.Display() + `-${this.clim}` + "</p><br>";
  };
}
