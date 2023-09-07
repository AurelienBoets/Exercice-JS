let number = Number(prompt("Un nombre"));
let second = Number(prompt("Un second nombre"));
if (number % second == 0) {
  document.body.innerHTML = `Le nombre ${number} est divisible par ${second}`;
} else {
  document.body.innerHTML = `Le nombre ${number} n'est pas divisible par ${second}`;
}
