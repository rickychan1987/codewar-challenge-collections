// #1: Let's start with loopsolutions.
// var summation = function (num) {
//     let sum = 0
//     for(let i = 0; i <= num; i++) {
//         sum += i
//     }
//     return sum
// }

// #2: Let's solve it with Gauss Formula.
// var summation = function (num) {
//     return num * (num + 1) / 2
// }

// #3: Let's solve it with reduce().
// var summation = function (num) {
//     return Array(num).fill(0).reduce((acc, _, index) => acc + index + 1, 0)
// }

// #4: Let's solve it with recursion.
// var summation = function (num) {
//     return num ? num + summation(num - 1) : num
// }
