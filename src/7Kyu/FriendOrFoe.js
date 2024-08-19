Description:
// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not

function friendOrFoe(array) {
    let finalArray = []
    for (const i of array) {
        let splitItem = i.split("")
        if (splitItem.length === 4) {
            finalArray.push(i)
        }
    }
    return finalArray
}

//https://www.codewars.com/kata/55b42574ff091733d900002f