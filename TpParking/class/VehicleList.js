import { Vehicle } from "./Vehicle.js";

export class VehicleList {
  constructor() {
    this.listVehicle = [];
  }

  addVehicle(immatricule) {
    const vehicle = new Vehicle(immatricule);
    this.listVehicle.push(vehicle);
    const msg = `Veuillez prendre un ticket pour le véhicule ${immatricule}`;
    return this.render("bg-green", msg);
  }

  addVehicleTest(immatricule, date) {
    const vehicle = new Vehicle(immatricule);
    vehicle.changeDate(date);
    this.listVehicle.push(vehicle);
  }

  buy(x) {
    let msg = "";
    let tab = [];
    let color;
    this.listVehicle.forEach((element) => {
      if (element.immatricule == x) {
        const today = new Date();
        let tmp = today - element.date;
        tmp = Math.floor(tmp / (1000 * 60));
        switch (true) {
          case tmp <= 15:
            msg = `Le prix à payer pour le véhicule ${element.immatricule} est de 0.8€`;
            break;
          case tmp > 15 && tmp <= 30:
            msg = `Le prix à payer pour le véhicule ${element.immatricule} est de 1.30€`;
            break;
          case tmp > 30 && tmp <= 45:
            msg = `Le prix à payer pour le véhicule ${element.immatricule} est de 1.70€`;

          default:
            msg = `Le prix à payer pour le véhicule ${element.immatricule} est de 6€`;
            break;
        }
      } else tab.push(element);
    });
    if (msg == "") {
      msg = `Le véhicule ${x} n'existe pas`;
      color = "bg-red";
    } else color = "bg-yellow";
    this.listVehicle = tab;
    return this.render(color, msg);
  }
  render(color, msg) {
    let element = document.createElement("div");
    element.classList.add("alert");
    element.classList.add(color);
    element.textContent = msg;
    setTimeout(() => {
      element.classList.add("disable");
    }, 5000);
    return element;
  }
}
