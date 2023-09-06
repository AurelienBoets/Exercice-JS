let word = prompt("Un mot");
let reverseWord = word.split("").reverse().join("");
let result;
if (word == reverseWord) {
  result = `Le mot ${word} est un palindrome`;
} else {
  result = `Le mot ${word} n'est pas un palindrome`;
}
document.querySelector(".word").innerHTML += word;
document.querySelector(".reverseWord").innerHTML += reverseWord;
document.querySelector(".result").innerHTML = result;
