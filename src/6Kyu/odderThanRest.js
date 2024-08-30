// Description:
// Integral numbers can be even or odd.

// Even numbers satisfy n = 2m ( with m also integral ) and we will ( completely arbitrarily ) think of odd numbers as n = 2m + 1.
// Now, some odd numbers can be more odd than others: when for some n, m is more odd than for another's. Recursively. :]
// Even numbers are just not odd.

// Task
// Given a finite list of integral ( not necessarily non-negative ) numbers, determine the number that is odder than the rest.
// If there is no single such number, no number is odder than the rest; return Nothing, null or a similar empty value.

function odderThanRest(numbers) {
    function oddnessLevel(n) {
      let level = 0;
      while (n % 2 !== 0) {
        n = (n - 1) / 2;
        level++;
      }
      return level;
    }
  
    let oddnessLevels = numbers.map(oddnessLevel);
    let maxOddness = Math.max(...oddnessLevels);
    let candidates = numbers.filter((num, i) => oddnessLevels[i] === maxOddness);
    
    return candidates.length === 1 ? candidates[0] : null;
  }
  
//https://www.codewars.com/kata/5d6ee508aa004c0019723c1c
  