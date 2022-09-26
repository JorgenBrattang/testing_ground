
// -------------------------------------------> Destructuring arrays

let ages = [30, 26, 27]

// let john = ages[0]
// let mary = ages[1]
// let joe = ages[2]

// Same as the three lines above
let [john, mary, joe] = ages
console.log(john, mary, joe)

// -------------------------------------------> Destructuring objects 

let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
}
// let mike = jobs.mike
// let jill = jobs.jill
// let alicia = jobs.alicia

// Same as the three lines above
let { mike, jill, alicia } = jobs
console.log(mike, jill, alicia)

// -------------------------------------------> Destructuring subsets

let languages = ["english", "french", "spanish", "german", "japanese"]
let [johnNative, johnSecondary] = languages
console.log(johnNative, johnSecondary)

// Use commas to "Skip" over parameters
let [, , maryNative, marySecondary] = languages
console.log(maryNative, marySecondary)

let languages2 = {
    firstLanguage: "english",
    secondLanguage: "frence",
    thirdLanguage: "german",
    forthLanguage: "japansese",
}
// Just write down the one you want
let { firstLanguage, thirdLanguage } = languages2
console.log(firstLanguage, thirdLanguage) 

// -------------------------------------------> Using the rest parameters syntax

let fruits = ["apple", "orange", "banana", "peach", "cherry"]
let [favorite, secondFavorite, ...others] = fruits
console.log(favorite)
console.log(secondFavorite)
console.log(others)

let favoriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak",
}

let { brian, anna, ...rest} = favoriteFoods
console.log(brian)
console.log(anna)
console.log(rest)
