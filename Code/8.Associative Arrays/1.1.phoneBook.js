function storeContacts(input) {
    let phoneBook = {};

    input.forEach(entry => {
        let [name, number] = entry.split(' ');
        phoneBook[name] = number;
    });

    for (let name in phoneBook) {
        console.log(`${name} -> ${phoneBook[name]}`);
    }
}

storeContacts(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344']);
