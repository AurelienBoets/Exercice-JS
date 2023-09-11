let t = 1.0089;
let x = 96809;
let y;
for (let n = 2016; x < 120000; n++) {
  x = Math.round(x * t);
  document.body.innerHTML += `<p>En ${n}, Tourcoing aura ${x} habitants</p><hr>`;
  y = n;
}
document.body.innerHTML += `<p>Avec un taux d'accroissements de ${t}, en ${y} il y aura ${x} habitants à Tourcoing. Il aura fallu ${
  y - 2015
} années</p>`;
