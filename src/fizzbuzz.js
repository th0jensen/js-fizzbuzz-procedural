const answer = []

// Write your code below this line

for (i = 1; i <= 15; i++) {
  if (i === 3 || i === 6 || i === 9 || i === 12) {
    answer.push('Fizz')
  } else if (i === 5 || i === 10) {
    answer.push('Buzz')
  } else if (i === 15) {
    answer.push('FizzBuzz')
  } else {
    answer.push(i)
  }
  console.log(answer)
}

// Don't touch the code below this line, we'll cover it later
module.exports = answer
