document.addEventListener("DOMContentLoaded", function () {
  // Usage example
  const grades = [10, 8, 7, 9, 5];
  const average = calculateAvarage(grades);

  console.log(`The average of the grades is: ${average}`);
});

function calculateTotalGrades(grades) {
  for (let i = 0; i < grades.length; i++) {
    totalGrades += grades[i];
  }
  return totalGrades;
}

function calculateAvarage(grades) {
  totalGrades = calculateTotalGrades(grades);
  return totalGrades / grades.length;
}
