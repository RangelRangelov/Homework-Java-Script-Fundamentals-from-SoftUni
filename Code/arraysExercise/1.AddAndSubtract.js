function addAndSubtract(arr) {
    let originalSum = 0;
    let modifiedSum = 0;
    let modifiedArr = arr.map((num, index) => {
        originalSum += num;
        if (num % 2 === 0) {
            num += index;
        } else {
            num -= index;
        }
        modifiedSum += num;
        return num;
    });

    console.log(modifiedArr);
    console.log(originalSum);
    console.log(modifiedSum);
}

addAndSubtract([5, 15, 23, 56, 35]);