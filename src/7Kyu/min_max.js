Description:
// Implement a function that returns the minimal and the maximal value of a list (in this order).

function max_min(array) {
    var min = array[0]
    var max = array[0]
    for (let i=0; i<array.length; i++) {
        if (array[i]<min) {
            var min = array[i]
        }
        if (array[i]>max) {
            var max = array[i]
        }
    }
    console.log(min, max)
}
//https://www.codewars.com/kata/57a1ae8c7cb1f31e4e000130