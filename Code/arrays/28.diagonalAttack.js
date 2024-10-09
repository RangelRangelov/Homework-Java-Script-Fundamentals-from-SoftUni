function processMatrix(input) {
    let matrix = input.map(row => row.split(' ').map(Number));
    let n = matrix.length;

    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    
    for (let i = 0; i < n; i++) {
        mainDiagonalSum += matrix[i][i];
        secondaryDiagonalSum += matrix[i][n - i - 1];
    }
    
    if (mainDiagonalSum === secondaryDiagonalSum) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (i !== j && i !== n - j - 1) {
                    matrix[i][j] = mainDiagonalSum;
                }
            }
        }
    }

    for (let row of matrix) {
        console.log(row.join(' '));
    }
}

let input = [
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
];

processMatrix(input);