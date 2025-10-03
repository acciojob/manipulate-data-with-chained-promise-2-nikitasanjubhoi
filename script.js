//your JS code here. If required.
// Step 1: Initial promise resolves after 3 seconds with the array [1, 2, 3, 4]
function getInitialArray() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000); // 3-second delay
  });
}

// Step 2: Filter out odd numbers after a 1-second delay
function filterEvenNumbers(arr) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const evenNumbers = arr.filter(num => num % 2 === 0);
      // Update the DOM after filtering
      document.getElementById('output').textContent = evenNumbers.toString();
      resolve(evenNumbers);
    }, 1000); // 1-second delay
  });
}

// Step 3: Multiply even numbers by 2 after another 2-second delay
function multiplyByTwo(arr) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const multiplied = arr.map(num => num * 2);
      // Update the DOM after multiplying
      document.getElementById('output').textContent = multiplied.toString();
      resolve(multiplied);
    }, 2000); // 2-second delay
  });
}

// Chain the promises
getInitialArray()
  .then(filterEvenNumbers)
  .then(multiplyByTwo)
  .catch(error => {
    console.error("An error occurred:", error);
  });

