let n = Number(prompt("Nombre"));
let str = `<p>${n} =`;
let sum = 0;
for (let i = 0; i < n / 2; i++) {
  y = i;
  let str = `<p>${n} =`;
  let sum = 0;
  while (y < n / 2) {
    y++;
    sum += y;
    str += y;
    if (sum == n) {
      sum = 0;
      str += "</p>";
      document.body.innerHTML += str;
      str = `<br><p>${n}=`;
    } else {
      str += " + ";
    }
  }
}
