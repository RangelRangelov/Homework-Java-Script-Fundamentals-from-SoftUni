function arrayRotation(arr, rotation) {
    for (let currRotation = 1; currRotation <= rotation; currRotation++) {
        let firstElement = arr.shift();
        arr.push(firstElement);
    }

    console.log(arr.join(' '));
    
}

arrayRotation([51, 47, 32, 61, 21], 2);