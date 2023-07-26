// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 
function findMostFrequentElement(arr) {
    // Create an object to store the frequency count of each element
    const frequencyCount = {};
  
    // Loop through the array and count the occurrences of each element
    for (const element of arr) {
      frequencyCount[element] = (frequencyCount[element] || 0) + 1;
    }
  
    // Find the element with the highest frequency
    let mostFrequentElement;
    let highestFrequency = 0;
  
    for (const element in frequencyCount) {
      if (frequencyCount[element] > highestFrequency) {
        mostFrequentElement = element;
        highestFrequency = frequencyCount[element];
      }
    }
  
    return mostFrequentElement;
  }
  
  // Example input
  const inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
  const mostFrequent = findMostFrequentElement(inputArray);
  console.log(mostFrequent); // Output: 3 (since 3 appears most frequently in the array)
  