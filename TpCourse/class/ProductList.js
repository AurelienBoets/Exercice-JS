import { Product } from "./Product.js";

export class ProductList {
  constructor() {
    this.productList = this.initTab();
    this.i = this.initId();
  }
  addProduct(name) {
    let product = new Product(++this.i, name);
    this.productList.push(product);
    localStorage.setItem("product", JSON.stringify(this.productList));
    return this.render();
  }
  initId() {
    if (!localStorage.getItem("product")) {
      return 0;
    } else {
      const tab = JSON.parse(localStorage.getItem("product"));
      const id = tab.pop().id;
      return id;
    }
  }
  initTab() {
    if (!localStorage.getItem("product")) {
      return [];
    } else {
      const json = JSON.parse(localStorage.getItem("product"));
      const tab = [];
      json.forEach((element) => {
        let x = new Product(element.id, element.name);
        tab.push(x);
      });
      return tab;
    }
  }
  render() {
    let x = document.createElement("ul");
    x.classList.add("list-group");
    this.productList.forEach((element) => {
      let y = document.createElement("li");
      y.classList.add("list-group-item");
      y.setAttribute("data-id", element.id);
      y.textContent = element.name;
      let trash = document.createElement("i");
      trash.classList.add("bi");
      trash.classList.add("bi-trash");
      trash.classList.add("float-end");
      y.appendChild(trash);
      x.appendChild(y);
    });
    return x;
  }
  delete(id) {
    this.productList.filter((element) => element.id != id);
  }
  reset() {
    this.productList = [];
    localStorage.removeItem("product");
  }
}
