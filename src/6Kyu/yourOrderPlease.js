// Description:
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

function orderWords(sentence) {
  if (sentence === "") return "";

  const words = splitWords(sentence);
  const sortedWords = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const position = extractNumber(word);
    if (position !== -1) {
      sortedWords[position - 1] = word;
    }
  }

  return concatenateWords(sortedWords);
}

function splitWords(sentence) {
  const words = [];
  let word = "";
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      if (word) {
        words.push(word);
        word = "";
      }
    } else {
      word += sentence[i];
    }
  }
  if (word) {
    words.push(word);
  }
  return words;
}

function extractNumber(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] >= "1" && word[i] <= "9") {
      return parseInt(word[i], 10);
    }
  }
  return -1;
}

function concatenateWords(words) {
  let result = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i]) {
      if (result) {
        result += " ";
      }
      result += words[i];
    }
  }
  return result;
}

//https://www.codewars.com/kata/55c45be3b2079eccff00010f
