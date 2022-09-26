// -------------------------------------- filter function
// Takes two arguments, first which array. 
// Then what to do with that array.
// True or False
let nums2 = [1,2,3,4,5,6,7,8,9,10]
const result_filter = nums2.filter(num => num % 2 == 0)
// console.log("Result filter:", result_filter)


// ----------- Simple Filtering
const people = [
    {
      name: 'Michael',
      age: 23,
    },
    {
      name: 'Lianna',
      age: 16,
    },
    {
      name: 'Paul',
      age: 18,
    },
  ];

const oldEnough = people.filter(person => person.age >= 21)
// console.log(oldEnough)

// Get the return without an array
const getPaul = people.filter(p => p.name === "Paul")[0]
// console.log(getPaul)

// ----------- Complex Filtering
const students = [
    {
        id: 1,
        name: 'Mark',
        profession: 'Developer',
        skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 5 },
        { name: 'css', yrsExperience: 3 },
        ]
    },
    {
        id: 2,
        name: 'Ariel',
        profession: 'Developer',
        skills: [
        { name: 'javascript', yrsExperience: 0 },
        { name: 'html', yrsExperience: 4 },
        { name: 'css', yrsExperience: 2 },
        ]
    },
    {
        id: 3,
        name: 'Jason',
        profession: 'Designer',
        skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 1 },
        { name: 'css', yrsExperience: 5 },
        ]
    },
];

// Long way
const candidates_long = students.filter(student => {
    // Targets only the students with the skills above 5 years.
    let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5)
    return strongSkills.length > 0
})
// console.log(candidates_long)

// Middle way
const hasStrongSkills_middle = student => {
    let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5)
    return strongSkills.length > 0
}
const candidates_middle = students.filter(hasStrongSkills_middle)
// console.log(candidates_middle)

// Shorter way
const has5yearsExp = skill => skill.yrsExperience >= 5
const hasStrongSkills_short = student => student.skills.filter(has5yearsExp).length > 0
const candidates_short = students.filter(hasStrongSkills_short)
// console.log(candidates_short)

// Challenge, get only their names using map()
// console.log(candidates_short.map(n => n.name))