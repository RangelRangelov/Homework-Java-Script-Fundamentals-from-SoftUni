function smallestTwoNumbers(arr) {
    let sortedNums = arr.sort((a,b) => a - b);
    let min2Nums = sortedNums.slice(0,2);
    console.log(min2Nums.join(' '));  
}

smallestTwoNumbers([30, 15, 50, 5]);