function groceryShopping(input) {
    let groceries = input[0].split('|');
    let commands = input.slice(1);

    for (let cmd of commands) {
        if (cmd === 'Shop!') {
            break;
        }

        let tokens = cmd.split('%');
        let action = tokens[0];

        if (action === 'Important') {
            let product = tokens[1];
            let index = groceries.indexOf(product);
            if (index !== -1) {
                groceries.splice(index, 1);
            }
            groceries.unshift(product);
        } else if (action === 'Add') {
            let product = tokens[1];
            if (!groceries.includes(product)) {
                groceries.push(product);
            } else {
                console.log("The product is already in the list.");
            }
        } else if (action === 'Swap') {
            let prd1 = tokens[1];
            let prd2 = tokens[2];
            let idx1 = groceries.indexOf(prd1);
            let idx2 = groceries.indexOf(prd2);
            if (idx1 !== -1 && idx2 !== -1) {
                [groceries[idx1], groceries[idx2]] = [groceries[idx2], groceries[idx1]];
            } else {
                let missingPrd = idx1 === -1 ? prd1 : prd2;
                console.log(`Product ${missingPrd} missing!`);
            }
        } else if (action === 'Remove') {
            let product = tokens[1];
            let index = groceries.indexOf(product);
            if (index !== -1) {
                groceries.splice(index, 1);
            } else {
                console.log(`Product ${product} isn't in the list.`);
            }
        } else if (action === 'Reversed') {
            groceries.reverse();
        }
    }

    for (let i = 0; i < groceries.length; i++) {
        console.log(`${i + 1}. ${groceries[i]}`);
    }

}
groceryShopping([
    "eggs|milk|bread|fish",
    "Important%bread",
    "Swap%eggs%tomato",
    "Shop!"
]);