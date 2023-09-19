import { Product } from "./Product.js";

export class ProductList {
  constructor() {
    this.productList = this.initTab();
    this.id = this.initId();
  }
  addProduct(name) {
    let product = new Product(++this.id, name);
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
    const tab = [];
    this.productList.forEach((element) => {
      if (element.id != id) {
        tab.push(element);
      }
    });
    this.productList = tab;
    if (tab.length == 0) {
      localStorage.removeItem("product");
    } else {
      localStorage.setItem("product", JSON.stringify(this.productList));
    }
    return this.render();
  }
  reset() {
    this.productList = [];
    localStorage.removeItem("product");
  }
}
