function houseParty(arr) {
    let guests = [];

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];
        let parts = command.split(' ');
        let name = parts[0];
        let action = parts.slice(1).join(' ');

        if (action === 'is going!') {
            if (!guests.includes(name)) {
                guests.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        } else if (action === 'is not going!') {
            if (guests.includes(name)) {
                guests = guests.filter(guest => guest !== name);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }

    for (let guest of guests) {
        console.log(guest);
    }
}

houseParty([
    'Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']);