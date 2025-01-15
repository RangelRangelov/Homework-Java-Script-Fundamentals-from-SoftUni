function trackShotTargets(input) {
    let targets = input.shift().split(' ').map(Number);
    let shotTargets = 0;

    for (let command of input) {
        if (command === 'End') break;
        
        let index = Number(command);
        if (index < 0 || index >= targets.length || targets[index] === -1) {
            continue;
        }

        let shotValue = targets[index];
        targets[index] = -1;
        shotTargets++;

        for (let i = 0; i < targets.length; i++) {
            if (targets[i] !== -1) {
                if (targets[i] > shotValue) {
                    targets[i] -= shotValue;
                } else {
                    targets[i] += shotValue;
                }
            }
        }
    }

    console.log(`Shot targets: ${shotTargets} -> ${targets.join(' ')}`);
}

trackShotTargets([
    '24 50 36 70',
    '0',
    '4',
    '3',
    '1',
    'End'
]);