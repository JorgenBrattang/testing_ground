// -------------------------------------- Map function
// Takes two arguments, first which array. 
// Then what to do with that array.

// Using a for loop
let nums = [1,2,3,4,5]
let results = []
for (let num of nums) {results.push(num *2)}
console.log(results)

// Using map() - overcomplicated
const multByTwo = function (num) {
    return num * 2
}

const mapResult = nums.map(multByTwo)
console.log(mapResult)

// Simplified with map()
const simplified = nums.map(function (num) { return num * 2 })
console.log(simplified)

// Simplified with map() + arrow function
const arrow = nums.map(num => num * 2)
console.log(arrow)

// -------------------------------------- With objects
const students = [
    {
        id: 1,
        name: 'Mark Zuckerberg',
        profession: 'Developer',
        skill: 'JavaScript'
    },
    {
        id: 2,
        name: 'Ariel Longbottom',
        profession: 'Developer',
        skill: 'HTML'
    },
    {
        id: 3,
        name: 'Jason Bourne',
        profession: 'Developer',
        skill: 'CSS'
    },
]

// Get array of all names
const names = students.map( student => student.name )
console.log(names)

// Get array of all skills
const skill = students.map( student => student.skill )
console.log(skill)

// Get array of objects with names and skills 
const combined = students.map( student => ({name: student.name, skill: student.skill}))
console.log(combined)

// Get array of arrays with names and skills 
const combinedOption = students.map( student => [student.name, student.skill])
console.log(combinedOption)

// Get array of all first names
const firstName = students.map(student => student.name.split(' ')[0])
console.log(firstName)

const more = students.map( student => ({name: student.name, skill: student.skill}))
console.log(more)