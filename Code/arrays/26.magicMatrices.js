function isMagicMatrix(matrix) {
    const sum = matrix[0].reduce((a, b) => a + b, 0);


    for (let row of matrix) {
        if (row.reduce((a, b) => a + b, 0) !== sum) {
            return false;
        }
    }

    for (let col = 0; col < matrix[0].length; col++) {
        let colSum = 0;
        for (let row = 0; row < matrix.length; row++) {
            colSum += matrix[row][col];
        }
        if (colSum !== sum) {
            return false;
        }
    }

    return true;
}

console.log(isMagicMatrix([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]));