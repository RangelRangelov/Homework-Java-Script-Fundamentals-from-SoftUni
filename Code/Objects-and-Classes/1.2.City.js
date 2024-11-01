function printObjectProperties(obj) {
    for (let key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }
}

// Example usage
let city = {
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
};

printObjectProperties(city);
