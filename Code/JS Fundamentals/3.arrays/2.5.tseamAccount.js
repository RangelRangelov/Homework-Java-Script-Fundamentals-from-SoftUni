function manageAccount(input) {
    let account = input.shift().split(' ');
    
    for (let command of input) {
        if (command === 'Play!') break;

        let [action, game] = command.split(' ');

        if (action === 'Install') {
            if (!account.includes(game)) {
                account.push(game);
            }
        } else if (action === 'Uninstall') {
            account = account.filter(g => g !== game);
        } else if (action === 'Update') {
            if (account.includes(game)) {
                account = account.filter(g => g !== game);
                account.push(game);
            }
        } else if (action.startsWith('Expansion')) {
            let [baseGame, expansion] = game.split('-');
            if (account.includes(baseGame)) {
                let index = account.indexOf(baseGame);
                account.splice(index + 1, 0, `${baseGame}:${expansion}`);
            }
        }
    }

    console.log(account.join(' '));
}

manageAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!']);