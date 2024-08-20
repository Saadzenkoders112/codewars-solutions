Description:
// The Hamming Distance is a measure of similarity between two strings of equal length. Complete the function so that it returns the number of positions where the input strings do not match.

function HammingDistance(str1, str2) {
    let splittedStr1 = str1.split("")
    let splittedStr2 = str2.split("")
    let count=0
    console.log(splittedStr1, splittedStr2)
    for (let i=0; i<splittedStr1.length; i++) {
        if (str1[i] !== str2[i]) {
            count +=1
        }
    }
    return count
}

//https://www.codewars.com/kata/5410c0e6a0e736cf5b000e69