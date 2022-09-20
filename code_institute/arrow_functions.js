// For my sake
print = console.log

// This is the arrow function simple return a + b
const addTwoNumbers_arrow = (a, b) => a + b

const addTwoNumbers_arrow_complex = (a, b) => {
    return a + b
}


// This is is equal but with function
function addTwoNumbers_function(a, b) {
    return a + b
}

// And its called in the same manner
let sum = addTwoNumbers_arrow(2, 2)
print(sum)

let sum_complex = addTwoNumbers_arrow_complex(2, 2)
print(sum_complex)

let otherSum = addTwoNumbers_function(2, 2)
print(otherSum)


// You can also just print a message with the arroww function
const saySomething = message => print(message)
saySomething("buuu")

// Also print multilines
const returnMultiLines = (message) => (
    `<p>
    This is a mulitline code
    </p>` + message
)

print(returnMultiLines("pen"))