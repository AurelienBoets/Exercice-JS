import { Product } from "./Product.js";

export class ProductList {
  constructor() {
    this.productList = this.initTab();
    this.id;
    this.isEdit = "";
  }
  addProduct(name) {
    if (this.isEdit == "") {
      let product = new Product(Date.now(), name);
      this.productList.push(product);
      localStorage.setItem("product", JSON.stringify(this.productList));
      return this.render();
    } else {
      this.delete(this.isEdit);
      let product = new Product(Date.now(), name);
      this.productList.push(product);
      localStorage.setItem("product", JSON.stringify(this.productList));
      return this.render();
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
      let pen = document.createElement("i");
      pen.classList.add("bi");
      pen.classList.add("bi-pencil-square");
      pen.classList.add("float-end");
      y.appendChild(pen);
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
    localStorage.setItem("product", JSON.stringify(this.productList));
    return this.render();
  }
  reset() {
    this.productList = [];
    localStorage.removeItem("product");
  }
  edit(id) {
    let x;
    this.productList.forEach((element) => {
      if (element.id == id) {
        this.isEdit = element.id;

        x = element.name;
      }
    });
    return x;
  }
}
