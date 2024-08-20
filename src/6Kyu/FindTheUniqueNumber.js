Description:
// There is an array with some numbers.All numbers are equal except for one.Try to find it!

function FindTheUniqueNumber(array) {
    for (let i=0; i<array.length; i++) {
        var count =0 
        for (let j=0; j<array.length; j++) {
            if (array[i] === array[j]) {
                count+=1
            }
        }
        if (count === 1) {
            return array[i]
        }
    }
}

//https://www.codewars.com/kata/585d7d5adb20cf33cb000235