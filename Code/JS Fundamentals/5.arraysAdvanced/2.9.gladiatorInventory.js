function gladiatorInventory(arr) {
    let inventory = arr[0]
        .split(' ');

    for (let i = 1; i < arr.length; i++) {
        let cmdinfo = arr[i]
            .split(' ');
        let cmdType = cmdinfo[0].toLowerCase();

        if (cmdType === 'buy') {
            let itemName = cmdinfo[1];
            if (!inventory.includes(itemName)) {
                inventory.push(itemName);
            }
        } else if (cmdType === 'trash') {
            let itemName = cmdinfo[1];
            let itemIndex = inventory.indexOf(itemName);
            if (itemIndex !== -1) {
                inventory.splice(itemIndex, 1);
            }
        } else if (cmdType === 'repair') {
            let itemName = cmdinfo[1];
            let itemIndex = inventory.indexOf(itemName);
            if (itemIndex !== -1) {
                inventory.splice(itemIndex, 1);
                inventory.push(itemName);
            }
        } else if (cmdType === 'repair') {
            let itemName = cmdinfo[1];
            let itemIndex = inventory.indexOf(itemName);
            if (itemIndex !== -1) {
                inventory.splice(itemIndex, 1);
                inventory.push(itemName);
            }
        } else if (cmdType === 'upgrade') {
            let itemUpgradeInfo = cmdinfo[1]
                .split('-');
            let itemName = itemUpgradeInfo[0];
            let itemMaterial = itemUpgradeInfo[1];
            let itemIndex = inventory.indexOf(itemName);
            if (itemIndex !== -1) {
                inventory.splice(itemIndex + 1, 0, `${itemName}:${itemMaterial}`)
            }
        }
    }

    console.log(inventory.join(' '));

}

gladiatorInventory([
    'SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel'])