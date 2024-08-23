// Description:
// Greed is a dice game played with five six - sided dice.Your mission, should you choose to accept it, is to score a throw according to these rules.You will always be given an array with five six - sided dice values.
//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   => 100 points
//  One   5   => 50 point
// A single die can only be counted once in each roll.For example, a given "5" can only count as part of a triplet(contributing to the 500 points) or as a single 50 points, but not both in the same roll.

function GreedIsGood(array) {
    let numberCount = {}
    let result = 0
    for (let i = 0; i < array.length; i++) {
        if (!(String(array[i]) in numberCount)) {
            numberCount[array[i]] = {
                "count": 1
            }
        } else if(String(array[i]) in numberCount) {
            numberCount[array[i]].count +=1
        }
    }

    for (let i in numberCount) {
        if (i === "2" || i === "3" || i === "4" || i === "5" || i === "6") {
            let count = numberCount[i].count;

            if (i === "5") {
                console.log("5 spotted");
                console.log(i, count);
                if (count % 3 === 0) {
                    console.log("Exactly three 5's");
                    result += 500;
                } else if (count > 3) {
                    console.log("More than three 5's");
                    result += 500 + Math.floor(count / 3) * 50;
                } else {
                    console.log("Less than three 5's");
                    result += count * 50;
                }
            } else {
                console.log("Other than 5 spotted");
                console.log(i, count);
                if (count % 3 === 0) {
                    console.log("Exactly three " + i + "'s");
                    result += parseInt(i) * 100;
                } else if (count > 3) {
                    console.log("More than three " + i + "'s");
                    result += parseInt(i) * 100;
                }
            }
        } else if (i === "1") {
            console.log("1 spotted");
            let count = numberCount[i].count; 
            console.log(i, count);
            if (count % 3 === 0) {
                console.log("Exactly three 1's");
                result += 1000;
            } else if (count > 3) {
                console.log("More than three 1's");
                result += 1000 + Math.floor(count / 3) * 100;
            } else {
                console.log("Less than three 1's");
                result += count * 100;
            }
        }
    }
    console.log("Final result:",result)
}

//https://www.codewars.com/kata/5270d0d18625160ada0000e4