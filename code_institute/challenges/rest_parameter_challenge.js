
let mixedLetters = ['b', 'd', 'a', 'c', 'f', 'e'];

let moreMixedLetters = [...mixedLetters, 'h', 'k', 'g', 'j', 'i', 'l']

const updateSortReverse = (arr, ...letters) => {
    let copy = [...arr]
    for (let i of letters) {
        copy.push(i)
    }
    return copy.sort().reverse()
}

let reverseSort = updateSortReverse(moreMixedLetters, 'n', 'm', 'o')
console.log(moreMixedLetters)
console.log(reverseSort)
console.log(mixedLetters)
