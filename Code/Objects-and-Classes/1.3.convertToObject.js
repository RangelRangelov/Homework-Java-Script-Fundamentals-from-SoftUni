function printJSONProperties(jsonString) {
    let obj = JSON.parse(jsonString);

    for (let key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}

// Example usage
printJSONProperties('{"name": "George", "age": 40, "town": "Sofia"}');
