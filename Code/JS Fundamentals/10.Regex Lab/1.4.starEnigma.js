function starEnigma(arr) {
    let messageCount = Number(arr.shift());
    let starRegex = /[star]/gi;
    let decryptMessages = [];

    for (let i = 0; i < messageCount; i++) {
        let encryptedMessage = arr[i];
        let matches = encryptedMessage.match(starRegex);

        let matchCount = matches ? matches.length : 0;
        let decryptMessage = '';

        for (const symbol of encryptedMessage) {
            let ascii = symbol.charCodeAt();
            ascii -= matchCount;
            let newSymbol = String.fromCharCode(ascii);
            decryptMessage += newSymbol;
        }

        decryptMessages.push(decryptMessage);
    }

    let attackedPlanets = [];
    let destroyedPlanets = [];

    let planetRegex = /@(?<name>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<type>[AD])![^@\-!:>]*->(?<soldiers>\d+)/;

    for (const message of decryptMessages) {
        let match = planetRegex.exec(message);
        if (match) {
            let { name, type } = match.groups;

            if (type === 'A') {
                attackedPlanets.push(name);
            } else {
                destroyedPlanets.push(name);
            }
        }
    }

    attackedPlanets.sort((a, b) => a.localeCompare(b));
    destroyedPlanets.sort((a, b) => a.localeCompare(b));

    console.log(`Attacked planets: ${attackedPlanets.length}`);
    for (const planet of attackedPlanets) {
        console.log(`-> ${planet}`);
    }

    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    for (const planet of destroyedPlanets) {
        console.log(`-> ${planet}`);
    }
}

starEnigma(['2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR']);
