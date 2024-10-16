function snowballMission(input) {
    let matrix = input.slice(0, input.length - 1).map(row => row.split(' ').map(Number));
    let bombCoordinates = input[input.length - 1].split(' ').map(coord => coord.split(',').map(Number));
    let snowballDamage = 0;
    let bunniesKilled = 0;

    for (let [bombRow, bombCol] of bombCoordinates) {
        let bombDamage = matrix[bombRow][bombCol];
        if (bombDamage > 0) {
            for (let i = bombRow - 1; i <= bombRow + 1; i++) {
                for (let j = bombCol - 1; j <= bombCol + 1; j++) {
                    if (i >= 0 && i < matrix.length && j >= 0 && j < matrix[0].length) {
                        matrix[i][j] -= bombDamage;
                        if (matrix[i][j] < 0) matrix[i][j] = 0;
                    }
                }
            }
            snowballDamage += bombDamage;
            bunniesKilled++;
            matrix[bombRow][bombCol] = 0;
        }
    }

    for (let row of matrix) {
        for (let cell of row) {
            if (cell > 0) {
                snowballDamage += cell;
                bunniesKilled++;
            }
        }
    }

    console.log(snowballDamage);
    console.log(bunniesKilled);
}

snowballMission(['5 10 15 20', '10 10 10 10', '10 15 10 10', '10 10 10 10', '2,2 0,1']); 
