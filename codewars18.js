// Given an array of integers your solution should find the smallest integer.

class SmallestIntegerFinder {
    findSmallestInt(args) {
        return (Math.min(...args))
    }
}
let small = new SmallestIntegerFinder()

console.log(small.findSmallestInt([34, 15, 88, 2])) //2
console.log(small.findSmallestInt([34, -345, -1, 100])) //-345