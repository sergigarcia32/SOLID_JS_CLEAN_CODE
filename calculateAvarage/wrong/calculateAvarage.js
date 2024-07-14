function calculateAverage(grades) {
  let sum = 0;
  for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
  }
  return sum / grades.length;
}

// Usage example
const grades = [10, 8, 7, 9, 5];
const average = calculateAverage(grades);

console.log(`The average of the grades is: ${average}`);
