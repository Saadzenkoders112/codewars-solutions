// Description:
// Implement a function that receives two IPv4 addresses, and returns the number of addresses between them(including the first one, excluding the last one).

// All inputs will be valid IPv4 addresses in the form of strings.The last address will always be greater than the first one.

function countVal (addr) {
    let splittedAddr = addr.split(".")
    if (splittedAddr[2] === "0") {
        return parseInt(splittedAddr[3])
    } else if(splittedAddr[2] === "1" && splittedAddr[3] === "0") {
        return 256
    } else if (splittedAddr[2] === "1" && splittedAddr[3] !== "0") {
        return 256+parseInt(splittedAddr[3])
    }
}

function CountIpAddress (addr1, addr2) {
    let countAddr1 = countVal(addr1)
    let countAddr2 = countVal(addr2)
    return `No. of addressess: ${countAddr2 - countAddr1}`
}

//https://www.codewars.com/kata/526989a41034285187000de4