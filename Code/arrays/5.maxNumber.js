function maxNumber(arr) {
    let topNums = [];
    for (let i = 0; i < arr.length; i++) {
        let currNum = arr[i];
        let isTopNum = true;
        
        for (let j = i + 1; j < arr.length; j++) {
            let newNum = arr[j];
            if (newNum >= currNum) {
                isTopNum = false;
                break;
            }
        }

        if (isTopNum === true) {
           topNums.push(currNum); 
        }
    }

    console.log(topNums.join(' '));
    
}

maxNumber([1, 4, 3, 2]);