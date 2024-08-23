function PrimeNumbers(start, finish) {
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

    function getPrimes(start, finish) {
        let range = Math.max(start, finish)
        let result = []
        for (let i = 0; i <= range; i++) {
            if (isPrime(i)) {
                result.push(i)
            }
        }
        return result
    }
    console.log(getPrimes(start, finish))
}

PrimeNumbers(30, 1)