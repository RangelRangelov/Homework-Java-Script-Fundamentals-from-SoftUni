function manageItems(input) {
    let itemMap = new Map();

    input.forEach(entry => {
        let [item, quantity] = entry.split(' ');
        quantity = Number(quantity);

        if (itemMap.has(item)) {
            itemMap.set(item, itemMap.get(item) + quantity);
        } else {
            itemMap.set(item, quantity);
        }
    });

    itemMap.forEach((quantity, item) => {
        console.log(`${item} -> ${quantity}`);
    });
}

manageItems(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']);
// Output:
// tomatoes -> 10
// coffee -> 45
// olives -> 100

manageItems(['apple 50', 'apple 61', 'coffee 115', 'coffee 40']);
// Output:
// apple -> 111
// coffee -> 155
