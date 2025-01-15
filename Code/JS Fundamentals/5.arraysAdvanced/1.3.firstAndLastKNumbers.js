function firstAndLastKNumbers(arr) {
    let k = arr.shift();

    let firsKElements = arr.slice(0,k);
    let lastKELements = arr.slice(-k);

    console.log(firsKElements.join(' '));
    console.log(lastKELements.join(' '));
}

firstAndLastKNumbers([2, 7, 8, 9]);