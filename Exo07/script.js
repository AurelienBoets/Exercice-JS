let bord1 = prompt("1 côté du triangle");
let bord2 = prompt("2ème côté du triangle");
let hypothenus =
  Math.round(Math.sqrt(Math.pow(bord1, 2) + Math.pow(bord2, 2)) * 100) / 100;
document.body.innerHTML += `Les longueurs des côtés du triangle étant de ${bord1}cm et de ${bord2}cm,<br> La longueur de l'hypoténuse est de ${hypothenus}cm`;
