function heroRecruit(arr) {
    let heroes = {};

    let cmd = arr.shift();

    while (cmd !== "End") {
        let [action, heroName, spellName] = cmd.split(' ');

        if (action === "Enroll") {
            if (heroes[heroName]) {
                console.log(`${heroName} is already enrolled.`);
            } else {
                heroes[heroName] = [];
            }
        } else if (action === "Learn") {
            if (!heroes[heroName]) {
                console.log(`${heroName} doesn't exist.`);
            } else if (heroes[heroName].includes(spellName)) {
                console.log(`${heroName} has already learnt ${spellName}.`);
            } else {
                heroes[heroName].push(spellName);
            }
        } else if (action === "Unlearn") {
            if (!heroes[heroName]) {
                console.log(`${heroName} doesn't exist.`);
            } else if (!heroes[heroName].includes(spellName)) {
                console.log(`${heroName} doesn't know ${spellName}.`);
            } else {
                heroes[heroName] = heroes[heroName].filter(spell => spell !== spellName);
            }
        }

        cmd = arr.shift();
    }
    console.log("Heroes:");
    for (let hero in heroes) {
        console.log(`== ${hero}: ${heroes[hero].join(', ')}`);
    }
}
heroRecruit(["Enroll Stefan",
    "Enroll Peter",
    "Enroll John",
    "Learn Stefan Spell",
    "Learn Peter Dispel", 
    "End"]);
