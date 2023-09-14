class Voiture {
  constructor(marque, modele, vitesse) {
    this.marque = marque;
    this.modele = modele;
    this.vitesse = vitesse;
  }
  tourner(x) {
    this.vitesse -= 5 * x;
  }
  accelerer(x) {
    this.vitesse += 10 * x;
  }
  getVitesse() {
    console.log(this.vitesse);
  }
}
voiture1 = new Voiture("Bmw", "Série 1", 80);
voiture2 = new Voiture("Mercedes", "GLB", 100);
voiture1.accelerer(3);
voiture1.getVitesse();
voiture2.accelerer(2);
voiture2.tourner(2);
voiture2.getVitesse();
