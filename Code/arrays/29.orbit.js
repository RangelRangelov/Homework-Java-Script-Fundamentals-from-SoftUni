function createOrbitMatrix([width, height, x, y]) {
    let matrix = Array.from({ length: height }, () => Array(width).fill(0));

    function calculateValue(i, j) {
        return Math.max(Math.abs(i - x), Math.abs(j - y)) + 1;
    }

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            matrix[i][j] = calculateValue(i, j);
        }
    }

    for (let row of matrix) {
        console.log(row.join(' '));
    }
}

createOrbitMatrix([4, 4, 0, 0]);