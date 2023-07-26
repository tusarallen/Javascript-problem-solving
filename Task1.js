// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 
function reverseString(inputString) {
  let reversedString = "";

  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString[i];
  }

  return reversedString;
}

// Example usage
const input = "Hello, World!";
const reversed = reverseString(input);
console.log(reversed); // Output: "!dlroW ,olleH"
