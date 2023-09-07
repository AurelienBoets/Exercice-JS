let letter = prompt("lettre").toLowerCase();
let voyelle = ["a", "e", "y", "u", "i", "o"];
let i;
let affichage;
voyelle.forEach((element) => {
  if (element == letter) {
    i = 1;
    affichage = `<p>La lettre ${letter} est une voyelle</p>`;
  }
});
if ((i = 1)) {
  document.body.innerHTML = affichage;
} else {
  document.body.innerHTML = `<p>La lettre ${letter} est une consonne</p>`;
}
