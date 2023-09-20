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
  let listItem = e.target.offsetParent;
  if (e.target.getAttribute("class") == "bi bi-trash float-end") {
    list.innerHTML = "";
    list.appendChild(productList.delete(listItem.getAttribute("data-id")));
  } else if (
    e.target.getAttribute("class") == "bi bi-pencil-square float-end"
  ) {
    text.value = productList.edit(listItem.getAttribute("data-id"));
  }
});
