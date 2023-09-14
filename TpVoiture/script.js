class Voiture {
  constructor(marque, modele, vitesse) {
    this.marque = marque;
    this.modele = modele;
    this.vitesse = vitesse;
  }
  tourner = () => {
    this.vitesse -= 5;
  };
  accelerer = () => {
    this.vitesse += 10;
  };
  getVitesse = () => {
    console.log(this.vitesse);
  };
}
voiture1 = new Voiture("Bmw", "Série 1", 80);
voiture2 = new Voiture("Mercedes", "GLB", 100);
voiture1.accelerer();
voiture1.accelerer();
voiture1.accelerer();
voiture1.getVitesse();
voiture2.accelerer();
voiture2.accelerer();
voiture2.tourner();
voiture2.tourner();
voiture2.getVitesse();
