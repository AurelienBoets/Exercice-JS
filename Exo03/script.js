let diametre = parseInt(prompt("Diamètre"));
document.querySelector(".pi").innerHTML += Math.PI;
document.querySelector(".diametre").innerHTML += diametre;
document.querySelector(".perimetre").innerHTML += diametre * Math.PI;
document.querySelector(".aire").innerHTML +=
  (Math.PI * Math.pow(diametre / 2), 2);
document.querySelector(".roundPerimetre").innerHTML += Math.round(
  diametre * Math.PI
);
document.querySelector(".roundAire").innerHTML += Math.round(
  (Math.PI * (diametre / 2)) ^ 2
);
