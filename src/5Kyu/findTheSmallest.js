// Description:
// You have a positive number n consisting of digits. You can do at most one operation: Choosing the index of a digit in the number, remove this digit at that index and insert it back to another or at the same place in the number in order to find the smallest number you can get.

// Task:
// Return an array or a tuple or a string depending on the language (see "Sample Tests") with

// the smallest number you got
// the index i of the digit d you took, i as small as possible
// the index j (as small as possible) where you insert this digit d to have the smallest number.

function smallest(n) {
    let str = n.toString();
    let minNum = n;
    let fromIndex = 0;
    let toIndex = 0;
    
    for (let i = 0; i < str.length; i++) {
      let removed = str.slice(0, i) + str.slice(i + 1);
      
      for (let j = 0; j <= removed.length; j++) {
        let newNum = parseInt(removed.slice(0, j) + str[i] + removed.slice(j));
        
        if (newNum < minNum) {
          minNum = newNum;
          fromIndex = i;
          toIndex = j;
        }
      }
    }
    
    return [minNum, fromIndex, toIndex];
  }
  
//https://www.codewars.com/kata/573992c724fc289553000e95
  