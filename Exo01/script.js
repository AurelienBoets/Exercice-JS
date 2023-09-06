let firstname = prompt("prenom");
let lastname = prompt("nom");
let name = firstname + " " + lastname;
document.querySelector(".firstname").innerHTML += " " + firstname;
document.querySelector(".lastname").innerHTML += " " + lastname;
document.querySelector(".name").innerHTML += " " + name;
