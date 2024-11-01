function createPerson(firstName, lastName, age) {
    let person = {
        firstName: firstName,
        lastName: lastName,
        age: age
    };
    return person;
}

// Example usage
let person = createPerson("Peter", "Pan", "20");
console.log(person);
