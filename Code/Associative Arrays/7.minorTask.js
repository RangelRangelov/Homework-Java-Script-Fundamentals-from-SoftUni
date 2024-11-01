function minorTas(arr) {
    let materialQtys = {};

    for (let i = 0; i < arr.length; i+= 2) {
        let material = arr[i];
        let qty = Number(arr[i + 1]);

        if (material in materialQtys) {
            materialQtys[material] += qty;
        } else {
            materialQtys[material] = qty;
        }
    }

    let entries = Object.entries(materialQtys);
    
    for (let [material, qty] of entries) {
        console.log(`${material} -> ${qty}`); 
    }  
}
minorTas([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]
    );
    