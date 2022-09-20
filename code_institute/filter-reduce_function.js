

// -------------------------------------- filter function
// Takes two arguments, first which array. 
// Then what to do with that array.
// True or False
let nums2 = [1,2,3,4,5,6,7,8,9,10]
const result_filter = nums2.filter(num => num % 2 == 0)
console.log("Result filter:", result_filter)

// -------------------------------------- reduce function
const nums3 = [0,1,2,3,4]
let sum = nums3.reduce((acc, curr) => acc + curr, 0)
console.log(sum)