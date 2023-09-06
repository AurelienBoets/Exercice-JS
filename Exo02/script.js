let first = parseInt(prompt("un nombre"));
let second = parseInt(prompt("un 2ème nombre"));

let result = first + second;
document.querySelector(".first").innerHTML += " " + first;
document.querySelector(".second").innerHTML += " " + second;
document.querySelector(".result").innerHTML +=
  " " + first + "  + " + second + " = " + result;
