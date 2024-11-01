function shoppingList(arr) {
    let groceries = arr[0].split('!');
    
    for (let i = 1; i < arr.length; i++) {
        let currCmd = arr[i];
        if (currCmd === 'Go Shopping!') {
            break;
        }

        let cmdInfo = currCmd.split(' ');
        let commandType = cmdInfo[0];
        let itemName = cmdInfo[1];
        
        let itemExists = groceries.includes(itemName);
        let indexOfItem = groceries.indexOf(itemName);

        if (commandType === "Urgent") {
            if (!itemExists) {
                groceries.unshift(itemName);
            }
        } else if (commandType === 'Unnecessary') {
            if (itemExists) {
                groceries.splice(indexOfItem, 1);
            }
        } else if (commandType === "Correct") {
            if (itemExists) {
                let newItem = cmdInfo[2];
                groceries[indexOfItem] = newItem;
            }
        } else if (commandType === 'Rearrange') {
            if (itemExists) {
                groceries.splice(indexOfItem, 1);
                groceries.push(itemName);
            }
        }
    }
    console.log(groceries.join(', '));
}

shoppingList((["Tomatoes!Potatoes!Bread", "Unnecessary Milk", "Urgent Tomatoes", "Go Shopping!"]));