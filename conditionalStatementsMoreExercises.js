function pipesInPool(input) {
    let v = Number(input[0]);
    let p1 = Number(input[1]);
    let p2 = Number(input[2]);
    let workerMissHours = Number(input[3]);

    let poolFullnes = ((p1 + p2) * workerMissHours); 
    let pipeOneDebit = p1 * workerMissHours / poolFullnes * 100;
    let pipeTwoDebit = p2 * workerMissHours / poolFullnes * 100;
    
    if (v >= (p1 + p2) * workerMissHours) {
        console.log(`The pool is ${(poolFullnes / v * 100).toFixed(2)}% full. Pipe 1: ${pipeOneDebit.toFixed(2)}%. Pipe 2: ${pipeTwoDebit.toFixed(2)}%.`);
    } else {
        console.log(`For ${workerMissHours} hours the pool overflows with ${((p1 + p2) * workerMissHours - v).toFixed(2)} liters.`);
    }
}

function sleepyTomCat(input) {
    let daysOff = Number(input[0]);
    
    let totalDays = 365;
    let workingDays = totalDays - daysOff;
    let playWork = workingDays * 63;
    let playDaysOff = daysOff * 127;
    let totalPlay = playDaysOff + playWork;
    
    let minutesLeft = Math.abs(totalPlay - 30000);
    let minutesleftToHours = Math.floor(minutesLeft / 60);
    let minutesleftToMin = minutesLeft % 60;
    if (totalPlay > 30000) {
        console.log("Tom will run away");
        console.log(`${minutesleftToHours} hours and ${minutesleftToMin} minutes more for play`);
    } else {
        console.log("Tom sleeps well");
        console.log(`${minutesleftToHours} hours and ${minutesleftToMin} minutes less for play`);
    }
}

function harvest(input) {
    let area = Number(input[0]);
    let grapeSqM = Number(input[1]);
    let neededWine = Number(input[2]);
    let workers = Number(input[3]);

    let workingArea = 0.4 * area;
    let totalGrape = workingArea * grapeSqM;
    let wineFromGrape = totalGrape / 2.5;

    if (wineFromGrape < neededWine) {
        console.log(`It will be a tough winter! More ${(Math.floor(neededWine - wineFromGrape))} liters wine needed.`);
    } else {
        console.log(`Good harvest this year! Total wine: ${Math.floor(wineFromGrape)} liters.`);
        let wineForWorker = Math.ceil((wineFromGrape - neededWine) / workers);
        console.log(`${Math.ceil(wineFromGrape - neededWine)} liters left -> ${wineForWorker} liters per person.`);
    }
}

function transportPrice(input) {
    let km = Number(input[0]);
    let dayTime = (input[1]);

    let price = 0;

    if (km >= 100) {
        price = 0.06 * km;
        console.log(price.toFixed(2));
    } else if (km >= 20) {
        price = 0.09 * km;
        console.log(price.toFixed(2));
    } else {
        if (dayTime === "day") {
            price = 0.7 + 0.79 * km;
            console.log(price.toFixed(2));
        } else {
            price = 0.7 + 0.9 * km;
            console.log(price.toFixed(2));
        }
    }
}

function pets(input) {
    let days = Number(input[0]);
    let foodKg = Number(input[1]);
    let foodDogKg = Number(input[2]);
    let foodCatKg = Number(input[3]);
    let foodTurtleG = Number(input[4]);

    totalNeeds = (foodCatKg + foodDogKg + foodTurtleG / 1000) * days;
    if (foodKg >= totalNeeds) {
        console.log(`${Math.floor(foodKg - totalNeeds)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(totalNeeds - foodKg)} more kilos of food are needed.`);
    }
}

function flowerShop(input) {
// •	Магнолии – 3.25 лева - m
// •	Зюмбюли – 4 лева - z
// •	Рози – 3.50 лева - r
// •	Кактуси – 8 лева - k
    let m = Number(input[0]);
    let z = Number(input[1]);
    let r = Number(input[2]);
    let k = Number(input[3]);
    let presantPrice = Number(input[4]);

    totalPrice = (m * 3.25 + z * 4 + r * 3.5 + k * 8) * 0.95;
    
    if (totalPrice >= presantPrice) {
        console.log(`She is left with ${Math.floor(totalPrice - presantPrice)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(presantPrice - totalPrice)} leva.`);
    }
}

function fuelTank(input) {
    let fuelType = (input[0]);
    let fuel = Number(input[1]);

    if (fuel >= 25) {
        if (fuelType === "Gas") {
            console.log("You have enough gas.");
        } else if (fuelType === "Gasoline") {
            console.log("You have enough gasoline.");
        } else if (fuelType === "Diesel") {
            console.log("You have enough diesel.");
        } else {
            console.log("Invalid fuel!");
        }
    } else {
        if (fuelType === "Gas") {
            console.log("Fill your tank with gas!");
        } else if (fuelType === "Gasoline") {
            console.log("Fill your tank with gasoline!");
        } else if (fuelType === "Diesel") {
            console.log("Fill your tank with diesel!");
        } else {
            console.log("Invalid fuel!");
        }
    }
}

function fuelTankV2(input) {
    let fuelType = (input[0]);
    let fuelQuantity = Number(input[1]);
    let promoCard = (input[2]);
// 	Бензин – 2.22 лева за един литър, 
// 	Дизел – 2.33 лева за един литър
// 	Газ – 0.93 лева за литър
// намаления за литър гориво:
//  18 ст. за литър бензин, 12 ст. за литър дизел и 8 ст. за литър газ
// Ако шофьора е заредил между 20 и 25 литра включително, той получава 8 процента отстъпка от крайната цена,
//  при повече от 25 литра гориво, той получава 10 процента отстъпка от крайната цена.

    let price = 0;
    if (fuelType === "Gasoline") {
        price = 2.22;
    } else if (fuelType === "Diesel") {
        price = 2.33;
    } else {
        price = 0.93;
    }

    if (promoCard === "Yes") {
        if (fuelType === "Gasoline") {
            price = 2.22 - 0.18;
        } else if (fuelType === "Diesel") {
            price = 2.33 - 0.12;
        } else {
            price = 0.93 - 0.08;
        }
    }

    let totalPrice = price * fuelQuantity;

    if (fuelQuantity >= 20 && fuelQuantity <= 25) {
        totalPrice = totalPrice * 0.92;
    } else if (fuelQuantity > 25) {
        totalPrice = totalPrice * 0.9;
    }

    console.log(`${totalPrice.toFixed(2)} lv.`)
}