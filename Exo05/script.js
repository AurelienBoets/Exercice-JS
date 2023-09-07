let str = prompt("une phrase");
document.querySelector(".str").innerHTML += str;
document.querySelector(".min").innerHTML += str.toLowerCase();
document.querySelector(".tab").innerHTML += str.split("").join(",");
document.querySelector(".upper").innerHTML += str
  .toLowerCase()
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
