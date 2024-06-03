// findHighest([]);

// // function findHighest()
// function highestNumber () {
// ascOrder = alpha.sort((a, b) => a > b ? 1 : -1);
// console.log()
// }

// highestNumber.sort((a, b) => a - b);
// console.log(highestNumber);

// // const numbers = [4, 2, 5, 1, 3]
// //   numbers.sort((a, b) => a - b)
// //   console.log(numbers); //  output: (5) [1, 2, 3, 4, 5]

//   // sort in ascending order
//   ascOrder = alpha.sort((a, b) => a > b ? 1 : -1);
//   console.log(ascOrder); // output: ['a', 'c', 'e', 'u', 'y']

// const highestNumber = [34, 5, 6];

function highestNumberFinder(highestNumber) {
  highestNumber.sort((a, b) => b - a);
  console.log(highestNumber[0]);
}

highestNumberFinder([34, 5, 6]);
