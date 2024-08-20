// There is a queue for the self - checkout tills at the supermarket.Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue.Each integer represents a customer, and its value is the amount of time they require to check out.
//     n: a positive integer, the number of checkout tills.
//         output
// The function should return an integer, the total time required.

function SuperMarketQueue(array, n) {
    if (n === 1) {
        let timeRequired = array.reduce((final, i) => final + i)
        return timeRequired
    } else if (n === 2) {
        let maxIndex = 0
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[maxIndex]) {
                maxIndex = i
            }
        }
        if (maxIndex === 0) {
            let finalSum = 0
            for (let i = 1; i < array.length; i++) {
                finalSum += array[i]
            }
            if (finalSum < array[maxIndex]) {
                return array[maxIndex]
            } else { 
                return finalSum
            }
        } else {
            return array[maxIndex] + array[0]

        }
    }
}

//https://www.codewars.com/kata/57b06f90e298a7b53d000a86