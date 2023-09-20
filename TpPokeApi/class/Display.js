import { Poke } from "./Pokemon.js";

export class Display {
  constructor() {}
  static display(setImg, setName, setHeight, setWeight, id) {
    document.body.innerHTML = "";
    let div = document.createElement("div");
    div.innerHTML = `<div class="d-flex justify-content-center align-items-center flex-column"><img class="d-block" src="${setImg}">
    <span class="text-center d-block">${setName}</span>
    <span class="text-center d-block">${setHeight}</span>
    <span class="text-center d-block">${setWeight}</span>
    <div>
    <button class="btn btn-info" data-action="previous">previous</button>
    <button class="btn btn-info" data-action="next">next</button>
    <button class="btn btn-info" data-action="surprise">surprise</button>
    </div>
    </div>`;
    document.body.appendChild(div);
    document
      .querySelector("button[data-action=next]")
      .addEventListener("click", () => {
        this.next(id);
      });
    document
      .querySelector("button[data-action=previous]")
      .addEventListener("click", () => {
        this.previous(id);
      });
    document
      .querySelector("button[data-action=surprise]")
      .addEventListener("click", () => {
        this.surprise();
      });
  }

  static next(id) {
    if (id < 1010) {
      let x = new Poke(++id);
      return x;
    } else {
      return;
    }
  }

  static previous(id) {
    if (id > 1) {
      let x = new Poke(--id);
      return x;
    } else {
      return;
    }
  }

  static surprise() {
    let x = new Poke(Math.floor(Math.random() * 1010 + 1));
    return x;
  }
}
