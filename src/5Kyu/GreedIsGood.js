function GreedIsGood(array) {
    let count = 0
    let result = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i+1] && array[i] === array[i + 1]) {
            count++
            if (count === 2) {
                if (array[i] === 2 || array[i] === 3 || array[i] === 4 || array[i] === 5 || array[i] === 6) {
                    result += array[i] * 100
                    console.log(result, "Got three number other than 1")
                } else {
                    result += 1000
                    console.log(result, "Got three 1's")
                }
            } else {
                continue
            }
        }
        else if (array[i] === 2 || array[i] === 3 || array[i] === 4 || array[i] === 5 || array[i] === 6) {
            continue
        } else if (array[i] === 5) {
            result += array[i] * 10
            console.log(result, "Got one 5")
        } else if (array[i] === 1) {
            result += array[i] * 100
            console.log(result, "Got one 1")
        }
    }
    return result
}

console.log(GreedIsGood([1, 1, 1, 3, 1]))