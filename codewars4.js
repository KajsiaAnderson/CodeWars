// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0

function paperwork(n, m) {
//   if n > 0 && m > 0
    if(n > 0 && m > 0){
        // then n * m 
        return (n * m)
    // else 0
    }else {
        return (0)
    }

}

console.log(paperwork(5, 5))  //25
console.log(paperwork(5, -5))  //0
console.log(paperwork(-5, -5))  //0
console.log(paperwork(-5, 5))  //0
console.log(paperwork(5, 0))  //0




// or this works too:
function paperwork2(n, m) {
    return n > 0 && m > 0 ? n * m : 0
}

console.log(paperwork2(5, 5))  //25
console.log(paperwork2(5, -5))  //0
console.log(paperwork2(-5, -5))  //0
console.log(paperwork2(-5, 5))  //0
console.log(paperwork2(5, 0))  //0