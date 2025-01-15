function encryptPass(arr) {
    let n = Number(arr.shift());
    
    for (let i = 0; i < n; i++) {
        let password = arr[i];

        let passRegex = /^(.+)>[0-9]{3}\|[a-z]{3}\|[A-Z]{3}\|[^<>]{3}<\1$/;

        if (passRegex.test(password)) {
            let midle = password.match(/[0-9]{3}\|[a-z]{3}\|[A-Z]{3}\|[^<>]{3}/)[0];
            let encrypted = midle.replace(/\|/g, '');

            console.log(`Password: ${encrypted}`);
        } else {
            console.log("Try another password!");
        }
    }
}

encryptPass(["5",
    "aa>111|mqu|BAU|mqu<aa",
    "()>111!aaa!AAA!^&*<()",
    "o>088|abc|AAA|***<o",
    "asd>asd|asd|ASD|asd<asd",
    "*>088|zzzz|ZzZ|123<*"]);
