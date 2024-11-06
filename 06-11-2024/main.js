const display = document.getElementById("display");

function appendToDisplay(value) {
  if (isOperator(value) && isOperator(display.value.slice(-1))) {
    display.value = display.value.slice(0, -1) + value;
  } else {
    display.value += value;
  }
}

function calculate() {
  try {
    let result = eval(display.value);
    if (result === undefined || isNaN(result)) {
      display.value = "Error";
    } else {
      display.value = result;
    }
  } catch (error) {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = "";
}

function isOperator(character) {
  return ["+", "-", "*", "/"].includes(character);
}

document.addEventListener("keydown", (event) => {
  if (event.key >= 0 && event.key <= 9) appendToDisplay(event.key);
  if (["+", "-", "*", "/"].includes(event.key)) appendToDisplay(event.key);
  if (event.key === "Enter") calculate();
  if (event.key === "Escape") clearDisplay();
  if (event.key === ".") appendToDisplay(".");
});
