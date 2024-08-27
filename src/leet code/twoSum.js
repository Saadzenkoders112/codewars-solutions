function isPalindrome(x) {
    let numString = x.toString()
    let count = 1
    for (let i=0; i<numString.length; i++) {
        if (numString[i] !== numString[numString.length - count]) {
            return false
        }
        else{ 
            count++
        }
    }
    return true
};
console.log(isPalindrome(10))