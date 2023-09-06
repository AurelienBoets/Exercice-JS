let c = prompt("capital");
let n = prompt("nombre d'années");
let i = prompt("intérêts en %");
document.body.innerHTML = `<p>Avec un capital initial de ${c}€, placé à ${i}% pendant ${n} années,</p><p>Le montant total des intérêts est de ${Math.round(
  c * (i / 100) * n
)}€</p><p>Le capital final sera de ${Math.round(
  c * (i / 100) * n + parseInt(c)
)}€</p>`;
