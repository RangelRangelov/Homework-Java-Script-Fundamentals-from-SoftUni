function inventoryManagement(input) {
    let inventory = input.shift().split(', ');

    for (let i = 0; i < input.length; i++) {
        let command = input[i];
        if (command === 'Craft!') break;

        let [action, item] = command.split(' - ');

        if (action === 'Collect') {
            if (!inventory.includes(item)) {
                inventory.push(item);
            }
        } else if (action === 'Drop') {
            inventory = inventory.filter(i => i !== item);
        } else if (action === 'Combine Items') {
            let [oldItem, newItem] = item.split(':');
            let index = inventory.indexOf(oldItem);
            if (index !== -1) {
                inventory.splice(index + 1, 0, newItem);
            }
        } else if (action === 'Renew') {
            if (inventory.includes(item)) {
                inventory = inventory.filter(i => i !== item);
                inventory.push(item);
            }
        }
    }

    console.log(inventory.join(', '));
}

inventoryManagement([
    'Iron, Wood, Sword', 
    'Collect - Gold', 
    'Drop - Wood', 
    'Craft!'
  ]
  );
