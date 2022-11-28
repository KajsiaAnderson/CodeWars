// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1.
// Note: The function accepts an integer and returns an integer


function squareDigits(num) {
    const arr = num.toString().split("")
    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        newArr += arr[i] ** 2
    }
    return +newArr
}


console.log(squareDigits(2112)) //4114
console.log(squareDigits(3212)) //9414
console.log(squareDigits(0)) //0