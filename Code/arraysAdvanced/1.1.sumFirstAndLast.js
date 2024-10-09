function sumFirstLast(arr) {
    let firstElement = Number(arr.shift());
    let lastElement = Number(arr.pop());

    console.log(firstElement + lastElement);
}

sumFirstLast(['20', '30', '40']);