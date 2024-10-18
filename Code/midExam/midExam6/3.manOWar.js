function battleSimulation(input) {
    let pirateShip = input.shift().split('>').map(Number);
    let warship = input.shift().split('>').map(Number);
    const maxHealth = Number(input.shift());

    for (let command of input) {
        if (command === 'Retire') break;

        let [action, ...args] = command.split(' ');

        if (action === 'Fire') {
            let index = Number(args[0]);
            let damage = Number(args[1]);
            if (index >= 0 && index < warship.length) {
                warship[index] -= damage;
                if (warship[index] <= 0) {
                    console.log("You won! The enemy ship has sunken.");
                    return;
                }
            }
        } else if (action === 'Defend') {
            let startIndex = Number(args[0]);
            let endIndex = Number(args[1]);
            let damage = Number(args[2]);
            if (startIndex >= 0 && startIndex < pirateShip.length && endIndex >= 0 && endIndex < pirateShip.length && startIndex <= endIndex) {
                for (let i = startIndex; i <= endIndex; i++) {
                    pirateShip[i] -= damage;
                    if (pirateShip[i] <= 0) {
                        console.log("You lost! The pirate ship has sunken.");
                        return;
                    }
                }
            }
        } else if (action === 'Repair') {
            let index = Number(args[0]);
            let health = Number(args[1]);
            if (index >= 0 && index < pirateShip.length) {
                pirateShip[index] = Math.min(pirateShip[index] + health, maxHealth);
            }
        } else if (action === 'Status') {
            let count = pirateShip.filter(section => section < maxHealth * 0.2).length;
            console.log(`${count} sections need repair.`);
        }
    }

    let pirateShipSum = pirateShip.reduce((acc, curr) => acc + curr, 0);
    let warshipSum = warship.reduce((acc, curr) => acc + curr, 0);

    console.log(`Pirate ship status: ${pirateShipSum}`);
    console.log(`Warship status: ${warshipSum}`);
}

battleSimulation([
    "12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"
]);