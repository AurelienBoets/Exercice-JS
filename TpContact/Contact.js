export class Contact {
  constructor() {
    this.titre = document.querySelector("input[name=titre]").value;
    this.nom = document.getElementById("nom").value;
    this.prenom = document.getElementById("prenom").value;
    this.date = document.getElementById("date").value;
    this.telephone = document.getElementById("phone").value;
    this.email = document.getElementById("email").value;
    this.update();
  }
  update() {
    document.querySelector(
      "tbody"
    ).innerHTML += `<tr><td>${this.titre}</td><td>${this.nom}</td><td>${this.prenom}</td><td>${this.date}</td><td>${this.telephone}</td><td>${this.email}</td>`;
  }
}
