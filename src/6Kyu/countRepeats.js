// Description:
// Write a function that returns the count of characters that have to be removed in order to get a string with no consecutive repeats.

// Note: This includes any characters

function countRemovals(s) {
  if (s.length === 0) return 0;

  let removals = 0;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      removals++;
    }
  }

  return removals;
}

//https://www.codewars.com/kata/598ee7b6ec6cb90dd6000061
