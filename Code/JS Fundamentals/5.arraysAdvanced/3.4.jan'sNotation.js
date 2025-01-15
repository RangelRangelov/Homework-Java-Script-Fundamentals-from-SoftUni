function parsePostfix(instructions) {
    let stack = [];

    for (let instr of instructions) {
        if (typeof instr === 'number') {
            stack.push(instr);
        } else {
            if (stack.length < 2) {
                console.log("Error: not enough operands!");
                return;
            }

            let b = stack.pop();
            let a = stack.pop();

            switch (instr) {
                case '+':
                    stack.push(a + b);
                    break;
                case '-':
                    stack.push(a - b);
                    break;
                case '*':
                    stack.push(a * b);
                    break;
                case '/':
                    stack.push(a / b);
                    break;
                default:
                    console.log("Error: invalid operator!");
                    return;
            }
        }
    }

    if (stack.length === 1) {
        console.log(stack[0]);
    } else if (stack.length > 1) {
        console.log("Error: too many operands!");
    }
}

parsePostfix([3, 4, '+']);
