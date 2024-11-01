function registerHeroes(input) {
    let heroes = [];

    input.forEach(heroData => {
        let [name, level, items] = heroData.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];
        heroes.push({ name, level, items });
    });

    heroes.sort((a, b) => a.level - b.level);

    heroes.forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(', ')}`);
    });
}

registerHeroes([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]);