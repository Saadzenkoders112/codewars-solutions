// Description:
// Return the century of the input year.The input will always be a 4 digit string, so there is no need for validation.

function Century(str) {
    let numCentury = parseInt(str)
    for (let i = 0; i < 3000; i += 100) {
        if (numCentury >= i && numCentury < i + 100) {
            let strSplit = i.toString().split("")
            if (strSplit.length === 4) {
                let final = strSplit.slice(0, 2).reduce((final, item) => final + item)
                let result = parseInt(final)
                return `${result+1}` + "th Century"
            } else {
                let final = strSplit.slice(0, 1).reduce((final, item) => final + item)
                if (final === "1") {
                    return "2nd Century"
                } else if (final === "2") {
                    return "3rd Century"
                } else {
                    let result = parseInt(final)
                    return `${result+1}` + "th Century"
                }
            }
        }
    }
}

//https://www.codewars.com/kata/52fb87703c1351ebd200081f
