function updateStock(currentStock, delivery) {
    let store = {};

    // Process current stock
    for (let i = 0; i < currentStock.length; i += 2) {
        let product = currentStock[i];
        let quantity = Number(currentStock[i + 1]);
        store[product] = quantity;
    }

    // Process delivery
    for (let i = 0; i < delivery.length; i += 2) {
        let product = delivery[i];
        let quantity = Number(delivery[i + 1]);
        if (store[product]) {
            store[product] += quantity;
        } else {
            store[product] = quantity;
        }
    }

    // Print the updated stock
    for (let product in store) {
        console.log(`${product} -> ${store[product]}`);
    }
}

// Example usage
updateStock(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);
