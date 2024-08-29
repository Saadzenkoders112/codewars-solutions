// Description:
// Complete the greatestProduct method so that it'll find the greatest product of five consecutive digits in the given string of digits.

// For example: the greatest product of five consecutive digits in the string "123834539327238239583" is 3240.

// The input string always has more than five digits.

function greatestProduct(digits) {
  let maxProduct = 0;

  for (let i = 0; i <= digits.length - 5; i++) {
    let product = 1;
    for (let j = i; j < i + 5; j++) {
      product *= parseInt(digits[j], 10);
    }
    if (product > maxProduct) {
      maxProduct = product;
    }
  }

  return maxProduct;
}

// https://www.codewars.com/kata/529872bdd0f550a06b00026e