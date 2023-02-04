function uniquePin(input) {
    let maxA = Number(input[0]);
    let maxB = Number(input[1]);
    let maxC = Number(input[2]);
    let result = "";
    

    for (let a = 2; a <= maxA; a++) {
        for (let b = 2; b <= maxB; b++) {
            for (let c = 2; c <= maxC; c++) {
                if (a % 2 === 0 && (b === 2 || b === 3 || b === 5 || b === 7) && c % 2 === 0) {
                    result = a + " " + b + " " + c;
                    console.log(result)
                }
            }
        }
    }
}

uniquePin (["9", "9", "9"])


function lettersCombo(input) {
    let first = input[0];
    let second = input[1];
    let faultSymbol = input[2];

    let firstLetter = first.charCodeAt(0);
    let secondLetter = second.charCodeAt(0);
    let count = 0;
    let result = "";
    for (let i = firstLetter; i <= secondLetter; i++) {
        for (let j = firstLetter; j <= secondLetter; j++) {
            for (let k = firstLetter; k <= secondLetter; k++) {
                let a = String.fromCharCode(i);
                let b = String.fromCharCode(j);
                let c = String.fromCharCode(k);

                if (a !== faultSymbol && b !== faultSymbol && c !== faultSymbol) {
                    count++;
                    result += (a + b + c) + " ";
                }
            }
        }
    }
    let totalResult = result + count;
    console.log(totalResult);
}

function happyNumber(input) {
    let n = Number(input[0]);
    
    let result = "";

    for (i = 1; i <= 9; i++) {
        for (j = 1; j <= 9; j++) {
            for (k = 1; k <= 9; k++) {
                for (l = 1; l <= 9; l++) {
                    if ((i + j) === (k + l)) {
                        if (n % (i + j) === 0) {
                            result += ""+ i + j + k + l + " ";
                        }
                    }
                }
            }
        }
    }
    console.log(result);
}



function carNumber(input) {
    let first = Number(input[0]);
    let second = Number(input[1]);

    let specialNum = "";
    for (let i = first; i <= second; i++) {
        for (let j = first; j <= second; j++) {
            for (let k = first; k <= second; k++) {
                for (let l = first; l <= second; l++) {
                    if ((i % 2 === 0 && l % 2 !== 0) || (i % 2 !== 0 && l % 2 === 0) ) {
                        if (i > l) {
                            if ((j + k) % 2 === 0) {
                                specialNum += "" + i + j + k + l + " ";
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(specialNum);
}

function weddingChallange(input) {
    let men = Number(input[0]);
    let women = Number(input[1]);
    let maxDates = Number(input[2]);
    let printingDates = '';
    let count = 0;
    let isTrue = false;
    for (let i = 1; i <= men; i++) {
        for (let j = 1; j <= women; j++) {
            count++;
            if (count > maxDates) {
                isTrue = true;
                break;
            } else {
                printingDates += `(${i} <-> ${j}) `
            }
        }
        if (isTrue === true) {
            break;
        }
    }
    console.log(printingDates);
}
            
function weddingSeats(input) {
    let lastSector = input[0];
    let firstSectorRows = Number(input[1]);
    let seats = Number(input[2]);

    let lastSectorCode = lastSector.charCodeAt(0);
    let firstSectorCode = 65;  //отговаря на А;
    let seatCode = 97 - 1; // 97 отговаря на "а", но при добавяне на стойност (от +1) ще пропуснем "а"; затова пишем 97 - 1;
    let firstSectorRowsOpp = firstSectorRows; 
    let result = "";
    let count = -1;
    let countSeats = 0;
    
    for (let sector = firstSectorCode; sector <= lastSectorCode; sector++) {
        count++; // при нов сектор, с ред повече;
        for (let rows = 1; rows <= firstSectorRowsOpp + count; rows++) {
            let finalSector = String.fromCharCode(sector);
            let finalRow = rows;
            if (rows % 2 !== 0) {
                for (let seat = 1; seat <= seats; seat++) {
                    let finalSeat = String.fromCharCode(seat + seatCode);
                    result = finalSector + finalRow + finalSeat;
                    countSeats++;
                    console.log(result);
                }
            } else {
                for (let seat = 1; seat <= seats + 2; seat++) {
                    let finalSeat = String.fromCharCode(seat + seatCode);
                    result = finalSector + finalRow + finalSeat;
                    countSeats++;
                    console.log(result);
                }
            }
        }
    }
    console.log(countSeats);
}

function safePasswordsGenerator(input) {
    let aMax = Number(input[0]);
    let bMax = Number(input[1]);
    let maximumPasswords = Number(input[2]);

    // ABxyBA 
    let a = 35 - 1;
    let b = 64 - 1;
    let x = 1;
    let y = 1 - 1;
    
    let counter = 0;
    let result = "";

    while (true) {
        counter++;
        if (counter > maximumPasswords) {
            break;
        }
        if (a === 55) {
            a = 35;
        } else {
            a++;
        }
        let codeA = String.fromCharCode(a);
        if (b === 96) {
            b = 64
        } else {
            b++;
        }
        let codeB = String.fromCharCode(b);
        if (x === aMax) {
            if (y === bMax) {
                break;
            }
        } 
        if (y === bMax) {
            x++;
            y = 1;
        } else {
            y++;
        }
        result += "" + codeA + codeB + x + y + codeB + codeA + "|";
    }
    console.log(result);
}


function secretDoor(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);
    let res = ""

    for (let i = 1; i <= a; i++) {
        for (let j = 1; j <= b; j++) {
            for (let k = 1; k <= c; k++) {
                if (i % 2 === 0 && k % 2 === 0 && (j === 2 || j === 3 || j === 5 || j === 7)) {
                    res += "" + i + " " + j + " " + k + "\n";
                }
            }
        }
    }
    console.log(res);
}


function twoNumbersSum(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magic = Number(input[2]);
    
    let count = 0;
    let sum = 0;
    let isTrue = false;

    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            count++;
            sum = i + j;
            if (sum === magic) {
                console.log(`Combination N:${count} (${i} + ${j} = ${magic})`);
                isTrue = true;
                break;
            }
        }
        if (isTrue === true) {
            break;
        }
    }
    if (isTrue === false) {
        console.log(`${count} combinations - neither equals ${magic}`);
    }
}

function monetnik(input) {
    let oneLev = Number(input[0]);
    let twoLev = Number(input[1]);
    let fiveLev = Number(input[2]);
    let sum = Number(input[3]);
    let mySum = 0;
    let iSum = 0;
    let jSum = 0;
    let kSum = 0;
    let result = "";
    for (i = 0; i <= oneLev; i++) {
        for (j = 0; j <= twoLev; j++) {
            for (k = 0; k <= fiveLev; k++) {
                if (i === 0) { 
                    iSum = 0;
                } else {
                    iSum = i * 1;
                }
                if (j === 0) { 
                    jSum = 0;
                } else {
                    jSum = j * 2;
                }
                if (k === 0) { 
                    kSum = 0;
                } else {
                    kSum = k * 5;
                }
                mySum = iSum + jSum + kSum;
                if (mySum === sum) {
                    console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${sum} lv.`);
                }
            }
        }
    } 
}


function happyCat(input) {
    let days = Number(input[0]);
    let hoursPerDay = Number(input[1]);
    let pricePerDay = 0;
    let pricePerHour = 0;
    let totalPrice = 0;
    
    for (let i = 1; i <= days; i++) {
        pricePerDay = 0;
        for (let j = 1; j <= hoursPerDay; j++) {
            if (i % 2 === 0 && j % 2 !== 0) {
                pricePerHour = 2.5;
            } else if (i % 2 !== 0 && j % 2 === 0) {
                pricePerHour = 1.25;
            } else {
                pricePerHour = 1;
            }
            totalPrice = totalPrice + pricePerHour;
            pricePerDay = pricePerDay + pricePerHour;

        }
        console.log(`Day: ${i} - ${pricePerDay.toFixed(2)} leva`);
    }
    console.log(`Total: ${totalPrice.toFixed(2)} leva`);
}

function songOfTheWheels(input) {
    let m = Number(input[0]);
    let counter = 0;
    let result = "";
    let theRealPassword = "";
    for (let a = 1; a <= 9; a++) {
        for (let b = 1; b <= 9; b++) {
            for (let c = 1; c <= 9; c++) {
                for (let d = 1; d <= 9; d++) {
                    if (a < b && c > d) {
                        if (a * b + c * d === m) {
                            counter++;
                            if (counter === 4) {
                                theRealPassword += "" + a + b + c + d + " ";
                            }
                            result += "" + a + b + c + d + " ";
                        }
                    }
                }
            }
        }
    }
    console.log(result);
    if(counter >= 4) {
        console.log("Password: " + theRealPassword);
    } else {
        console.log("No!");
    }
}


function primePairs(input) {
    let abStart = Number(input[0]);
    let cdStart = Number(input[1]);
    let abDiff = Number(input[2]);
    let cdDiff = Number(input[3]);

    let abMax = abStart + abDiff;
    let cdMax = cdStart + cdDiff;
    let result = "";
    

    for (let i = abStart; i <= abMax; i++) {
        for (let j = cdStart; j <= cdMax; j++) {
            let firstTrue = false;
            let secondTrue = false;
            for (let k = 2; k < i; k++) {
                if (i % k === 0) {
                    firstTrue = true;
                }
            }
            for (let l = 2; l < j; l++) {
                if (j % l === 0) {
                    secondTrue = true;
                }
            }
            if (firstTrue === false && secondTrue === false) {
                result = "" + i + j;
                console.log(result);
            }
        }
    }
}

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