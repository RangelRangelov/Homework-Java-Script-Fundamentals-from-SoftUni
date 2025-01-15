function wallConstruction(sections) {
    let dailyConcreteUsage = [];
    let totalConcrete = 0;

    sections = sections.map(Number);

    while (sections.some(section => section < 30)) {
        let concreteForTheDay = 0;
        for (let i = 0; i < sections.length; i++) {
            if (sections[i] < 30) {
                sections[i]++;
                concreteForTheDay += 195;
            }
        }
        dailyConcreteUsage.push(concreteForTheDay);
    }
    totalConcrete = dailyConcreteUsage.reduce((acc, curr) => acc + curr, 0);
    let totalCost = totalConcrete * 1900;

    console.log(dailyConcreteUsage.join(', '));
    console.log(`${totalCost} pesos`);
}

wallConstruction(['21', '25', '28']);