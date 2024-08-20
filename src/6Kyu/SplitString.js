// Description:
// Complete the solution so that it splits the string into pairs of two characters.If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore('_').

function SplitString(str) {
    let splittedStr = str.split("")
    let array = []
    if (splittedStr.length%2 === 0) {
        for (let i=0; i<splittedStr.length; i+=2) {
            array.push(splittedStr[i]+splittedStr[i+1])
        }
    } else {
        for (let i = 0; i < splittedStr.length-1; i += 2) {
            array.push(splittedStr[i] + splittedStr[i + 1])
        }
        let length = splittedStr.length
        array.push(splittedStr[length-1] + "_")
    }
    return array
}

//https://www.codewars.com/kata/515de9ae9dcfc28eb6000001