let firstValue = "";
let secondValue = "";
let operator = "";
let flag = true;

function operate(number1, number2, operator) {
  number1 = Number(number1);
  number2 = Number(number2);
  switch (operator) {
    case "+":
      return add(number1, number2);
    case "-":
      return subtract(number1, number2);
    case "*":
      return multiply(number1, number2);
    case "/":
      return divide(number1, number2);
    default:
      return null;
  }
}

function add(number1, number2) {
  return Math.round(number1 + number2);
}

function subtract(number1, number2) {
  return Math.round(number1 - number2);
}

function multiply(number1, number2) {
  return Math.round(number1 * number2);
}

function divide(number1, number2) {
  if(number2 === 0) {
    alert("You can't divide by 0!");
    return number1;
  } else {
    return Math.round(number1 / number2);
  }
  
}

const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".flex-item");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "AC") {
      firstValue = "";
      secondValue = "";
      operator = "";
      flag = true;
      display.textContent = "";
    } else if (
      button.textContent === "+" ||
      button.textContent === "-" ||
      button.textContent === "*" ||
      button.textContent === "/" ||
      button.textContent === "="
    ) {
      if (firstValue === "") {
        operator = button.textContent;
        firstValue = display.textContent;
        display.textContent = "";
      } else if (secondValue === "") {
        secondValue = display.textContent;
        if (operator !== "=") {
          firstValue = operate(firstValue, secondValue, operator);
        }
        flag = false;
        secondValue = "";
        display.textContent = firstValue;
        operator = button.textContent;
        if (button.textContent === "=") {
          display.textContent = firstValue;
          flag = false;
        }
      } else {
      }
    } else {
      if (flag) {
        display.textContent += button.textContent;
      } else {
        display.textContent = "";
        display.textContent += button.textContent;
        flag = true;
      }
    }
  });
});
