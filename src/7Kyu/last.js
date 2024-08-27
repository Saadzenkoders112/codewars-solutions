// Description
// Find the last element of the given argument(s).
function last (item) {
    let type = typeof(item)
    if (type === "string") {
        for (let i in item) {
            return item[item.length-1]
        }
    } else if(Array.isArray(item)) {
        return item[item.length -1]
    }
}

//https://www.codewars.com/kata/541629460b198da04e000bb9