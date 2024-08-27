function alternate(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let flag = false;
  for (let i = 0; i < str.length; i+=2) {
    if (!vowels.includes(str[i])) {
        return false
    } 
  }
  for (let i=1; i<str.length; i+=2) {
    if (vowels.includes(str[i])) {
        return false
    }
}
return true
}

console.log(alternate("apple"));
