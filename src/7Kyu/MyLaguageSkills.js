// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.

function myLanguageSkills(obj) {
    let array = []
    for (let i in obj) {
        if (obj[i] >= 60) {
            array.push(i)
        }
    }
    return array
}

//https://www.codewars.com/kata/5b16490986b6d336c900007d