function lastDigit(arr) {
  let result = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i - 1]) {
      console.log(arr[i - 1], arr[i]);
      result += arr[i - 1] ^ arr[i];
    }
  }
  let final = result.toString().split("");
  let val = final[final.length - 1];
  return val;
}

console.log(lastDigit([3, 4, 2]));
