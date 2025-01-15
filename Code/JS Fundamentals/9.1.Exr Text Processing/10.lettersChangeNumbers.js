function calculateSum(input) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    function getLetterPosition(letter) {
        return alphabet.indexOf(letter.toLowerCase()) + 1;
    }

    function processString(str) {
        let firstLetter = '';
        let numberStr = '';
        let lastLetter = '';

        for (let i = 0; i < str.length; i++) {
            if (isNaN(str[i])) {
                if (firstLetter === '') {
                    firstLetter = str[i];
                } else {
                    lastLetter = str[i];
                }
            } else {
                numberStr += str[i];
            }
        }

        let number = parseInt(numberStr, 10);
        let result = number;

        if (firstLetter === firstLetter.toUpperCase()) {
            result /= getLetterPosition(firstLetter);
        } else {
            result *= getLetterPosition(firstLetter);
        }

        if (lastLetter === lastLetter.toUpperCase()) {
            result -= getLetterPosition(lastLetter);
        } else {
            result += getLetterPosition(lastLetter);
        }

        totalSum += result;
    }

    let strings = input.split(' ').filter(str => str !== '');
    let totalSum = 0;

    for (let str of strings) {
        processString(str);
    }

    console.log(totalSum.toFixed(2));
}

calculateSum('A12b s17G');
