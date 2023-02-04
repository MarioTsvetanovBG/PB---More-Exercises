function backInThePast(input) {
    let money = Number(input[0]);
    let lastYear = input[1];

    let age = 18;
    let year = 1800;
    let moneyCycle = lastYear - 1800;
    let totalMoney = money;

    for (i = 0; i <= moneyCycle; i++) {
        if (year % 2 == 0) {
            totalMoney = totalMoney - 12000;
        } else {
            totalMoney = totalMoney - (12000 + 50 * age);
        }
        year++;
        age++;
    }
    if (totalMoney >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${totalMoney.toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${(Math.abs(totalMoney)).toFixed(2)} dollars to survive.`);
    }
}

function hospital(input) {
    let startUpDoc = 7;
    let timeDiapason = Number(input[0]);
    let index = 1;

    let patientSucceed = 0;
    let patientFailed = 0;

    for (i = 1; i <= timeDiapason; i++) {
        let patientsPerDay = Number(input[index]);

        if (i % 3 === 0) {
            if (patientFailed > patientSucceed) {
                startUpDoc++;
            }
        }

        if (startUpDoc >= patientsPerDay) {
            patientSucceed = patientSucceed + patientsPerDay;
        } else {
            patientSucceed = patientSucceed + startUpDoc;
            patientFailed = patientFailed + (patientsPerDay - startUpDoc);
        }
        index++;
    }
    console.log(`Treated patients: ${patientSucceed}.`);
    console.log(`Untreated patients: ${patientFailed}.`);
}

function logistics(input) {
    // •	До 3 тона – микробус (200 лева на тон)
    // •	От 4 до 11 тона – камион (175 лева на тон)
    // •	12 и повече тона – влак (120 лева на тон)

    let index = 0;
    let cargo = Number(input[index]);
    index++;
    let totalWeigh = 0;
    let busWeight = 0;
    let truckWeight = 0;
    let trainWeight = 0;
    for (i = 0; i < cargo; i++) {
        let cargoWeight = Number(input[index]);
        totalWeigh = totalWeigh + cargoWeight;
        if (cargoWeight <= 3) {
            busWeight = busWeight + cargoWeight;
        } else if (cargoWeight >= 4 && cargoWeight <= 11) {
            truckWeight = truckWeight + cargoWeight;
        } else {
            trainWeight = trainWeight + cargoWeight;
        }
        index++;
    }

    let busPercent = busWeight / totalWeigh * 100;
    let truckPercent = truckWeight / totalWeigh * 100;
    let trainPercent = trainWeight / totalWeigh * 100;
    let averagePricePerTon = (busWeight * 200 + truckWeight * 175 + trainWeight * 120) / totalWeigh;

    console.log(averagePricePerTon.toFixed(2));
    console.log(busPercent.toFixed(2) + "%");
    console.log(truckPercent.toFixed(2) + "%");
    console.log(trainPercent.toFixed(2) + "%");
}

function grade(input) {
    let students = Number(input[0]);
    let index = 1;
    let totalMarks = 0;
    let five = 0;
    let four = 0;
    let three = 0;
    let two = 0;
    for (i = 0; i < students; i++) {
        let marks = Number(input[index]);
        totalMarks = totalMarks + marks;
        if (marks >= 5) {
            five++;
        } else if (marks >= 4) {
            four++;
        } else if (marks >= 3) {
            three++;
        } else if (marks < 3) {
            two++;
        }
        index++;
    }
    let averageMark = totalMarks / students;
    let fivePer = five / students * 100;
    let fourPer = four / students * 100;
    let threePer = three / students * 100;
    let twoPer = two / students * 100;
    console.log(`Top students: ${fivePer.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${fourPer.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${threePer.toFixed(2)}%`);
    console.log(`Fail: ${twoPer.toFixed(2)}%`);
    console.log(`Average: ${averageMark.toFixed(2)}`);
}
 
 
function gameOfInvtervals(input) {
    let moves = Number(input[0]);
    let index = 1;
 
    let totalResult = 0;
    let a = 0;
    let b = 0;
    let c = 0;
    let d = 0;
    let e = 0;
    let invalidNum = 0;
    // •  1ви ред: "{Краен резултат}"
    // •  2ри ред: "From 0 to 9: {процент в интервала}%"
    // •  3ти ред: "From 10 to 19: {процент в интервала}%"
    // •  4ти ред: "From 20 to 29: {процент в интервала}%"
    // •  5ти ред: "From 30 to 39: {процент в интервала}%"
    // •  6ти ред: "From 40 to 50: {процент в интервала}%"
    // •  7ми ред: "Invalid numbers: {процент в интервала}%"
 
    for (i = 0; i < moves; i++) {
        let newMove = Number(input[index]);
        if (newMove < 0 || newMove > 50) {
            invalidNum++;
            if (totalResult == 0) {
                totalResult = 0;
            } else {
                totalResult = totalResult / 2;
            }
        } else if (newMove >= 0 && newMove <= 9) {
            a++;
            totalResult = totalResult + (newMove * 20 / 100);
        } else if (newMove >= 10 && newMove <= 19) {
            b++;
            totalResult = totalResult + (newMove * 30 / 100);
        } else if (newMove >= 20 && newMove <= 29) {
            c++;
            totalResult = totalResult + (newMove * 40 / 100);
        } else if (newMove >= 30 && newMove <= 39) {
            d++;
            totalResult = totalResult + 50;
        } else if (newMove >= 40 && newMove <= 50) {
            e++;
            totalResult = totalResult + 100;
        }
        index++;
    }
    console.log(totalResult.toFixed(2));
    console.log("From 0 to 9: " + (a / moves * 100).toFixed(2) + "%");
    console.log("From 10 to 19: " + (b / moves * 100).toFixed(2) + "%");
    console.log("From 20 to 29: " + (c / moves * 100).toFixed(2) + "%");
    console.log("From 30 to 39: " + (d / moves * 100).toFixed(2) + "%");
    console.log("From 40 to 50: " + (e / moves * 100).toFixed(2) + "%");
    console.log("Invalid numbers: " + (invalidNum / moves * 100).toFixed(2) + "%");
}
 
 
function bills(input) {
    // •  1ви ред: "Electricity: {ток за всички месеци} lv"
    // •  2ри ред: "Water: {вода за всички месеци} lv"
    // •  3ти ред: "Internet: {интернет за всички месеци} lv"
    // •  4ти ред: "Other: {други за всички месеци} lv"
    // •  5ти ред: "Average: {средно всички разходи за месец} lv"
    let months = Number(input[0]);
    let index = 1;
 
    let electric = 0;
    let water = 0;
    let internet = 0;
    let others = 0;
 
    for (i = 0; i < months; i++) {
        let monthElectric = Number(input[index]);
        electric = electric + monthElectric;
        water = water + 20;
        internet = internet + 15;
        others = others + (20 + 15 + monthElectric) + (20 + 15 + monthElectric) * 20 / 100;
        index++;
    }
 
    let average = (electric + water + internet + others) / months;
    console.log(`Electricity: ${electric.toFixed(2)} lv`);
    console.log(`Water: ${water.toFixed(2)} lv`);
    console.log(`Internet: ${internet.toFixed(2)} lv`);
    console.log(`Other: ${others.toFixed(2)} lv`);
    console.log(`Average: ${average.toFixed(2)} lv`);
}
 
 
function football(input) {
    let staduim = Number(input[0]);
    let fans = Number(input[1]);
    let index = 2;
 
    let a = 0;
    let b = 0;
    let v = 0;
    let g = 0;
 
    for (i = 0; i < fans; i++) {
        let fan = input[index];     //1.    Секторът, на който се намира – текст – "A", "B", "V" и "G".
        if (fan === "A") {
            a++;
        } else if (fan === "B") {
            b++;
        } else if (fan === "V") {
            v++;
        } else if (fan === "G") {
            g++;
        }
        index++;
    }
    console.log((a / fans * 100).toFixed(2) + "%");
    console.log((b / fans * 100).toFixed(2) + "%");
    console.log((v / fans * 100).toFixed(2) + "%");
    console.log((g / fans * 100).toFixed(2) + "%");
    console.log((fans / staduim * 100).toFixed(2) + "%");
}
 
 
function equalPairs(input) {
    let index = 0;
    let pairNums = Number(input[index]);
    let result = 0;
    let minResult = Number.MAX_SAFE_INTEGER;
    let maxResult = Number.MIN_SAFE_INTEGER;
 
    let count = 0;
    let localDiff = 0;
    let maxDiff = Number.MIN_SAFE_INTEGER;
    let firstNum = 0;
    let secondNum = 0;
 
 
    for (i = 0; i < pairNums; i++) {
        index++;
        let a = Number(input[index]);
        index++;
        let b = Number(input[index]);
        count++;
 
        result = a + b;
 
        if (result < minResult) {
            minResult = result;
        }
        if (result > maxResult) {
            maxResult = result;
        }
 
        if (count % 2 !== 0) {
            firstNum = result;
        } else {
            secondNum = result;
        }
        if (count > 1) {
            localDiff = Math.abs(secondNum - firstNum);
            if (localDiff > maxDiff) {
                maxDiff = localDiff;
            }
        }
    }
    if (maxResult === minResult) {
        console.log(`Yes, value=${maxResult}`);
    } else {
        console.log(`No, maxdiff=${maxDiff}`);
    }
}
 
function clockV1() {
    for (hours = 0; hours < 24; hours++) {
        for (minutes = 0; minutes < 60; minutes++) {
            console.log(`${hours} : ${minutes}`);
        }
    }
}
 
function clockV2() {
    for (hours = 0; hours < 24; hours++) {
        for (minutes = 0; minutes < 60; minutes++) {
            for (seconds = 0; seconds < 60; seconds++) {
                console.log(`${hours} : ${minutes} : ${seconds}`);
            }
        }
    }
}
 
function oddOrEvenPosition(input) {
    let index = 0;
    let numbers = Number(input[index]);
    let count = 0;
    
    let oddSum = 0;
    let oddMin = Number.MAX_SAFE_INTEGER;
    let oddMax = Number.MIN_SAFE_INTEGER;
 
    let evenSum = 0;
    let evenMin = Number.MAX_SAFE_INTEGER;
    let evenMax = Number.MIN_SAFE_INTEGER;
    
    let counterOne = false;
    let counterTwo = false;
 
    for (i = 0; i < numbers; i++) {
        index++;
        count++;
        let newNum = Number(input[index]);
        if (count % 2 !== 0) {
            oddSum = oddSum + newNum;
            if (newNum < oddMin) {
                oddMin = newNum;
                counterOne = true;
            }
            if (newNum > oddMax) {
                oddMax = newNum;
                counterOne = true;
            }
        } else if (count % 2 === 0) {
            evenSum = evenSum + newNum;
            if (newNum < evenMin) {
                evenMin = newNum;
                counterTwo = true;
            }
            if (newNum > evenMax) {
                evenMax = newNum;
                counterTwo = true;
            }
        }
    }
    console.log("OddSum=" + oddSum.toFixed(2) + ",");
    if (counterOne === true) {
        console.log("OddMin=" + oddMin.toFixed(2) + ",");
        console.log("OddMax=" + oddMax.toFixed(2) + ",");
    } else {
        console.log("OddMin=No,");
        console.log("OddMax=No,");
    }
    console.log("EvenSum=" + evenSum.toFixed(2) + ",");
    if (counterTwo === true) {
        console.log("EvenMin=" + evenMin.toFixed(2) + ",");
        console.log("EvenMax=" + evenMax.toFixed(2));
    } else {
        console.log("EvenMin=No,");
        console.log("EvenMax=No");
    }
}