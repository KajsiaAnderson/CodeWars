// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s){
    hour = h * 3600000
    minute = m * 60000
    second = s * 1000
    return (hour + minute + second)
  }


  console.log(past(0,1,1)) //61000
  console.log(past(1,1,1)) //3661000
  console.log(past(1,0,0)) //3600000
  console.log(past(1,0,1)) //3601000