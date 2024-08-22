// Description:
// You're going to provide a needy programmer a utility method that generates an infinite amount of sequential fibonacci numbers.

// to do this return an Iterator < BigInt > starting with 1

// A fibonacci sequence starts with two 1s.Every element afterwards is the sum of the two previous elements.

function fibonacci(step) {
    var array = []
    for (let i=0; i<step; i++) {
        if (i === 0 || i===1) {
            array.push(1)
        } else {
            let newNo = array[i - 1] + array[i - 2];
            array.push(newNo);
        }
    }
    return array
}

//https://www.codewars.com/kata/55695bc4f75bbaea5100016b