function memoryGame(input) {
    let elements = input[0].split(' ');
    let moves = 0;

    for (let i = 1; i < input.length; i++) {
        let command = input[i];
        if (command === 'end') {
            break;
        }

        moves++;
        let [index1, index2] = command.split(' ').map(Number);

        // Check for invalid input
        if (index1 === index2 || index1 < 0 || index1 >= elements.length || index2 < 0 || index2 >= elements.length) {
            let middleIndex = Math.floor(elements.length / 2);
            let newElement = `-${moves}a`;
            elements.splice(middleIndex, 0, newElement, newElement);
            console.log("Invalid input! Adding additional elements to the board");
            continue;
        }

        // Check if the elements match
        if (elements[index1] === elements[index2]) {
            let element = elements[index1];
            elements = elements.filter((_, idx) => idx !== index1 && idx !== index2);
            console.log(`Congrats! You have found matching elements - ${element}!`);
        } else {
            console.log("Try again!");
        }

        // Check if all elements have been matched
        if (elements.length === 0) {
            console.log(`You have won in ${moves} turns!`);
            return;
        }
    }

    // If the game ends and not all elements are matched
    console.log(`Sorry you lose :(\n${elements.join(' ')}`);
}

// Example usage
memoryGame([
    '1 1 2 2 3 3 4 4 5 5',
    '1 0',
    '-1 0',
    '1 0',
    '1 0',
    '1 0',
    'end'
]);