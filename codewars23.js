// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.


function findNextSquare(sq) {
    for (let i = 0; i < sq; i++)
    if (i * i === sq) {
        return (i + 1) * (i + 1)
    }
    return -1;
  }

  console.log(findNextSquare(121)) //144
  console.log(findNextSquare(625)) //676
  console.log(findNextSquare(114)) //-1



// using Math.sqrt and Math.pow
function findNextSq(sq) {
    return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2)
}

console.log(findNextSq(121)) //144
console.log(findNextSq(625)) //676
console.log(findNextSq(114)) //-1