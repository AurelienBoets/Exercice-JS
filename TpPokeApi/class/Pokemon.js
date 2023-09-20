import { Display } from "./Display.js";

export class Poke {
  constructor(id) {
    this.init(id);
  }
  init(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `La requete a echoue avec un statut ${response.status}`
          );
        }

        return response.json();
      })
      .then((data) => {
        Display.display(
          data.sprites.front_default,
          data.name,
          data.height,
          data.weight,
          id
        );
      })
      .catch((error) => {
        console.error("une erreur : " + error);
      });
  }
}
