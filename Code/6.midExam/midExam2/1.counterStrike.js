function counterStrike(arr) {
    let energy = Number(arr.shift());
    let wonCount = 0;

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];

        if (command === 'End of battle') {
            console.log(`Won battles: ${wonCount}. Energy left: ${energy}`);
            return;
        }

        let currDistance = Number(command);

        if (energy < currDistance) {
            console.log(`Not enough energy! Game ends with ${wonCount} won battles and ${energy} energy`);
            return;
        }

        energy -= currDistance;
        wonCount++;

        if (wonCount % 3 === 0) {
            energy += wonCount;
        }
    }

    console.log(`Won battles: ${wonCount}. Energy left: ${energy}`);
}

counterStrike(["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"])
    ;