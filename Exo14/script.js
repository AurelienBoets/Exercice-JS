for (let i = 1; i < 4; i++) {
  document.body.innerHTML += `<ul>Chapitre ${i}`;
  for (let y = 1; y < 4; y++) {
    document.body.innerHTML += `<li>Partie ${i}.${y}</li>`;
  }
  document.body.innerHTML += "</ul><br>";
}
