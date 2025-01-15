function computerReceipt(input) {
    let prices = [];
    let typeOfCustomer = input[input.length - 1]; // Last element is the type of customer
    for (let i = 0; i < input.length - 1; i++) {
        let price = parseFloat(input[i]);
        if (price > 0) {
            prices.push(price);
        } else {
            console.log("Invalid price!");
        }
    }
    
    let priceWithoutTaxes = prices.reduce((acc, curr) => acc + curr, 0);
    let taxes = priceWithoutTaxes * 0.20;
    let totalPriceWithTaxes = priceWithoutTaxes + taxes;

    if (typeOfCustomer === "special") {
        totalPriceWithTaxes *= 0.90; // Apply 10% discount
    }

    if (priceWithoutTaxes === 0) {
        console.log("Invalid order!");
    } else {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log("-----------");
        console.log(`Total price: ${totalPriceWithTaxes.toFixed(2)}$`);
    }
}

computerReceipt(['1050', '200', '450', '2', '18.50', '16.86', 'special']);