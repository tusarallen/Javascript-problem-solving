// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

function findTwoNumbersWithSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  // If no pair found, return an empty array
  return [];
}

// Example input
const inputArray = [1, 3, 6, 8, 11, 15];
const targetValue = 9;
const indices = findTwoNumbersWithSum(inputArray, targetValue);
console.log("Output:", indices); // Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)
