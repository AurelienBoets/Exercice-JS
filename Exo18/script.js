let n = 0;
let average = 0,
  max = 0,
  min = 20,
  i = 0;
while (true) {
  n = Number(prompt("Note/ Tapez 777 pour quitter"));
  if (n == 777) {
    break;
  } else {
    if (n > max) {
      max = n;
    }
    if (n < min) {
      min = n;
    }
    average += n;
    i++;
    document.body.innerHTML += `<p>En note ${i}: ${n}</p>`;
  }
}
average = Math.round((average / i) * 10) / 10;
document.body.innerHTML += `<hr><p>Sur l'ensemble des ${i} notes :<ul><li>La meilleur note est ${max}</li><li>La moins bonne note est ${min}</li><li>La moyenne des notes est ${average}</li></ul></p>`;
