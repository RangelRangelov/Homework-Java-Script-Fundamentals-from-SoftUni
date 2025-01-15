function arrayManipulations(arr) {
    let nums = arr.shift().split(" ").map(x => Number(x));
    for (const command of arr) {
        let tokens = command.split(" ");
        let action = tokens.shift();

        if (action === "Add") {
            let numToAdd = Number(tokens.shift());
            nums.push(numToAdd);
        } else if (action === "Remove") {
            let numToRemove = Number(tokens.shift());
            let index = nums.indexOf(numToRemove);

            while (index !== -1) {
                nums.splice(index, 1);
                index = nums.indexOf(numToRemove);
            }
        } else if (action === "RemoveAt") {
            let index = Number(tokens.shift());
            nums.splice(index, 1);
        } else if (action === "Insert") {
            let numToAdd = Number(tokens.shift());
            let index = Number(tokens.shift());

            nums.splice(index, 0, numToAdd);
        }
    }

    console.log(nums.join(" "));
}

    arrayManipulations
    ([
        '4 19 2 53 6 43',
        'Add 3',
        'Remove 2',
        'RemoveAt 1',
        'Insert 8 3'
    ]);