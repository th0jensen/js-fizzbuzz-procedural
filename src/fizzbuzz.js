const answer = []

// Write your code below this line

// for (i = 1; i <= 15; i++) {
//   if (i === 3 || i === 6 || i === 9 || i === 12) {
//     answer.push('Fizz')
//   } else if (i === 5 || i === 10) {
//     answer.push('Buzz')
//   } else if (i === 15) {
//     answer.push('FizzBuzz')
//   } else {
//     answer.push(i)
//   }
//   console.log(answer)
// }

// Improved the loop to work regardless of length
const iterations = 15

for (i = 1; i <= Number(iterations); i++) {
  let fizzbuzz = ''
  if (i % 3 === 0) {
    fizzbuzz += 'Fizz'
  }
  if (i % 5 === 0) {
    fizzbuzz += 'Buzz'
  }
  answer.push(fizzbuzz || i)
}

// Don't touch the code below this line, we'll cover it later
module.exports = answer
