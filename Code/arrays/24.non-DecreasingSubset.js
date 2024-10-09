function extractNonDecreasingSubset(arr) {
    let result = [];
    let currentBiggest = -Infinity;

    for (let num of arr) {
        if (num >= currentBiggest) {
            result.push(num);
            currentBiggest = num;
        }
    }

    console.log(result.join(' '));
}

let input = [1, 3, 8, 4, 10, 12, 3, 2, 24];
extractNonDecreasingSubset(input);