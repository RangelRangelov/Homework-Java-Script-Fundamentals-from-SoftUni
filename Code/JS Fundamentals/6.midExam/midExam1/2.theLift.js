function theLift(arr) {
    let peopleWaiting = Number(arr.shift());
    let wagons = arr.shift().split(' ').map(Number);
    let index = 0;

    while (peopleWaiting > 0) {
        if (wagons[index] < 4) {
            wagons[index]++;
            peopleWaiting--;
        } else {
            if (index === wagons.length -1) {
                console.log(`There isn't enough space! ${peopleWaiting} people in a queue!`);
                break;
            }
            index++;
        }
    }

    let wagonsWithFreeSpaces = wagons.filter(x => x < 4);

    if (wagonsWithFreeSpaces.length > 0) {
        console.log(`The lift has empty spots!`);
    }

    console.log(wagons.join(' '));
}

theLift([
    "15",
    "0 0 0 0 0"
   ]);