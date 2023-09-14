import { Moto } from "./Moto.js";
import { Voiture } from "./Voiture.js";

let kangoo = new Voiture("Renault", "Kangoo", 240000, 2003, "Climatisée");
let rockster = new Moto("BMW", "R1150R Rockster", 65000, 2005);
kangoo.display();
rockster.display();
