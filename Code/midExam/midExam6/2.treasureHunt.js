function treasureHunt(input) {
    let chest = input.shift().split('|');

    for (let i = 0; i < input.length; i++) {
        let command = input[i];
        if (command === 'Yohoho!') break;

        let [action, ...items] = command.split(' ');

        if (action === 'Loot') {
            items.forEach(item => {
                if (!chest.includes(item)) {
                    chest.unshift(item);
                }
            });
        } else if (action === 'Drop') {
            let index = Number(items[0]);
            if (index >= 0 && index < chest.length) {
                let item = chest.splice(index, 1)[0];
                chest.push(item);
            }
        } else if (action === 'Steal') {
            let count = Number(items[0]);
            let stolenItems = chest.splice(-count);
            console.log(stolenItems.join(', '));
        }
    }

    if (chest.length > 0) {
        let totalLength = chest.reduce((acc, item) => acc + item.length, 0);
        let averageGain = totalLength / chest.length;
        console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
    } else {
        console.log('Failed treasure hunt.');
    }
}

treasureHunt([
    "Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"
]);