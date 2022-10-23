// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
   return x.split(' ').join('')
}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')) //'8j8mBliB8gimjB8B8jlB'
console.log(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd')) //'88Bifk8hB8BB8BBBB888chl8BhBfd'
console.log(noSpace('8aaaaa dddd r     ')) //'8aaaaaddddr'



// another solution:
// \s: finds spaces
// /../: finds exact matches in string. ex. /abc/ is equal to "I know my abc's", but not equal to "grab crab"
// g: a global serarch (finds all matches)

function noSpace2(y){
    return y.replace(/\s/g, '');
  }

  console.log(noSpace2(' l 8sow  wjgpwoejp sa'))
