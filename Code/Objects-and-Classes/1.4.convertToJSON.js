function createPersonJSON(firstName, lastName, hairColor) {
    let person = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor
    };

    let jsonString = JSON.stringify(person);
    console.log(jsonString);
}

// Example usage
createPersonJSON('George', 'Jones', 'Brown');
