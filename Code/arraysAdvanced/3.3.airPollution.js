function airPollution(map, forces) {
    let matrix = map.map(row => row.split(' ').map(Number));

    for (let force of forces) {
        let [type, value] = force.split(' ');
        value = Number(value);

        if (type === 'breeze') {
            for (let col = 0; col < 5; col++) {
                matrix[value][col] = Math.max(0, matrix[value][col] - 15);
            }
        } else if (type === 'gale') {
            for (let row = 0; row < 5; row++) {
                matrix[row][value] = Math.max(0, matrix[row][value] - 20);
            }
        } else if (type === 'smog') {
            for (let row = 0; row < 5; row++) {
                for (let col = 0; col < 5; col++) {
                    matrix[row][col] += value;
                }
            }
        }
    }

    let pollutedBlocks = [];
    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            if (matrix[row][col] >= 50) {
                pollutedBlocks.push(`[${row}-${col}]`);
            }
        }
    }

    if (pollutedBlocks.length > 0) {
        console.log(`Polluted areas: ${pollutedBlocks.join(', ')}`);
    } else {
        console.log("No polluted areas");
    }
}

airPollution(
    ['5 7 72 14 4', '41 35 37 27 33', '23 16 27 42 12', '2 20 28 39 14', '16 34 31 10 24'],
    ['breeze 1', 'gale 2', 'smog 25']
);
