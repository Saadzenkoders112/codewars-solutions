// Description:
// Oh no! I've lost my glasses, but paradoxically, I need glasses to find my glasses!

// Please help me out by showing me the index in the list which contains my glasses. They look like two capital Os, with at least one dash in between!

// This means that both O--O and O------------O are valid glasses, but not O----#--O for example!
// Search thoroughly, you might find my glasses in places such as 'dustO-Odust'

function findMyGlasses(array) {
    for (let i of array) {
        let count = 0
        if (i.includes("-") && !(i.includes("#"))) {
            let splittedArray = i.split("")
            for (let j of splittedArray) {
                if (j == "O") {
                    count += 1
                }
            }
        }
        if (count == 2) {
            console.log(array.indexOf(i))
        }
    }
}

//https://www.codewars.com/kata/6512c786a07f6a000fe7a274