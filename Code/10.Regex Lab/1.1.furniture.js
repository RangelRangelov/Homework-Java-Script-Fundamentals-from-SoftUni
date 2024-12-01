function furnitureTracker(arr) {
    let regex = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d+)!(?<qty>\d+)/;
    let furniture = [];
    let totalPrice = 0;

    let command = arr.shift();

    while (command !== 'Purchase') {
        let match = regex.exec(command);

        if (match) {
            let {name, price, qty} = match.groups;
            price = Number(price);
            qty = Number(qty);

            let furPrice = price * qty;
            totalPrice += furPrice;
            furniture.push(name);
        }

        command = arr.shift();
    }

    console.log(`Bought furniture:`);
    if (furniture.length > 0) {
        console.log(furniture.join('\n'));   
    }

    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
    
    
}
furnitureTracker(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']);