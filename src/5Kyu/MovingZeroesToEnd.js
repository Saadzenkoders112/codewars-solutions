// Description:
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

function MovingZerosToEnd(array) {
    let zeroes = []
    let nonZeroes = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            zeroes.push(array[i])
        } else {
            nonZeroes.push(array[i])
        }
    }
    console.log(nonZeroes, zeroes)
    console.log(nonZeroes + [","] + zeroes)
}

//https://www.codewars.com/kata/52597aa56021e91c93000cb0