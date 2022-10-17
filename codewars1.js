// Given an array of integers, return a new array with each value doubled.

function maps(x){
    let newArr= []
    for(let i = 0; i<x.length; i++){
      newArr.push(x[i]*2) 
    }
    return(newArr)
  }
  
  console.log(maps([1,2,3]))


//   different solution using .map
function maps2(x){
    return x.map(n => n * 2)
}
console.log(maps2([3,2,1]))