export class Vehicle {
  constructor(immatricule) {
    this.immatricule = immatricule;
    this.date = new Date();
  }
  changeDate(date) {
    this.date = date;
  }
}
