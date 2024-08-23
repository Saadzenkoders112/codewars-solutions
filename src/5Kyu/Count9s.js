function Count9s(n) {
    let count = 0
    for (let i = 0; i <= n; i++) {
        if (i <= 9) {
            if (i === 9) {
                count++
            }
        } else {
            let num = String(i).split("")
            for (let j = 0; j < num.length; j++) {
                if (parseInt(num[j]) === 9) {
                    count++
                }
            }
        }
    }
    return count
}

console.log("Count: ",Count9s(100))