// We need a function that can transform a string into a number. What ways of achieving this do you know?

const stringToNumber = function(str){
    return +str
  }
  
  console.log(stringToNumber("1234")) //1234
  console.log(stringToNumber("-7")) //-7
  
  

  
//   const stringToNumber = function(str){
//       return parseInt(str)
//     }

//   const stringToNumber = function(str){
//       return Number(str)
//     }