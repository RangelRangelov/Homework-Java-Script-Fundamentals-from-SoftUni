function travelTime(arr) {
    let destinationCost = {};

    for (const command of arr) {
        let [country, city, cost] = command.split(' > ');
        cost = Number(cost);

        if (country in destinationCost) {
            if (city in destinationCost[country]) {
                if (cost < destinationCost[country][city]) {
                    destinationCost[country][city] = cost;
                }
            } else {
                destinationCost[country][city] = cost;
            }
        } else {
            destinationCost[country] = {};
            destinationCost[country][city] = cost;
        }
    }

    let countryEntries = Object.entries(destinationCost).sort((a, b) => a[0].localeCompare(b[0]));

    for (const [country, citiesObj] of countryEntries) {
        let result = `${country} -> `;
        let cityEntries = Object.entries(citiesObj).sort((a, b) => a[1] - b[1]);

        for (const [city, cost] of cityEntries) {
            result += `${city} -> ${cost} `;
        }

        console.log(result.trim());
    }
}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);
