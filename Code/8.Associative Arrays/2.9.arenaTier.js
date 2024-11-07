function manageGladiators(input) {
    let gladiators = {};

    function addGladiator(gladiator, technique, skill) {
        if (!gladiators[gladiator]) {
            gladiators[gladiator] = {};
        }
        if (!gladiators[gladiator][technique] || gladiators[gladiator][technique] < skill) {
            gladiators[gladiator][technique] = skill;
        }
    }

    function getTotalSkill(gladiator) {
        return Object.values(gladiators[gladiator]).reduce((acc, skill) => acc + skill, 0);
    }

    for (let command of input) {
        if (command === 'Ave Cesar') {
            break;
        }

        if (command.includes(' -> ')) {
            let [gladiator, technique, skill] = command.split(' -> ');
            skill = Number(skill);
            addGladiator(gladiator, technique, skill);
        } else if (command.includes(' vs ')) {
            let [gladiator1, gladiator2] = command.split(' vs ');

            if (gladiators[gladiator1] && gladiators[gladiator2]) {
                let commonTechniques = Object.keys(gladiators[gladiator1]).filter(tech => tech in gladiators[gladiator2]);

                if (commonTechniques.length > 0) {
                    let totalSkill1 = getTotalSkill(gladiator1);
                    let totalSkill2 = getTotalSkill(gladiator2);

                    if (totalSkill1 > totalSkill2) {
                        delete gladiators[gladiator2];
                    } else if (totalSkill2 > totalSkill1) {
                        delete gladiators[gladiator1];
                    }
                }
            }
        }
    }

    let sortedGladiators = Object.keys(gladiators)
        .sort((a, b) => getTotalSkill(b) - getTotalSkill(a) || a.localeCompare(b));

    for (let gladiator of sortedGladiators) {
        let totalSkill = getTotalSkill(gladiator);
        console.log(`${gladiator}: ${totalSkill} skill`);

        let sortedTechniques = Object.keys(gladiators[gladiator])
            .sort((a, b) => gladiators[gladiator][b] - gladiators[gladiator][a] || a.localeCompare(b));

        for (let technique of sortedTechniques) {
            console.log(`- ${technique} <!> ${gladiators[gladiator][technique]}`);
        }
    }
}

manageGladiators([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
]);
// Output:
// Stefan: 450 skill
// - Tiger <!> 250
// - Duck <!> 200
// Peter: 400 skill
// - BattleCry <!> 400
// Alex: 300 skill
// - PowerPunch <!> 300

manageGladiators([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]);
// Output:
// Gladius: 700 skill
// - Shield <!> 250
// - Support <!> 250
// - Heal <!> 200
// Peter: 400 skill
// - Duck <!> 400
