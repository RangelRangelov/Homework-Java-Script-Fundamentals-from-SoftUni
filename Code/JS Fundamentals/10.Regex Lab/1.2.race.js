function race(arr) {
    let names = arr.shift().split(', ');
    let runDistances = {};

    for (const name of names) {
        runDistances[name] = 0;
    }

    let command = arr.shift();
    let letterRegex = /[A-Za-z]/g;
    let digitRegex = /\d/g;

    while (command !== 'end of race') {
        let matches = command.match(letterRegex);
        let name = matches.join('');
        
        let digitMatches = command.match(digitRegex).map(Number);
        let sum = 0;

        for (const digit of digitMatches) {
            sum += digit;
        }

        if (name in runDistances) {
            runDistances[name] += sum;
        }
        
        command = arr.shift();
    }

    let entries = Object.entries(runDistances).sort((a,b) => b[1] - a[1]);
    
    console.log(`1st place: ${entries[0][0]}`);
    console.log(`2nd place: ${entries[1][0]}`);
    console.log(`3rd place: ${entries[2][0]}`);
    
    
}
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']);