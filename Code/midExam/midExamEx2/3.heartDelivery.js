function heartDelivery(arr) {
    let heartsNeededForHouses = arr.shift().split('@').map(Number);
    let command = arr.shift();
    let position = 0;

    while (command !== 'Love!') {
        let tokens = command.split(' ');
        let jumpLength = Number(tokens[1]);
        position += jumpLength;
        if (position >= heartsNeededForHouses.length) {
            position = 0;
        }

        if (heartsNeededForHouses[position] === 0) {
            console.log(`Place ${position} already had Valentine's day.`);
        } else {
            heartsNeededForHouses[position] -= 2;
            
            if (heartsNeededForHouses[position] === 0) {
                console.log(`Place ${position} has Valentine's day.`);
            }
        }

        command = arr.shift();
    }

    console.log(`Cupid's last position was ${position}.`);
    let unfinishedHouses = heartsNeededForHouses.filter(house => house !== 0).length;
    if (unfinishedHouses === 0) {
        console.log('Mission was successful.');
    } else {
        console.log(`Cupid has failed ${unfinishedHouses} places.`);
    }
}

heartDelivery([
    "10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"
]);