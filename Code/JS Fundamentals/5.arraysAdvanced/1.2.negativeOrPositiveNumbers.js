function negativePositive(arr) {
    let newArr = [];

    for (let value of arr) {
       let num = Number(value);

       if (num < 0) {
        newArr.unshift(num);
       } else {
newArr.push(num);
       }
    }

    console.log(newArr.join('\n'));  
}

negativePositive(['7', '-2', '8', '9']);