// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function findSecondSmallest(arr) {
  if (arr.length < 2) {
    return "Array must have at least two elements.";
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (const num of arr) {
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest && num !== smallest) {
      secondSmallest = num;
    }
  }

  if (secondSmallest === Infinity) {
    return "There is no second smallest element in the array.";
  }

  return secondSmallest;
}

// Example usage
const numbersArray = [5, 2, 8, 1, 9, 3];
const secondSmallest = findSecondSmallest(numbersArray);
console.log("Second Smallest:", secondSmallest); // Output: 2
