// Description:
// You have been hired by a major MP3 player manufacturer to implement a new music compression standard. In this kata you will implement the ENCODER, and its companion kata deals with the DECODER. It can be considered a harder version of Range Extraction.

// Specification
// The input signal is represented as an array of integers. Several cases of regularities can be shortened.

// A sequence of 2 or more identical numbers is shortened as number*count
// A sequence of 3 or more consecutive numbers is shortened as first-last. This is true for both ascending and descending order
// A sequence of 3 or more numbers with the same interval is shortened as first-last/interval. Note that the interval does NOT need a sign
// Compression happens left to right
// Examples
// [1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20] is compressed to "1,3-5,7-11,14,15,17-20"
// [0, 2, 4, 5, 7, 8, 9] is compressed to "0-4/2,5,7-9"
// [0, 2, 4, 5, 7, 6, 5] is compressed to "0-4/2,5,7-5"
// [0, 2, 4, 5, 7, 6, 5, 5, 5, 5, 5] is compressed to "0-4/2,5,7-5,5*4"

function compress(arr) {
    let result = "";
    let i = 0;
    
    while (i < arr.length) {
      let start = i;
      
      while (i + 1 < arr.length && arr[i] === arr[i + 1]) i++;
      if (i > start) {
        result += arr[start] + '*' + (i - start + 1);
        i++;
        if (i < arr.length) result += ',';
        continue;
      }
      
      start = i;
      while (i + 1 < arr.length && arr[i] + 1 === arr[i + 1]) i++;
      if (i - start >= 2) {
        result += arr[start] + '-' + arr[i];
        i++;
        if (i < arr.length) result += ',';
        continue;
      }
      
      start = i;
      let interval = arr[i + 1] - arr[i];
      while (i + 1 < arr.length && arr[i] + interval === arr[i + 1]) i++;
      if (i - start >= 2) {
        result += arr[start] + '-' + arr[i] + '/' + Math.abs(interval);
        i++;
        if (i < arr.length) result += ',';
        continue;
      }
      
      result += arr[i];
      i++;
      if (i < arr.length) result += ',';
    }
    
    return result;
  }
  
//https://www.codewars.com/kata/58db9545facc51e3db00000a
  