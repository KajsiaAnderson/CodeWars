// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.


function sumTwoSmallestNumbers(numbers) {
    const smallestNum = Math.min(...numbers)

    for (let i = 0; i < numbers.length; i++)
        if (numbers[i] === Math.min(...numbers)) {
            numbers.splice(i, 1)
            const nextNum = Math.min(...numbers)
            const total = smallestNum + nextNum
            return total
        }
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])) //13
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43])) //6


//using the .sort method

// function sumTwoSmallestNumbers(numbers) {
//     numbers.sort((a, b) => a - b) 
//     return numbers[0] + numbers [1]
// }