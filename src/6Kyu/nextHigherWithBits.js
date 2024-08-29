// Description:
// Your task is to find the next higher number (int) with the same number of '1'- Bits.

// I.e. as many 1 bits as before and output next higher than input. Input is always an int between 1 and 1<<30 (possibly inclusive). No bad cases or special tricks...

function countOneBits(n) {
  let count = 0;
  while (n > 0) {
    count += n & 1;
    n >>= 1;
  }
  return count;
}

function nextHigherWithSameOneBits(n) {
  const oneBitsCount = countOneBits(n);
  let next = n + 1;

  while (countOneBits(next) !== oneBitsCount) {
    next++;
  }

  return next;
}

//https://www.codewars.com/kata/56bdd0aec5dc03d7780010a5