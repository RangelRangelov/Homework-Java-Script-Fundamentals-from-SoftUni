function needForSeedIII(input) {
    let n = Number(input.shift());
    let cars = {};

    for (let i = 0; i < n; i++) {
        let [car, mileage, fuel] = input.shift().split('|');
        cars[car] = {
            mileage: Number(mileage),
            fuel: Number(fuel)
        };
    }

    let command = input.shift();

    while (command !== "Stop") {
        let tokens = command.split(' : ');
        let action = tokens[0];
        let car = tokens[1];

        if (action === "Drive") {
            let distance = Number(tokens[2]);
            let fuel = Number(tokens[3]);
            if (cars[car].fuel < fuel) {
                console.log("Not enough fuel to make that ride");
            } else {
                cars[car].mileage += distance;
                cars[car].fuel -= fuel;
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                if (cars[car].mileage >= 100000) {
                    console.log(`Time to sell the ${car}!`);
                    delete cars[car];
                }
            }
        } else if (action === "Refuel") {
            let fuel = Number(tokens[2]);
            let refueledAmount = Math.min(fuel, 75 - cars[car].fuel);
            cars[car].fuel += refueledAmount;
            console.log(`${car} refueled with ${refueledAmount} liters`);
        } else if (action === "Revert") {
            let kilometers = Number(tokens[2]);
            if (cars[car].mileage - kilometers < 10000) {
                cars[car].mileage = 10000;
            } else {
                cars[car].mileage -= kilometers;
                console.log(`${car} mileage decreased by ${kilometers} kilometers`);
            }
        }

        command = input.shift();
    }

    for (let car in cars) {
        console.log(`${car} -> Mileage: ${cars[car].mileage} kms, Fuel in the tank: ${cars[car].fuel} lt.`);
    }
}

needForSeedIII([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]);
