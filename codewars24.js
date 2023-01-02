// Write a function that returns both the minimum and maximum number of the given list/array.

function minMax(arr){
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    return [min, max]
  }

  console.log(minMax([5, 4, 2]))