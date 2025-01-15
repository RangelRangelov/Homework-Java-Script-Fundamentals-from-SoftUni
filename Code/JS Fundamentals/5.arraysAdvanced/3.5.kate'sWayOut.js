function findKateInMaze(input) {
    const directions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0]
    ];

    const rows = input[0];
    const maze = input.slice(1).map(row => row.split(''));
    const cols = maze[0].length;
    let start = null;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (maze[r][c] === 'k') {
                start = [r, c];
                break;
            }
        }
        if (start) break;
    }

    if (!start) {
        console.log("Kate cannot get out");
        return;
    }

    let maxMoves = 0;
    let queue = [[...start, 0]];
    let visited = new Set([`${start[0]},${start[1]}`]);

    while (queue.length > 0) {
        let [currRow, currCol, moves] = queue.shift();

        if (currRow === 0 || currRow === rows - 1 || currCol === 0 || currCol === cols - 1) {
            maxMoves = Math.max(maxMoves, moves + 1);
        }

        for (let [dr, dc] of directions) {
            let newRow = currRow + dr;
            let newCol = currCol + dc;

            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && maze[newRow][newCol] === ' ' && !visited.has(`${newRow},${newCol}`)) {
                visited.add(`${newRow},${newCol}`);
                queue.push([newRow, newCol, moves + 1]);
            }
        }
    }

    if (maxMoves > 0) {
        console.log(`Kate got out in ${maxMoves} moves`);
    } else {
        console.log("Kate cannot get out");
    }
}

findKateInMaze([
    4,
    "######",
    "##  k#",
    "## ###",
    "## ###"
]);