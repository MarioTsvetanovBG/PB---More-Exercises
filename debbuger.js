function passwordGenerator(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    // Символ 1: цифра от 1 до n.
    // Символ 2: цифра от 1 до n.
    // Символ 3: малка буква измежду първите l букви на латинската азбука.
    // Символ 4: малка буква измежду първите l букви на латинската азбука.
    // Символ 5: цифра от 1 до n, по-голяма от първите 2 цифри.
    let result = "";
    
    
    for (let i = 1; i < x; i++) {
        for (let j = 1; j < x; j++) {
            for (let k = 97; k < 97 + y; k++) {
                for (let l = 97; l < 97 + y; l++) {
                    for (let m = 1; m <= x; m++) {
                        if (m > i && m > j) {
                            let symbol3 = String.fromCharCode(k);
                            let symbol4 = String.fromCharCode(l);
                            result += "" + i + j + symbol3 + symbol4 + m + " ";
                        }
                    }
                }
            }
        }
    }
    console.log(result);
}

passwordGenerator(["3","1"]);