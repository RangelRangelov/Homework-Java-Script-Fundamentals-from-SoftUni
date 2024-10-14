function blackFlag(arr) {
    let days = Number(arr[0]);
    let dailyPlunder = Number(arr[1]);
    let expectedPlunder = Number(arr[2]);

    let currPlunder = 0;

    for (let i = 1; i <= days; i++) {
        currPlunder += dailyPlunder;

        if (i % 3 === 0) {
            currPlunder += 0.50 * dailyPlunder;
        }

        if (i % 5 === 0) {
            currPlunder -= 0.30 * currPlunder;
        }
    }

    if (currPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${currPlunder.toFixed(2)} plunder gained.`);
    } else {
        let collectedPercantage = currPlunder / expectedPlunder * 100;
        console.log(`Collected only ${collectedPercantage.toFixed(2)}% of the plunder.`);
        
    }

}
blackFlag(["5", "40", "100"]);
