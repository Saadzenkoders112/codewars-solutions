// Description
// Middle Earth is about to go to war.The forces of good will have many battles with the forces of evil.Different races will certainly be involved.Each race has a certain worth when battling against others.On the side of good we have the following races, with their associated worth:

// Hobbits: 1
// Men: 2
// Elves: 3
// Dwarves: 3
// Eagles: 4
// Wizards: 10
// On the side of evil we have:

// Orcs: 1
// Men: 2
// Wargs: 2
// Goblins: 2
// Uruk Hai: 3
// Trolls: 5
// Wizards: 10

// Input:
// The function will be given two parameters.Each parameter will be a string of multiple integers separated by a single space.Each string will contain the count of each race on the side of good and evil.

// The first parameter will contain the count of each race on the side of good in the following order:

// Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
// The second parameter will contain the count of each race on the side of evil in the following order:

// Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
// All values are non - negative integers.The resulting sum of the worth for each side will not exceed the limit of a 32 - bit integer.

//     Output:
// Return "Battle Result: Good triumphs over Evil" if good wins, "Battle Result: Evil eradicates all trace of Good" if evil wins, or "Battle Result: No victor on this battle field" if it ends in a tie.

function GoodVsEvil(good, evil) {
    let splittedGood = good.split(" ")
    let splittedEvil = evil.split(" ")
    let goodCount = 0
    let evilCount = 0
    for (let i of splittedGood) {
        goodCount += parseInt(i)
    }
    for (let i of splittedEvil) {
        evilCount += parseInt(i)
    }
    if (goodCount > evilCount) {
        return "Battle Result: Good triumphs over Evil"
    } else if (goodCount < evilCount) {
        return "Battle Result: Evil eradicates all trace of Good"
    } else {
        return "Battle Result: No victor on this battle field"
    }
}

//https://www.codewars.com/kata/52761ee4cffbc69732000738

