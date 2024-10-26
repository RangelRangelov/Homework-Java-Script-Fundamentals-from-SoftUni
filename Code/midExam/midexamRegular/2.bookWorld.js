function bookWorld(input) {
    let oldGenres = input[0].split(' | ');
    let commands = input.slice(1);

    for (let i = 0; i < commands.length; i++) {
        let cmd = commands[i];
        if (cmd === 'Stop!') {
            continue;
        }

        let tokens = cmd.split(' ');
        let action = tokens[0];

        if (action === 'Join') {
            let genre = tokens.slice(1).join(' ');
            if (!oldGenres.includes(genre)) {
                oldGenres.push(genre);
            }
        } else if (action === 'Drop') {
            let genre = tokens.slice(1).join(' ');
            let index = oldGenres.indexOf(genre);
            if (index !== -1) {
                oldGenres.splice(index, 1);
            }
        } else if (action === 'Replace') {
            let oldGen = tokens[1];
            let newGen = tokens[2];
            let index = oldGenres.indexOf(oldGen);
            if (index !== -1 && !oldGenres.includes(newGen)) {
                oldGenres[index] = newGen;
            }
        } else if (action === 'Prefer') {
            let idx1 = Number(tokens[1]);
            let idx2 = Number(tokens[2]);
            if (idx1 >= 0 && idx1 < oldGenres.length && idx2 >= 0 && idx2 < oldGenres.length) {
                let temp = oldGenres[idx1];
                oldGenres[idx1] = oldGenres[idx2];
                oldGenres[idx2] = temp;
            }
        }
    }

    console.log(oldGenres.join(' '));
}

bookWorld([
    "Romance | Fiction | Horror | Mystery",
    "Drop Romance",
    "Join Fantasy",
    "Prefer 1 2",
    "Stop!"
]);