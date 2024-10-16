function customSort(arr) {
    let sortedArr = arr.slice().sort((a, b) => a - b);
    let result = [];
    
    while (sortedArr.length) {
        result.push(sortedArr.pop()); // biggest remaining element
        if (sortedArr.length) {
            result.push(sortedArr.shift()); // smallest remaining element
        }
    }
    
    console.log(result.join(' '));
}

customSort([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);