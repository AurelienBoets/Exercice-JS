for (let i = 1; i < 11; i++) {
  document.body.innerHTML += `<div>Table de ${i} :<ul>`;
  for (let y = 1; y < 11; y++) {
    document.body.innerHTML += `<li>${i} x ${y}= ${i * y}</li>`;
  }
  document.body.innerHTML += "</ul></div>";
}
