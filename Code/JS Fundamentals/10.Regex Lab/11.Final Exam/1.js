function passwordReset(input) {
    let password = input.shift();
    let command = input.shift();

    while (command !== "Done") {
        let tokens = command.split(" ");
        let action = tokens[0];

        if (action === "TakeOdd") {
            let newPassword = "";
            for (let i = 1; i < password.length; i += 2) {
                newPassword += password[i];
            }
            password = newPassword;
            console.log(password);
        } else if (action === "Cut") {
            let index = Number(tokens[1]);
            let length = Number(tokens[2]);
            let substring = password.substring(index, index + length);
            password = password.replace(substring, "");
            console.log(password);
        } else if (action === "Substitute") {
            let substring = tokens[1];
            let substitute = tokens[2];

            if (password.includes(substring)) {
                let regex = new RegExp(substring, 'g');
                password = password.replace(regex, substitute);
                console.log(password);
            } else {
                console.log("Nothing to replace!");
            }
        }

        command = input.shift();
    }

    console.log(`Your password is: ${password}`);
}

passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"]);    
