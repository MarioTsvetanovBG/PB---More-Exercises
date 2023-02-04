function ticketFor(input) {
    // •	IP – 499.99 лева.
    // •	Normal – 249.99 лева.
    //      От 1 до 4 – 75% от бюджета.
    // •	От 5 до 9 – 60% от бюджета.
    // •	От 10 до 24 – 50% от бюджета.
    // •	От 25 до 49 – 40% от бюджета.
    // •	50 или повече – 25% от бюджета.
    let budget = Number(input[0]);
    let category = input[1];
    let peopleNumber = Number(input[2]);

    let workBudget = budget;
    let transport = 0;
    if (peopleNumber >= 1 && peopleNumber <= 4) {
        transport = workBudget * 0.75;
    } else if (peopleNumber >= 5 && peopleNumber <= 9) {
        transport = workBudget * 0.60;
    } else if (peopleNumber >= 10 && peopleNumber <= 24) {
        transport = workBudget * 0.50;
    } else if (peopleNumber >= 25 && peopleNumber <= 49) {
        transport = workBudget * 0.40;
    } else if (peopleNumber >= 50) {
        transport = workBudget * 0.25;
    }

    let ticketTotal = 0;
    if (category == "Normal") {
        ticketTotal = 249.99 * peopleNumber;
    } else {
        ticketTotal = 499.99 * peopleNumber;
    }

    let expenses = ticketTotal + transport;
    if (budget >= expenses) {
        console.log(`Yes! You have ${(budget - expenses).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(expenses - budget).toFixed(2)} leva.`);
    }
}

function bikeRace(input) {
    let juniors = Number(input[0]);
    let seniors = Number(input[1]);
    let route = input[2];  //"trail", "cross-country", "downhill" или "road"

    let juniorPrice = 0;
    let seniorPrice = 0;

    if (route === "trail") {
        juniorPrice = 5.5;
        seniorPrice = 7;
    } else if (route === "cross-country") {
        juniorPrice = 8;
        seniorPrice = 9.5;
        if (juniors + seniors >= 50) {
            juniorPrice = juniorPrice * 0.75;
            seniorPrice = seniorPrice * 0.75;
        }
    } else if (route === "downhill") {
        juniorPrice = 12.25;
        seniorPrice = 13.75;
    } else if (route === "road") {
        juniorPrice = 20;
        seniorPrice = 21.5;
    }

    let totalPrice = juniorPrice * juniors + seniorPrice * seniors;
    let expenses = totalPrice * 0.05;
    console.log(`${(totalPrice - expenses).toFixed(2)}`);
}

function flowers(input) {
    // 3 вида цветя: хризантеми, рози и лалета.
    let h = Number(input[0]);
    let r = Number(input[1]);
    let l = Number(input[2]);
    let season = (input[3]); // – [Spring, Summer, Аutumn, Winter]
    let holiday = (input[4]); // [Y – да / N - не]

    let hPrice = 0;
    let rPrice = 0;
    let lPrice = 0;

    if (season === "Spring" || season === "Summer") {
        hPrice = 2;
        rPrice = 4.1;
        lPrice = 2.5;
    } else if (season === "Autumn" || season === "Winter") {
        hPrice = 3.75;
        rPrice = 4.5;
        lPrice = 4.15;
    }

    let totalPrice = hPrice * h + rPrice * r + lPrice * l;

    if (holiday === "Y") {
        totalPrice = totalPrice * 1.15;
    }

    if (l > 7 && season === "Spring") {
        totalPrice = totalPrice * 0.95;
    }
    if (r >= 10 && season === "Winter") {
        totalPrice = totalPrice * 0.9;
    }
    if (h > 20 || r > 20 || l > 20) {
        totalPrice = totalPrice * 0.8;
    }

    console.log((totalPrice + 2).toFixed(2))
}

function carToGo(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let price = 0;
    let luxury = ""; //"Economy class", "Compact class" или "Luxury class"
    let type = ""; // Cabrio or Jeep;
    if (budget <= 100) {
        luxury = "Economy class";
        if (season === "Summer") {
            type = "Cabrio";
            price = 0.35 * budget;
        } else if (season === "Winter") {
            type = "Jeep";
            price = 0.65 * budget;
        }
    } else if (budget > 100 && budget <= 500) {
        luxury = "Compact class";
        if (season === "Summer") {
            type = "Cabrio";
            price = 0.45 * budget;
        } else if (season === "Winter") {
            type = "Jeep";
            price = 0.80 * budget;
        }
    } else if (budget > 500) {
        luxury = "Luxury class";
        type = "Jeep";
        price = 0.90 * budget;
    }
    console.log(`${luxury}`);
    console.log(`${type} - ${price.toFixed(2)}`);
}

function vacation(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let price = 0;
    let location = "";
    let typeNight = "";

    if (budget <= 1000) {
        typeNight = "Camp";
        if (season === "Summer") {
            location = "Alaska";
            price = 0.65 * budget;
        } else if (season === "Winter") {
            location = "Morocco";
            price = 0.45 * budget;
        }
    } else if (budget > 1000 && budget <= 3000) {
        typeNight = "Hut";
        if (season === "Summer") {
            location = "Alaska";
            price = 0.8 * budget;
        } else if (season === "Winter") {
            location = "Morocco";
            price = 0.6 * budget;
        }
    } else if (budget > 3000) {
        typeNight = "Hotel";
        price = 0.9 * budget;
        if (season === "Summer") {
            location = "Alaska";
        } else if (season === "Winter") {
            location = "Morocco";
        }
    }
    console.log(`${location} - ${typeNight} - ${price.toFixed(2)}`);
}

function truckDriver(input) {
    let season = input[0];
    let km = Number(input[1]);

    let price = 0;

    if (km <= 5000) {
        if (season === "Spring" || season === "Autumn") {
            price = 0.75;
        } else if (season === "Summer") {
            price = 0.9;
        } else if (season === "Winter") {
            price = 1.05;
        }
    } else if (km > 5000 && km <= 10000) {
        if (season === "Spring" || season === "Autumn") {
            price = 0.95;
        } else if (season === "Summer") {
            price = 1.1;
        } else if (season === "Winter") {
            price = 1.25;
        }
    } else {
        price = 1.45;
    }

    let salary = price * km * 4;
    let taxes = 0.1 * salary;
    let totalSalary = salary - taxes;
    console.log(totalSalary.toFixed(2));
}


function schoolCamp(input) {
    let season = input[0];
    let group = input[1];
    let students = Number(input[2]);
    let nights = Number(input[3]);

    let price = 0;
    let sport = "";

    if (season === "Winter") {
        if (group === "boys") {
            price = 9.6;
            sport = "Judo";
        } else if (group === "girls") {
            price = 9.6;
            sport = "Gymnastics";
        } else if (group === "mixed") {
            price = 10;
            sport = "Ski";
        }
    } else if (season === "Spring") {
        if (group === "boys") {
            price = 7.2;
            sport = "Tennis";
        } else if (group === "girls") {
            price = 7.2;
            sport = "Athletics";
        } else if (group === "mixed") {
            price = 9.5;
            sport = "Cycling";
        }
    } else if (season === "Summer") {
        if (group === "boys") {
            price = 15;
            sport = "Football";
        } else if (group === "girls") {
            price = 15;
            sport = "Volleyball";
        } else if (group === "mixed") {
            price = 20;
            sport = "Swimming";
        }
    }

    let discount = 0;
    if (students >= 50) {
        discount = 0.5;
    } else if (students >= 20 && students < 50) {
        discount = 0.85;
    } else if (students >= 10 && students < 20) {
        discount = 0.95;
    } else {
        discount = 1;
    }

    let totalPrice = students * price * nights * discount;
    console.log(`${sport} ${totalPrice.toFixed(2)} lv.`);
}

function pointOnRectangleBorder(input) {
    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
    let x2 = Number(input[2]);
    let y2 = Number(input[3]);
    let x = Number(input[4]);
    let y = Number(input[5]);
     
    if ((x === x1 || x === x2) && (y >= y1 && y <= y2)) {
        console.log("Border");
    } else if ((y === y1 || y === y2) && (x >= x1 && x <= x2)) {
        console.log("Border") 
    } else {
        console.log("Inside / Outside");
    }
}

function num1To10() {
    for (i = 1; i < 11; i++) {
        console.log(i);
    }
}


function multiplyByTwo(input) {
    let index = 0;
    let result = 0;

    while (true) {
        let newNumber = Number(input[index]);
        if (newNumber >= 0) {
            result = newNumber * 2;
            console.log(`Result: ${result.toFixed(2)}`);
            index++;
        } else {
            console.log("Negative number!");
            break;
        } 
    }
}



