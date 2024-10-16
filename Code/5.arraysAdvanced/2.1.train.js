function train(arr) {
    let train = arr[0].split(' ')
        .map(num => Number(num));
    let maxCapacity = Number(arr[1]);

    for (let i = 2; i < arr.length; i++) {
        let cmdInfo = arr[i].split(' ');
        let pasangerCount = 0

        if (cmdInfo[0] == 'Add') {
            pasangerCount = Number(cmdInfo[1]);
            train.push(pasangerCount);
        } else {
            pasangerCount = Number(cmdInfo[0]);
            for (let i = 0; i < train.length; i++) {
                let currPasangers = train[i];
                if (currPasangers + pasangerCount <= maxCapacity) {
                    train[i] += pasangerCount;
                    break;
                }

            }
        }
    }
    console.log(train.join(' '));

}
train([
    '32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']);