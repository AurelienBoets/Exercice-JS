let year = Number(prompt("age de l'enfant"));

if (year < 3) {
  document.body.innerHTML = "Votre enfant est trop jeune";
} else if (year > 2 && year < 7) {
  document.body.innerHTML = "Votre enfant est dans la catégorie Baby";
} else if (year > 6 && year < 9) {
  document.body.innerHTML = "Votre enfant est dans la catégorie Poussin";
} else if (year > 8 && year < 11) {
  document.body.innerHTML = "Votre enfant est dans la catégorie Pupille";
} else if (year > 10 && year < 13) {
  document.body.innerHTML = "Votre enfant est dans la catégorie Minime";
} else if (year > 12 && year < 18) {
  document.body.innerHTML = "Votre enfant est dans la catégorie Cadet";
} else {
  document.body.innerHTML = "Ce n'est plus un enfant";
}
