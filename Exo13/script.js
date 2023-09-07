let year = Number(prompt("age de l'enfant"));

if (year < 3) {
  document.body.innerHTML = "Votre enfant est trop jeune";
} else if (year < 7) {
  document.body.innerHTML = "Votre enfant est dans la catégorie Baby";
} else if (year < 9) {
  document.body.innerHTML = "Votre enfant est dans la catégorie Poussin";
} else if (year < 11) {
  document.body.innerHTML = "Votre enfant est dans la catégorie Pupille";
} else if (year < 13) {
  document.body.innerHTML = "Votre enfant est dans la catégorie Minime";
} else if (year < 18) {
  document.body.innerHTML = "Votre enfant est dans la catégorie Cadet";
} else {
  document.body.innerHTML = "Ce n'est plus un enfant";
}
