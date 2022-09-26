  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0,1,2,3,4]
// acc = accumulator
// curr = currentValue

// Short version
let sum = nums.reduce((acc, curr) => acc + curr, 0)
// console.log(sum)

// Long Version
let sum2 = nums.reduce((acc, curr) => {
    // console.log(
    //     "Accumulator:", acc,
    //     "Current Value", curr,
    //     "Total:", acc + curr
    // )
    return acc + curr
}, 0)
// console.log(sum2)

const teamMembers = [
    {
      name: 'Andrew',
      profession: 'Developer',
      yrsExperience: 5
    },
    {
      name: 'Ariel',
      profession: 'Developer',
      yrsExperience: 7
    },
    {
      name: 'Michael',
      profession: 'Designer',
      yrsExperience: 1
    },
    {
      name: 'Kelly',
      profession: 'Designer',
      yrsExperience: 3
    },
    {
      name: 'Robin',
      profession: 'Manager',
      yrsExperience: 10
    },
  ]
  
// Totaling a specific object property
let totalExperiance = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0)
// console.log(totalExperiance)

// Grouping by a property, and totaling it too
let experienceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession          // Set the currentValue to key
  if (!acc[key]) {                   // If the accumulator's key don't exist
    acc[key] = curr.yrsExperience    // Set accumulator's key to current yrsExperiance
  } else {
    acc[key] += curr.yrsExperience   // If it does exist, keep on adding yrsExperiance
  }
  return acc
}, {})                  // Sets the initial value to an empty object on the first pass

// console.log(experienceByProfession)

const items = [
  { name: "Rice", price: 5 },
  { name: "Book", price: 20 },
  { name: "Chicken", price: 10 },
  { name: "Monitor", price: 100 },
]

const totalPrice = items.reduce((total, item) => {
  // console.log(`Total: ${total}`)
  // console.log(`Item: ${item.price}`)
  return total + item.price
}, 0)
// console.log(totalPrice)

const students = [
  {
      id: 1,
      name: 'Mark Zuckerberg',
      profession: 'Developer',
      skill: 'JavaScript',
      age: 32,
  },
  {
      id: 2,
      name: 'Ariel Longbottom',
      profession: 'Developer',
      skill: 'HTML',
      age: 23,
  },
  {
      id: 3,
      name: 'Jason Bourne',
      profession: 'Manager',
      skill: 'Excel',
      age: 34,
  },
]

// Get the totalAge of all students
const totalAge = students.reduce((acc, cur) => acc + cur.age, 0)
// console.log(totalAge)

// Get the totalNumber of developer profession
const devPro = students.reduce((acc, cur) => {
  prof = cur.profession
  if(acc[prof]) {
    acc[prof]++
  } else {
    acc[prof] = 1
  }
  return acc
}, {})
console.log(devPro)

// Total number of characters in all the students names
const totalNameChar = students.reduce((acc, cur) => acc + cur.name.length, 0)
console.log(totalNameChar)