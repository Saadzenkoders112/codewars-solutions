// Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

function WierdStringCase (str) {
    let splittedStr = str.split(" ")
    let array = []
    for (let i of splittedStr) {
        let splittedItem = i.split("")
        for (let i=0; i<splittedItem.length; i++) {
            if (splittedStr[i] === "") {
                array.push(splittedItem[i])
            } else if(i%2 !== 1) {
                array.push(splittedItem[i].toUpperCase())
            } else {
                array.push(splittedItem[i].toLowerCase())
            }
        }
        array.push(" ")
    }
    let finalItem = array.reduce((final, item) => final + item)
    return finalItem
}

//https://www.codewars.com/kata/52b757663a95b11b3d00062d