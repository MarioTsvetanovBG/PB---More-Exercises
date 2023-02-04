function dishwasher(input) {
    let index = 0;
    let cleanerGel = Number(input[index]);
    index++;

    let counter = 0;
    let dishesSep = 0;
    let potsSep = 0;
    let cleanerGelLeft = cleanerGel * 750;
    let cleanerGelNeeded = 0;

    while (true) {
        let dishes = input[index];
        if (dishes === "End") {
            console.log("Detergent was enough!");
            console.log(`${dishesSep} dishes and ${potsSep} pots were washed.`);
            console.log(`Leftover detergent ${cleanerGelLeft} ml.`);
            break;
        }

        let dishesNumber = Number(dishes);
        counter++;


        if (counter == 3) {
            cleanerGelNeeded = dishesNumber * 15;
            if (cleanerGelLeft < cleanerGelNeeded) {
                console.log(`Not enough detergent, ${cleanerGelNeeded - cleanerGelLeft} ml. more necessary!`);
                break;
            } else {
                cleanerGelLeft = cleanerGelLeft - cleanerGelNeeded;
                potsSep = potsSep + dishesNumber;
                counter = 0;
            }
        } else {
            cleanerGelNeeded = dishesNumber * 5;
            if (cleanerGelLeft < cleanerGelNeeded) {
                console.log(`Not enough detergent, ${cleanerGelNeeded - cleanerGelLeft} ml. more necessary!`);
                break;
            } else {
                cleanerGelLeft = cleanerGelLeft - cleanerGelNeeded;
                dishesSep = dishesSep + dishesNumber;
            }
        }
        index++;
    }
}

function reportSystem(input) {
    let index = 0;
    let expectedSum = Number(input[index]);
    index++;

    let count = 1;
    let cashPayNum = 0;
    let cashPay = 0;
    let cardPayNum = 0;
    let cardPay = 0;

    while (true) {
        let product = input[index];
        if (product === "End") {
            console.log("Failed to collect required money for charity.");
            break;
        }
        let productPrice = Number(product);
        if (count % 2 == 0) {
            if (productPrice < 10) {
                console.log("Error in transaction!");
            } else {
                console.log("Product sold!");
                cardPay = cardPay + productPrice;
                cardPayNum = cardPayNum + 1;
            }
        } else {
            if (productPrice > 100) {
                console.log("Error in transaction!");
            } else {
                console.log("Product sold!");
                cashPay = cashPay + productPrice;
                cashPayNum = cashPayNum + 1;
            }
        }

        if ((cashPay + cardPay) >= expectedSum) {
            console.log(`Average CS: ${(cashPay / cashPayNum).toFixed(2)}`);
            console.log(`Average CC: ${(cardPay / cardPayNum).toFixed(2)}`);
            break;
        }
        index++;
        count++;
    }
}


function streamOfLetters(input) {
    let index = 0;
    let secretWord = "";
    let additionalLettersDebug = "";
    let secretSymbolC = 0;
    let secretSymbolO = 0;
    let secretSymbolN = 0;
    while (true) {
        let symbol = input[index];
        if (secretSymbolC > 0 && secretSymbolN > 0 && secretSymbolO > 0) {
            secretWord = secretWord + " ";
            additionalLettersDebug = secretWord;
            secretSymbolC = 0;
            secretSymbolN = 0;
            secretSymbolO = 0;
        }

        if (symbol === "End") {
            console.log(additionalLettersDebug);
            break;
        }

        if (symbol === "c") {
            if (secretSymbolC < 1) {
                secretSymbolC++;
                index++;
                continue;
            }
        } else if (symbol === "o") {
            if (secretSymbolO < 1) {
                secretSymbolO++;
                index++;
                continue;
            }
        } else if (symbol === "n") {
            if (secretSymbolN < 1) {
                secretSymbolN++;
                index++;
                continue;
            }
        }

        if (symbol === "a" || symbol === "A" || symbol === "b" || symbol === "B" ||
            symbol === "c" || symbol === "C" || symbol === "d" || symbol === "D" ||
            symbol === "e" || symbol === "E" || symbol === "f" || symbol === "F" ||
            symbol === "g" || symbol === "G" || symbol === "h" || symbol === "H" ||
            symbol === "i" || symbol === "I" || symbol === "j" || symbol === "J" ||
            symbol === "k" || symbol === "K" || symbol === "l" || symbol === "L" ||
            symbol === "m" || symbol === "M" || symbol === "n" || symbol === "N" ||
            symbol === "o" || symbol === "O" || symbol === "p" || symbol === "P" ||
            symbol === "q" || symbol === "Q" || symbol === "r" || symbol === "R" ||
            symbol === "s" || symbol === "S" || symbol === "t" || symbol === "T" ||
            symbol === "u" || symbol === "U" || symbol === "v" || symbol === "V" ||
            symbol === "w" || symbol === "W" || symbol === "x" || symbol === "X" ||
            symbol === "y" || symbol === "Y" || symbol === "Z" || symbol === "Z") {

            secretWord = secretWord + symbol;

        }
        index++;
    }
}   


function oneToHundredDivideByThree() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}

function averageNumber(input) {
    let index = 0;
    let number = Number(input[index]);
    index++;
    let result = 0;
    for (let i = 0; i < number; i++) {
        let newNumbersInput = Number(input[index]);
        result = result + newNumbersInput;
        index++;
    }
    console.log((result / number).toFixed(2));
}