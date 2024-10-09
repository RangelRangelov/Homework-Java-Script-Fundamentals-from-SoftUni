function processOddNumbers(arr) {
    let result = arr.filter((x, index) => index % 2 !== 0)
                    .map(x => x * 2)
                    .reverse();

    console.log(result.join(' '));
}

processOddNumbers([10, 15, 20, 25]);