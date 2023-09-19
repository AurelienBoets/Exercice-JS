import { VehicleList } from "./class/VehicleList.js";

let vehicleList = new VehicleList();

const btnBuy = document.getElementById("buy");
const btnTicket = document.getElementById("ticket");
const text = document.getElementById("immatricule");
const alert = document.querySelector(".container-alert");

btnTicket.addEventListener("click", () => {
  alert.appendChild(vehicleList.addVehicle(text.value));
  text.value = "";
});

btnBuy.addEventListener("click", () => {
  alert.appendChild(vehicleList.buy(text.value));
  text.value = "";
});

let date1 = new Date();
date1.setMinutes(date1.getMinutes() - 20);
let date2 = new Date();
date2.setMinutes(date2.getMinutes() - 40);
let date3 = new Date();
date3.setMinutes(date3.getMinutes() - 60);

vehicleList.addVehicleTest("test1", date1);
vehicleList.addVehicleTest("test2", date2);
vehicleList.addVehicleTest("test3", date3);
