function equakSums(arr) {

    for (let i = 0; i < arr.length; i++) {
        let sumLeft = 0;
        let sumRight = 0;

        for (let j = 0; j < i; j++) {
            let numLeft = arr[j];
            sumLeft += numLeft;
        }

        for (let j = i + 1; j < arr.length; j++) {
            let numRight = arr[j];
            sumRight += numRight;
        }

        if (sumLeft === sumRight) {
            console.log(i);
            return;
        }
    }

    console.log('no');
}

equakSums([1, 2, 3, 3]);