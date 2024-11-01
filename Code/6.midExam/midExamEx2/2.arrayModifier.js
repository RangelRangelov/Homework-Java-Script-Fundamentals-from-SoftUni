function arrayModifier(arr) {
    let numbs = arr.shift().split(' ').map(x => Number(x));
    let command = arr.shift();
    
    while (command !== 'end') {
        let tokens = command.split(' ');
        
        let action = tokens[0];
        let idx1 = Number(tokens[1]);
        let idx2 = Number(tokens[2]);

        if (action === 'swap') {
            let num1 = numbs[idx1];
            let num2 = numbs[idx2];

            numbs[idx1] = num2;
            numbs[idx2] = num1;
        } else if (action === 'multiply') {
            let num1 = numbs[idx1];
            let num2 = numbs[idx2];

            let product = num1 * num2;
            numbs[idx1] = product;
        } else if (action === 'decrease') {
            numbs = numbs.map(x => x - 1);
        }

        command = arr.shift();
    }

    console.log(numbs.join(', '));
    
}

arrayModifier([
        '23 -2 321 87 42 90 -123',
        'swap 1 3',
        'swap 3 6',
        'swap 1 0',
        'multiply 1 2',
        'multiply 2 1',
        'decrease',
        'end'
      ]);