// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 
function sumOfPositiveNumbers(numbersArray) {
    let sum = 0;
  
    for (let i = 0; i < numbersArray.length; i++) {
      if (numbersArray[i] > 0) {
        sum += numbersArray[i];
      }
    }
  
    return sum;
  }
  
  // Example input
  const numbers = [2, -5, 10, -3, 7];
  const sumOfPositives = sumOfPositiveNumbers(numbers);
  console.log(sumOfPositives); // Output: 19 (sum of positive numbers: 2 + 10 + 7)
  