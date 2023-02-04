function trapezoidArea(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let h = Number(input[2]);
    let result = (a + b) * h / 2;
    console.log(result.toFixed(2));
}

function triangleArea(input) {
    let a = Number(input[0]);
    let h = Number(input[1]);
    let result = a * h / 2;
    console.log(result.toFixed(2));
}

function celciusToFarenheit(input) {
    let celcius = Number(input[0]);
    let farenheit = celcius * 1.8 + 32;
    console.log(farenheit.toFixed(2));
}


function vegetableMarket(input) {
    let vegisPerKg = Number(input[0]);
    let fruitsPerKg = Number(input[1]);
    let vegisTotal = Number(input[2]);
    let fruitsTotal = Number(input[3]);
    let result = (vegisPerKg * vegisTotal + fruitsPerKg * fruitsTotal) / 1.94
    console.log(result.toFixed(2));
}

function trainingLab(input) {
    let w = Number(input[0]);
    let h = Number(input[1]);

    let wToCentimeters = w * 100;
    let hToCentimeters = h * 100 - 100;

    let wPossible = Math.floor(wToCentimeters / 120);
    let hPossible = Math.floor(hToCentimeters / 70);
    let seats = wPossible * hPossible - 3;
    console.log(seats);
}


function fishland(input) {
    let skumriqPrice = Number(input[0]);
    let cacaPrice = Number(input[1]);
    let kgPalamud = Number(input[2]);
    let kgSafrid = Number(input[3]);
    let kgMidi = Number(input[4]);

    let palamudPrice = 1.6 * skumriqPrice;
    let safridPrice = 1.8 * cacaPrice;
    let midiPrice = 7.5;
    let totalPrice = palamudPrice * kgPalamud + safridPrice * kgSafrid + midiPrice * kgMidi;
    console.log(totalPrice.toFixed(2))
}

function housePainting(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    //Разхода на зелената боя е 1 литър за 3.4 м2, а на червената – 1 литър за 4.3 м2.

    let frontAndBackWalls = x * x * 2 - 1.2 * 2;
    let sideWalls = x * y * 2 - 1.5 * 1.5 * 2;
    let areaOfWalls = frontAndBackWalls + sideWalls;
    let areaOfCeil = x * y * 2 + x * h;
    
    let paintWalls = areaOfWalls / 3.4;
    let paintCeil = areaOfCeil / 4.3;
    console.log(paintWalls.toFixed(2));
    console.log(paintCeil.toFixed(2));
}

function cyrcleAreAndPery(input) {
    let r = Number(input[0]);
    let area = Math.PI * Math.pow(r, 2);
    let perimeter = Math.PI * r * 2;
    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}

function weatherForecast(input) {
    let weather = (input[0]);
    if (weather === "sunny") {
        console.log("It's warm outside!")
    } else {
        console.log("It's cold outside!")
    }
}

function weatherForecast(input) {
    let degree = Number(input[0]);
    if (degree >= 26 && degree <= 35) {
        console.log("Hot");
    } else if (degree >= 20.1 && degree <= 25.9) {
        console.log("Warm");
    } else if (degree >= 15 && degree <= 20) {
        console.log("Mild");
    } else if (degree >= 12 && degree <= 14.9) {
        console.log("Cool");
    } else if (degree >= 5 && degree <= 11.9) {
        console.log("Cold");
    } else {
        console.log("unknown");
    }
}