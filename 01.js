'use strict';

// Create a function that takes a matrix (list of lists) of numbers and sums all the numbers.

const myMatrix = [
  [1, 5, 3, 4],
  [5, 6],
  [7, 63, 9],
  [9, 10, 11, 12],
];

const simpleMatrix = [
  [1, 0],
  [0, 1, 1, 1],
  [1],
];

function addMatrix(matrix) {
  let sum = 0;
  let matrixLength = [];
  for (let i=0; i<matrix.length; i++) {
    for (let j=0; j<matrix[i].length; j++) {
      sum += matrix[i][j];
    }
  }
  return sum;
}

console.log(addMatrix(simpleMatrix));
