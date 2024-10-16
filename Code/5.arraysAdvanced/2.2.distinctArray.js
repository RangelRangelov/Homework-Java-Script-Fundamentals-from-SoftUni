function distinctArray(arr) {
    let uniqueElements = [];

    for (let i = 0; i < arr.length; i++) {
        if (!uniqueElements.includes(arr[i])) {
            uniqueElements.push(arr[i]);
        }
    }

    console.log(uniqueElements.join(' '));
}


distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);