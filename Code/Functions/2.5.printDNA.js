function printHelix(length) {
    const sequence = "ATCGTTAGGG";
    let index = 0;

    for (let i = 0; i < length; i++) {
        let char1 = sequence[index % sequence.length];
        let char2 = sequence[(index + 1) % sequence.length];

        if (i % 4 === 0) {
            console.log(`**${char1}${char2}**`);
        } else if (i % 4 === 1) {
            console.log(`*${char1}--${char2}*`);
        } else if (i % 4 === 2) {
            console.log(`${char1}----${char2}`);
        } else if (i % 4 === 3) {
            console.log(`*${char1}--${char2}*`);
        }

        index += 2;
    }
}

printHelix(4);