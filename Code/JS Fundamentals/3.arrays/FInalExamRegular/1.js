function passValidator(arr) {
    let pass = arr.shift();

    for (let cmd of arr) {
        if (cmd === "Complete") break;

        let tokens = cmd.split(' ');
        let action = tokens[0];

        if (action === "Make" && tokens[1] === "Upper") {
            let index = Number(tokens[2]);
            pass = pass.substring(0, index) + pass[index].toUpperCase() + pass.substring(index + 1);
            console.log(pass);
        } else if (action === "Make" && tokens[1] === "Lower") {
            let index = Number(tokens[2]);
            pass = pass.substring(0, index) + pass[index].toLowerCase() + pass.substring(index + 1);
            console.log(pass);
        } else if (action === "Insert") {
            let index = Number(tokens[1]);
            let char = tokens[2];
            if (index >= 0 && index <= pass.length) {
                pass = pass.substring(0, index) + char + pass.substring(index);
                console.log(pass);
            }
        } else if (action === "Replace") {
            let char = tokens[1];
            let value = Number(tokens[2]);
            let newChar = String.fromCharCode(char.charCodeAt(0) + value);
            pass = pass.split(char).join(newChar);
            console.log(pass);
        } else if (action === "Validation") {
            if (pass.length < 8) {
                console.log("Password must be at least 8 characters long!");
            }

            let ValidChars = true;
            for (let char of pass) {
                if (!((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9') || char === '_')) {
                    ValidChars = false;
                    break;
                }
            }
            if (!ValidChars) {
                console.log("Password must consist only of letters, digits and _!");
            }

            let hasUpperChar = false;
            let hasLowerChar = false;
            let hasDigit = false;
            for (let char of pass) {
                if (char >= 'A' && char <= 'Z') {
                    hasUpperChar = true;
                } else if (char >= 'a' && char <= 'z') {
                    hasLowerChar = true;
                } else if (char >= '0' && char <= '9') {
                    hasDigit = true;
                }
            }

            if (!hasUpperChar) {
                console.log("Password must consist at least one uppercase letter!");
            }
            if (!hasLowerChar) {
                console.log("Password must consist at least one lowercase letter!");
            }
            if (!hasDigit) {
                console.log("Password must consist at least one digit!");
            }
        }
    }
}

passValidator([
    '123456789',
    'Insert 3 R',
    'Replace 5 15',
    'Validation',
    'Make Upper 1',
    'Make Lower 3',
    'Complete'
]);
