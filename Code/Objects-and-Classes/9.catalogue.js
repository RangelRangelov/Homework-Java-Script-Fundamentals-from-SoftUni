function catalogue(arr) {
    let products = [];

    for (let productInfoStr of arr) {
        let [productName, productPrice] = productInfoStr.split(' : ');
        productPrice = Number(productPrice);
        let productObj = {
            name: productName,
            price: productPrice
        };
        products.push(productObj);
    }

    products.sort((a, b) => a.name.localeCompare(b.name));
    let initialsPrinted = [];

    for (let productObj of products) {
        let initial = productObj.name[0];
        if (!initialsPrinted.includes(initial)) {
            console.log(initial);
            initialsPrinted.push(initial);
        }
        console.log(`  ${productObj.name}: ${productObj.price}`);
    }
}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);
