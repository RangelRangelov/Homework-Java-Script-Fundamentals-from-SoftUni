function giftBoxCoverage(input) {
    let sizeSide = Number(input[0]);
    let numberSheets = Number(input[1]);
    let boxArea = sizeSide * sizeSide * 6;
    let coverArea = 0;

    for (let i = 2; i < 2 + numberSheets * 2; i += 2) {
        let length = Number(input[i]);
        let width = Number(input[i + 1]);
        let sheetArea = length * width;

        if ((i / 2) % 5 === 0) {
            continue;
        } else if ((i / 2) % 3 === 0) {
            sheetArea *= 0.75;
        }

        coverArea += sheetArea;
    }

    if (coverArea >= boxArea) {
        let percentageCover = ((coverArea - boxArea) / coverArea) * 100;
        console.log(`You've covered the gift box!\n${percentageCover.toFixed(2)}% wrap paper left.`);
    } else {
        let percentageNotCover = ((boxArea - coverArea) / boxArea) * 100;
        console.log(`You are out of paper!\n${percentageNotCover.toFixed(2)}% of the box is not covered.`);
    }
}

giftBoxCoverage(["10",
    "5",
    "3",
    "0.5",
    "2.4",
    "5",
    "3.7",
    "1",
    "3",
    "34.7",
    "5",
    "80"])
    