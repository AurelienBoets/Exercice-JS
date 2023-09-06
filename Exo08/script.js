let price = prompt("Le prix");
let tax = prompt("T.V.A en %");
document.body.innerHTML = `<p>Le prix de l'objet étant ${price}€, avec un taux de T.V.A appplicable de ${tax}%</p><p>Le montant de T.V.A s'élevera à ${Math.round(
  price * (tax / 100)
)}€</p><p>Le prix T.T.C de l'objet sera de ${Math.round(
  price * (tax / 100) + parseInt(price)
)}€`;
