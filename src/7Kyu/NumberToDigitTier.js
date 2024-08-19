// Description:
// Create a function that takes a number and returns an array of strings containing the number cut off at each digit.

function numberToDigitTier (num) {
    let numString = num.toString()
    let splitNum = numString.split("")
    let array = []
    var x = null
    for (let i=0; i < splitNum.length; i++) {
        console.log(x)
        if (i === 0) {
            array.push(splitNum[i])
            var x = splitNum[0]
        } else {
            array.push(x+splitNum[i])
            var x = x + splitNum[i]
        }
    }
    return array
}

//https://www.codewars.com/kata/586bca7fa44cfc833e00005c