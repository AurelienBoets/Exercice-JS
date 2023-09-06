let bordSquare = prompt("Côtés du carré");
let widthRectangle = prompt("Longueur du rectangle");
let heightRectangle = prompt("Largeur du rectangle");
document.querySelector(".bordSquare").innerHTML += ` ${bordSquare}cm`;
document.querySelector(
  ".bordRectangle"
).innerHTML += `La longueur du rectangle est de ${widthRectangle}cm et la largueur est de ${heightRectangle}cm`;
document.querySelector(".perimeterSquare").innerHTML += ` ${
  parseInt(bordSquare) * 4
}cm`;
document.querySelector(".aireSquare").innerHTML += ` ${
  parseInt(bordSquare) * parseInt(bordSquare)
}cm²`;
document.querySelector(".perimeterRectangle").innerHTML += ` ${
  (parseInt(widthRectangle) + parseInt(heightRectangle)) * 2
}cm`;
document.querySelector(".aireRectangle").innerHTML += ` ${
  parseInt(widthRectangle) * parseInt(heightRectangle)
}cm²`;
