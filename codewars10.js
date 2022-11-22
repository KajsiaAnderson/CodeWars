// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let count = 0
    const vowels = ["a", "e", "i", "o", "u"]
    const arr = str.split("")

    for (let i = 0; i < arr.length; i++) {
        if (vowels.includes(arr[i])) {
            count++
        }
    }
    return count
}


console.log(getCount("abracadabra")) //5
console.log(getCount("bcdfgh")) //0


//another solution:
// function getCount(str) {
//     return (str.match(/[aeiou]/gi)||[]).length
// }