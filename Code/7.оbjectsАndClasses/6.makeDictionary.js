function createDictionary(input) {
    let dictionary = {};

    input.forEach(jsonStr => {
        let obj = JSON.parse(jsonStr);
        for (let term in obj) {
            dictionary[term] = obj[term];
        }
    });

    let sortedTerms = Object.keys(dictionary).sort();

    sortedTerms.forEach(term => {
        console.log(`Term: ${term} => Definition: ${dictionary[term]}`);
    });
}

// Example usage
createDictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);
