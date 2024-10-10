function cleanCar(commands) {
    let cleanliness = 0;

    for (let command of commands) {
        if (command === 'soap') {
            cleanliness += 10;
        } else if (command === 'water') {
            cleanliness += cleanliness * 0.20;
        } else if (command === 'vacuum cleaner') {
            cleanliness += cleanliness * 0.25;
        } else if (command === 'mud') {
            cleanliness -= cleanliness * 0.10;
        }
    }

    cleanliness = cleanliness.toFixed(2);
    console.log(`The car is ${cleanliness}% clean.`);
}

cleanCar(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap']);