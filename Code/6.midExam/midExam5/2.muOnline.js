function dungeonGame(input) {
    let rooms = input.split('|');
    let health = 100;
    let bitcoins = 0;
    let roomCounter = 0;

    for (let room of rooms) {
        roomCounter++;
        let [command, value] = room.split(' ');
        value = Number(value);

        if (command === 'potion') {
            let healedAmount = Math.min(100 - health, value);
            health += healedAmount;
            console.log(`You healed for ${healedAmount} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (command === 'chest') {
            bitcoins += value;
            console.log(`You found ${value} bitcoins.`);
        } else {
            health -= value;
            if (health > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${roomCounter}`);
                return;
            }
        }
    }

    console.log("You've made it!");
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
}

dungeonGame("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
