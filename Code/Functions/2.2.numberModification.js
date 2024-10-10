function modifyNumber(num) {
    // Convert number to string to easily access digits
    let numStr = num.toString();

    // Function to calculate the average of digits
    function averageOfDigits(str) {
        let sum = 0;
        for (let char of str) {
            sum += Number(char);
        }
        return sum / str.length;
    }

    // Keep appending '9' until average of digits is greater than 5
    while (averageOfDigits(numStr) <= 5) {
        numStr += '9';
    }

    // Print the final modified number
    console.log(numStr);
}

// Example usage
modifyNumber(101);