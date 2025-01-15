function employees(arr) {
    for (let name of arr) {
        let personNumber = name.length;

        let person = {
            name: name,
            personalNum: personNumber
        }

        console.log(`Name: ${person.name} -- Personal Number: ${person.personalNum}`);
        
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);