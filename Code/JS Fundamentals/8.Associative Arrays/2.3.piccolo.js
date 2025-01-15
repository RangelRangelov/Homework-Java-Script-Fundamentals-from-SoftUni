function piccolo(arr) {
    let parking = new Set();

    for (const command of arr) {
        let [direction, carNumber] = command.split(', ');

        if (direction === 'IN') {
            parking.add(carNumber);
        } else {
            parking.delete(carNumber);
        }
    }

    let carsLeft = Array.from(parking).sort((a, b) => a.localeCompare(b));
    if (carsLeft.length === 0) {
        console.log('Parking Lot is Empty');

    } else {
        console.log(carsLeft.join('\n'));
    }
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);