function obtainLegendary(input) {
    const keyMaterials = {
        shards: 0,
        fragments: 0,
        motes: 0
    };
    const junkMaterials = {};

    const requiredMaterials = {
        shards: "Shadowmourne",
        fragments: "Valanyr",
        motes: "Dragonwrath"
    };

    const lines = input.split(' ');
    let legendaryObtained = '';

    for (let i = 0; i < lines.length; i += 2) {
        const quantity = parseInt(lines[i], 10);
        const material = lines[i + 1].toLowerCase();

        if (material in keyMaterials) {
            keyMaterials[material] += quantity;

            if (keyMaterials[material] >= 250) {
                legendaryObtained = requiredMaterials[material];
                keyMaterials[material] -= 250;
                break;
            }
        } else {
            if (!junkMaterials[material]) {
                junkMaterials[material] = 0;
            }
            junkMaterials[material] += quantity;
        }
    }

    console.log(`${legendaryObtained} obtained!`);

    Object.entries(keyMaterials)
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .forEach(([material, quantity]) => {
            console.log(`${material}: ${quantity}`);
        });

    Object.entries(junkMaterials)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([material, quantity]) => {
            console.log(`${material}: ${quantity}`);
        });
}

obtainLegendary('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
// Output:
// Valanyr obtained!
// shards: 5
// fragments: 5
// motes: 3
// leathers: 6
// stones: 5

obtainLegendary('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');
// Output:
// Dragonwrath obtained!
// shards: 22
// motes: 19
// fragments: 0
// fangs: 9
// silver: 123
