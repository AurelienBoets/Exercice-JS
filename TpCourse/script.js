import { ProductList } from "./class/ProductList.js";

const btnAdd = document.getElementById("add");
const btnReset = document.getElementById("reset");
let text = document.getElementById("text");
let list = document.getElementById("productList");
let productList = new ProductList();

list.innerHTML = "";
list.appendChild(productList.render());

btnAdd.addEventListener("click", () => {
  if (text.value != "") {
    list.innerHTML = "";
    list.appendChild(productList.addProduct(text.value));
    text.value = "";
  }
});

btnReset.addEventListener("click", () => {
  list.innerHTML = "";
  productList.reset();
});

list.addEventListener("click", (e) => {
  let a = e.target.offsetParent;
  if (a.getAttribute("data-id"));
});
