function bombNumbers(numbers, bombInfo) {
    let bombNumber = Number(bombInfo[0]);
    let bombPower = Number(bombInfo[1]);
    let bombIndex = numbers.indexOf(bombNumber);
    
    while (bombIndex !== -1) {
        let bombStartIndex = Math.max(bombIndex - bombPower, 0);
        let bombEndIndex = Math.min(bombIndex + bombPower, numbers.length - 1);
        let numbToRemove = bombEndIndex - bombStartIndex + 1;
        
        numbers.splice(bombStartIndex, numbToRemove);
        bombIndex = numbers.indexOf(bombNumber);
    }
    
    let sum = numbers.reduce((acc, curr) => acc + curr, 0);
    console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);