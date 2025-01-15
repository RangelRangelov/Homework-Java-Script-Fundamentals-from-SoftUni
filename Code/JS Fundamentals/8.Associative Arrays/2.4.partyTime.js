function manageParty(input) {
    let vipGuests = [];
    let regularGuests = [];

    let index = 0;
    while (input[index] !== 'PARTY') {
        let guest = input[index];
        if (/\d/.test(guest[0])) {
            vipGuests.push(guest);
        } else {
            regularGuests.push(guest);
        }
        index++;
    }

    index++;

    while (index < input.length) {
        let guest = input[index];

        let vipIndex = vipGuests.indexOf(guest);
        if (vipIndex !== -1) {
            vipGuests.splice(vipIndex, 1);
        }

        let regularIndex = regularGuests.indexOf(guest);
        if (regularIndex !== -1) {
            regularGuests.splice(regularIndex, 1);
        }

        index++;
    }

    let remainingGuests = vipGuests.concat(regularGuests);

    console.log(remainingGuests.length);
    for (let guest of remainingGuests) {
        console.log(guest);
    }
}

manageParty([
    '7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc'
]);
// Output:
// 2
// 7IK9Yo0h
// tSzE5t0p

manageParty([
    'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'xys2FYzn', 'MDzcM9ZK', 'PARTY', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ'
]);
// Output:
// 2
//