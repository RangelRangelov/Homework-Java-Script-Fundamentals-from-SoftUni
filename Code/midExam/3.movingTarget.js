function movingTargets(arr) {
    let targets = arr[0]
        .split(' ')
        .map(el => Number(el));
        
    for (let i = 1; i < arr.length; i++) {
        let curCmd = arr[i];
        if (curCmd.toLowerCase() === 'end') {
            break;
        }

        let cmdInfo = curCmd.split(' ');
        let cmdType = cmdInfo[0].toLowerCase();
        let cmdIndex = Number(cmdInfo[1]);
        let cmdArgument = Number(cmdInfo[2]);
        let isIndexValid = cmdIndex >= 0 && cmdIndex < targets.length;

        if (cmdType === 'shoot') {
            if (isIndexValid) {
                targets[cmdIndex] -= cmdArgument;
                if (targets[cmdIndex] <= 0) {
                    targets.splice(cmdIndex, 1);
                }
            }
        } else if (cmdType === 'add') {
            if (isIndexValid) {
                targets.splice(cmdIndex, 0, cmdArgument);
            } else {
                console.log("Invalid placement!");
            }
        } else if (cmdType === 'strike') {
            let leftIndex = cmdIndex - cmdArgument;
            let rightIndex = cmdIndex + cmdArgument;
            let isLeftIndexValid = leftIndex >= 0;
            let isRightIndexValid = rightIndex < targets.length;
            if (isLeftIndexValid && isRightIndexValid) {
                let targetsToRemove = rightIndex - leftIndex + 1;
                targets.splice(leftIndex, targetsToRemove);
            } else {
                console.log("Strike missed!");
            }
        }
    }

    console.log(targets.join('|'));
}

movingTargets(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"]);
