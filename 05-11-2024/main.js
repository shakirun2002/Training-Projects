// Get the display element
let display = document.getElementById('display');

// Append a value to the display
function appendToDisplay(value) {
    display.value += value;
}

// Clear the display
function clearDisplay() {
    display.value = '';
}

// Calculate the result of the expression
function calculateResult() {
    try {
        // Use eval() to evaluate the mathematical expression
        display.value = eval(display.value);
    } catch (error) {
        // If there is an error (e.g., invalid expression), show 'Error'
        display.value = 'Error';
    }
}
