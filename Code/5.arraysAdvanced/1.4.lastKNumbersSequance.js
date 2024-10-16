function lastKNumbersSequance(n, k) {
    let sequance = [1];

    while (sequance.length < n) {
        let sum = 0;
        let lastNums = sequance.slice(-k);

        for(const num of lastNums) {
            sum += num;
        }

        sequance.push(sum);
    }

    console.log(sequance.join(' '));
    
}

lastKNumbersSequance(6, 3);