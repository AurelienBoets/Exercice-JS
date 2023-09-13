let rand = Math.floor(Math.random() * 50) + 1;
let numberTry = 0;
let game = false;
console.log(rand);

const updateResult = () => {
  document.querySelector("label").innerHTML = `Nombre de coups : ${numberTry}`;
};

const attempt = () => {
  x = Number(document.querySelector("input").value);
  if (game == true) {
    return undefined;
  }
  if (x > 0 && x < 51) {
    numberTry++;
    updateResult();
    if (x > rand) {
      document.querySelector("#result").innerHTML = "C'est plus petit";
    } else if (x < rand) {
      document.querySelector("#result").innerHTML = "C'est plus grand";
    } else {
      document.querySelector("#result").innerHTML = "Vous avez trouvé";
      game = true;
    }
  }
  document.querySelector("input").value = "";
};

const replay = () => {
  rand = Math.floor(Math.random() * 50) + 1;
  numberTry = 0;
  updateResult();
  game = false;
  console.log(rand);
  document.querySelector("#result").innerHTML = "";
};

document.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    attempt();
  }
});

updateResult();
