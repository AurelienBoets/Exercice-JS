let email = "contact@teamjs.fr";
let mdp = "leLundiAuSoleil";
let emailUser = prompt("email");
let mdpUser = prompt("mdp");
if (email == emailUser && mdp == mdpUser) {
  document.body.innerHTML += "<p>Bienvenue sur votre espace</p>";
} else if (email == emailUser) {
  document.body.innerHTML += "<p>mdp incorrect</p>";
} else if (mdp == mdpUser) {
  document.body.innerHTML += "<p>email incorrect</p>";
} else {
  document.body.innerHTML += "<p>mdp et email incorrect</p>";
}
