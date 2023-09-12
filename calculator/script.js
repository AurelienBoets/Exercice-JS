let currentInput = "";
let currentOperator = "";

function updateResult(x) {
  document.getElementById("operator").value += x;
}

function clearResult() {
  currentInput = "";
  currentOperator = "";
  document.getElementById("operator").value = "";
  document.getElementById("result").value = "";
}

function appendNumber(number) {
  if (document.querySelector("#result").value != "") {
    document.querySelector("#result").value = "";
    document.querySelector("#operator").value = "";
  }
  currentInput += number;
  updateResult(number);
  currentOperator = "";
}

function appendOperator(operator) {
  if (document.querySelector("#result").value != "") {
    document.getElementById("operator").value =
      document.querySelector("#result").value;
    document.querySelector("#result").value = "";
  }
  if (currentInput !== "") {
    currentInput = "";
    currentOperator = operator;
    updateResult(currentOperator);
  }
}
function appendParenthesis(x) {
  if (x == ")" && currentOperator == "") {
    updateResult(x);
  }
  if (x == "(" && currentInput == "") {
    updateResult(x);
  }
}

function calculateResult() {
  x = document.querySelector("#operator").value;
  document.querySelector("#result").value = eval(x);
  currentOperator = "";
}

onkeydown = (event) => {
  switch (event.key) {
    case "0":
      appendNumber(0);
      break;
    case "1":
      appendNumber(1);
      break;
    case "2":
      appendNumber(2);
      break;
    case "3":
      appendNumber(3);
      break;
    case "4":
      appendNumber(4);
      break;
    case "5":
      appendNumber(5);
      break;
    case "6":
      appendNumber(6);
      break;
    case "7":
      appendNumber(7);
      break;
    case "8":
      appendNumber(8);
      break;
    case "9":
      appendNumber(9);
      break;
    case ".":
      appendNumber(".");
      break;
    case "(":
      appendParenthesis("(");
      break;
    case ")":
      appendParenthesis(")");
      break;
    case "*":
      appendOperator("*");
      break;
    case "-":
      appendOperator("-");
      break;
    case "+":
      appendOperator("+");
      break;
    case "/":
      appendOperator("/");
      break;
    case "Enter":
      calculateResult();
      break;
    case "=":
      calculateResult();
      break;
    case "Backspace":
      clearResult();
      break;
    default:
      break;
  }
};
