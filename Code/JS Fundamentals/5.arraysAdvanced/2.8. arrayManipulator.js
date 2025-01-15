function arrayManipulator(numbers, commands) {
    function insertRange(currArr, index, elements) {
        for (let i = elements.length - 1; i >= 0; i--) {
            let currElement = elements[i];
            currArr.splice(index, 0, currElement);
        }
    }

    function leftshift(currArr, rotations) {
        for (let i = 1; i <= rotations; i++) {
            let firstElement = currArr.shift();
            currArr.push(firstElement);
        }
    }

    function reduceArrByPairs(currArr) {
        let reduceArr = [];
        for (let i = 0; i < currArr.length; i += 2) {
            let currElement = currArr[i];
            let nextElement = 0;
            if (i + 1 < currArr.length) {
                nextElement = currArr[i + 1];
            }
            reduceArr.push(currElement + nextElement);
        }
        return reduceArr;
    }

    let currArr = numbers;

    for (const cmd of commands) {
        let cmdInfo = cmd.split(' ');
        let cmdType = cmdInfo[0].toLowerCase();

        if (cmdType === 'add') {
            let index = Number(cmdInfo[1]);
            let element = Number(cmdInfo[2]);
            currArr.splice(index, 0, element);
        } else if (cmdType === 'addmany') {
            let index = Number(cmdInfo[1]);
            let elements = cmdInfo.slice(2).map(el => Number(el));
            insertRange(currArr, index, elements);
        } else if (cmdType === 'contains') {
            let element = Number(cmdInfo[1]);
            console.log(currArr.indexOf(element));
        } else if (cmdType === 'remove') {
            let removeIndex = Number(cmdInfo[1]);
            currArr.splice(removeIndex, 1);
        } else if (cmdType === 'shift') {
            let rotations = Number(cmdInfo[1]);
            leftshift(currArr, rotations);
        } else if (cmdType === 'sumpairs') {
            currArr = reduceArrByPairs(currArr);
        } else if (cmdType === 'print') {
            console.log(`[ ${currArr.join(', ')} ]`);
        }
    }
}

arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);