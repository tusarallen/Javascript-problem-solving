// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
function calculator(num1, operator, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Invalid operator";
  }
}

// Example usage
const number1 = 10;
const number2 = 5;
const operation = "-"; // Change this to '+', '-', '*', or '/'
const result = calculator(number1, operation, number2);
console.log("Result:", result);
