function PrimeWithEvenDigits(n) {
    let result = []
    let count = 0
    function isPrime(num) {
        if (num % 2 === 0) return false
        if (num <= 1) return false
        if (num === 2) return true
        for (let i = 3; i < num; i += 2) {
            if (num % i === 0) {
                return false
            }
        }
        return true
    }
    for (let i = 0; i <= n; i++) {
        if (isPrime(i)) {
            result.push(i)
        }
    }

    for (let i = result.length - 1; i >= 0; i--) {
        let num = String(result[i]).split("")
        count = 0
        for (let j = 0; j < num.length; j++) {
            if (parseInt(num[j]) % 2 === 0) {
                count++
            }
            if (count === 2) {
                console.log(result[i])
                return
            } else {
                continue
            }
        }
    }
}

PrimeWithEvenDigits(487)
