function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function ReducedFraction(d) {
    let result = [];

    for (let i = 1; i < d; i++) {
        if (gcd(i, d) === 1) {
            result.push(`${i}/${d}`);
        }
    }
    return result.length;
}

console.log("Answer: ",ReducedFraction(25));