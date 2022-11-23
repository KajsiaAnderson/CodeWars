// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.


function reverseWords(str) {
    const arr = str.split(' ')
    const newArr = arr.map(word => word.split('').reverse().join(''))
    return newStr = newArr.toString().replace(/,/g, ' ')
}


console.log(reverseWords('double  spaced  words')) //elbuod  decaps  sdrow
console.log(reverseWords('apple')) //elppa
console.log(reverseWords('a b c d')) //a b c d
console.log(reverseWords('The quick brown fox jumps over the lazy dog.')) //ehT kciuq nworb xof spmuj revo eht yzal .god


//easier solution:
// function reverseWords(str){
//     return str.split("").reverse().join("").split(" ").reverse().join(" ");
// }


//codewars didn't allow replaceAll method...
// function reverseWords(str) {
//     const arr = str.split(" ").map(word => word.split("").reverse().join().replaceAll(',', ''))
//     return newStr = arr.toString().replaceAll(',', ' ')
// }