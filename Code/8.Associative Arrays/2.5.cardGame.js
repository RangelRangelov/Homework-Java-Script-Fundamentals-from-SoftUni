function calculateCardValues(input) {
    const cardValues = {
        '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10,
        'J': 11, 'Q': 12, 'K': 13, 'A': 14
    };
    const suitValues = {
        'S': 4, 'H': 3, 'D': 2, 'C': 1
    };
    
    let players = {};

    input.forEach(entry => {
        let [name, cards] = entry.split(': ');
        cards = cards.split(', ');

        if (!players[name]) {
            players[name] = new Set();
        }

        cards.forEach(card => {
            players[name].add(card);
        });
    });

    Object.keys(players).forEach(name => {
        let totalValue = 0;
        players[name].forEach(card => {
            let power = card.slice(0, -1);
            let suit = card.slice(-1);
            totalValue += cardValues[power] * suitValues[suit];
        });

        console.log(`${name}: ${totalValue}`);
    });
}

calculateCardValues([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);
// Output:
// Peter: 167
// Tomas: 175
// Andrea: 197

calculateCardValues([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
]);
// Output:
// John: 167
// Slav: 175
// Alex: 115
// Thomas: 125
