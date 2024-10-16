function searchNumber(arr, commands) {
    let numberToTake = commands[0];
    let numberToDelete = commands[1];
    let searchNumber = commands[2];

    let takenElements = arr.slice(0, numberToTake);

    takenElements.splice(0, numberToDelete);

    let count = 0;
    for (let i = 0; i < takenElements.length; i++) {
        if (takenElements[i] === searchNumber) {
            count++;
        }
    }

    console.log(`Number ${searchNumber} occurs ${count} times.`);
}

searchNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);