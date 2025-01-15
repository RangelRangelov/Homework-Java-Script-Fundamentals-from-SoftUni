function manageAddresses(input) {
    let addressBook = {};

    input.forEach(entry => {
        let [name, address] = entry.split(':');
        addressBook[name] = address;
    });

    let sortedEntries = Object.entries(addressBook).sort((a, b) => a[0].localeCompare(b[0]));

    sortedEntries.forEach(([name, address]) => {
        console.log(`${name} -> ${address}`);
    });
}

manageAddresses([
    'Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
]);

manageAddresses([
    'Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd'
]);
