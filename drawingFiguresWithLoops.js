function rectangle() {
    for (i = 0; i <10; i++) {
        console.log("**********")
    }
} 
 
 
function rectangleN(input) {
    let number = Number(input[0]);
    for (i = 0; i < number; i++) {
        let result = "";
        for (j = 0; j < number; j++) {
            result = result + "*"
        }
    console.log(result);
    }
}
 
 
function squareOfStars(input) {
    let number = Number(input[0]);
    for (i = 0; i < number; i++) {
        let result = "";
        for (j = 0; j < number; j++) {
            result = result + "* "
        }
    console.log(result);
    }
}
 
 
function triangleOfDollars(input) {
    let num = Number(input[0]);
    for (redove = 1; redove <= num; redove++) {
        let printiraneNaVsekiNovRed = "";
        for (dolariNaEdinRed = 1; dolariNaEdinRed <= redove; dolariNaEdinRed++) {
            printiraneNaVsekiNovRed = printiraneNaVsekiNovRed + "$ ";
        }
        console.log(printiraneNaVsekiNovRed);
    }
}
 
 
function squareFrame(input) {
    let n = Number(input[0]);
    // + - - - +
    // | - - - |
    // | - - - |
    // | - - - |
    // + - - - +
 
    for (row = 1; row <= n; row++) {
        let rowPrint = "";
        for (rowSymbols = 1; rowSymbols <= n; rowSymbols++) {
            if (row === 1 || row === n) {
                if (rowSymbols === 1 || rowSymbols === n) {
                    rowPrint += "+ "
                } else {
                    rowPrint += "- "
                }
            } else if (row > 1 && row < n) {
                if (rowSymbols === 1 || rowSymbols === n) {
                    rowPrint += "| "
                } else {
                    rowPrint += "- "
                }
            }
        }
        console.log(rowPrint);
    }
}

function rhombusOfStars(input) {
    let n = Number(input[0]);
    for (row = 1; row <= n; row++) {
        let printRow = "";
        for (rowSymbols = 1; rowSymbols <= n; rowSymbols++) {
            if (rowSymbols <= (n - row)) {
                printRow += " ";
            } else {
                printRow += "* "
            }
        }
        console.log(printRow);
    }
    for (rowReverse = (n - 1); rowReverse > 0; rowReverse--) {   // тук е с ред по-малко, защото средния ред е в предходния цикъл;
        let printRowReverse = "";
        for (symbolsReverse = 1; symbolsReverse <= n; symbolsReverse++) {
            if (symbolsReverse <= (n - rowReverse)) {
                printRowReverse += " ";
            } else {
                printRowReverse += "* ";
            }
        }
        console.log(printRowReverse);
    }
}
 
function christmasTree(input) {
    let num = Number(input[0]);
    let middleSymbol = " | "
    for (let rows = 0; rows <= num; rows++) {  // първи ред винаги е символ "|".
        let rowResult = "";
        for (let leftSymbols = 1; leftSymbols <= num; leftSymbols++) {
            if (rows === 0) {
                rowResult += " ";
            }
            if (rows > 0) {
                if ((num - rows) >= leftSymbols) {
                    rowResult += " ";
                } else {
                    rowResult += "*";
                }
            }
        }
 
        rowResult += middleSymbol;
 
        for (let rightSymbols = 1; rightSymbols <= num; rightSymbols++) {
            if (rows > 0) {
                if ((num - rows) < rightSymbols) {
                    rowResult += "*";
                }
            }
        }
        console.log(rowResult);
    }
}
 
function sunglasses(input) {
    let n = Number(input[0]);
    let rows = n;
    let positions = n * 2 + n + n * 2;
 
    for (let i = 1; i <= rows; i++) {
        let result = "";
        for (let j = 1; j <= positions; j++) {
            if (i === 1 || i === rows) {
                if ((j >= 1 && j <= n * 2)) {
                    result += "*";
                } else if (j > n * 2 && j <= positions - 2 * n) {
                    result += " ";
                } else {
                    result += "*";
                }
            } else {
                if (j === 1) {
                    result += "*";
                } else if (j >= 2 && j < 2 * n) {
                    result += "/";
                } else if (j === 2 * n) {
                    result += "*";
                } else if (j > 2 * n && j <= 2 * n + n) {
                    if (i === Math.ceil(rows / 2)) {
                        result += "|";
                    } else {
                        result += " ";
                    }
                } else if (j === 2 * n + n + 1) {
                    result += "*"
                } else if (j > 2 * n + n + 1 && j < positions) {
                    result += "/";
                } else {
                    result += "*";
                }
            }
        }
        console.log(result);
    }
}
 

function house(input) {
    let num = Number(input[0]);
    
    if (num === 2) {
        console.log("**");
        console.log("||");
    
    } else if (num % 2 !== 0) {
        let ceil = Math.ceil(num / 2);
        let house = num - ceil;
        
        let leftSide = Math.floor(num / 2);
        let rightSide = leftSide;
        let middleside = "*";

        for (let i = 0; i < ceil; i++) {
            let ceilResult = "";
            for (let j = leftSide; j >= 1; j--) {
                if (j > i) {
                    ceilResult += "-";
                } else {
                    ceilResult += "*";
                }
            }
            ceilResult += middleside;
            for (let k = 1; k <= rightSide; k++) {
                if (k > i) {
                    ceilResult += "-";
                } else {
                    ceilResult += "*";
                }
            }
            console.log(ceilResult)
        }
        for (let l = 0; l < house; l++) {
            let houseResult = "";
            for (let h = 0; h < num; h++) {
                if (h === 0 || h === (num - 1)) {
                    houseResult += "|";
                } else {
                    houseResult += "*";
                }
            }
            console.log(houseResult);
        }

    } else {
        let ceil = num / 2;
        let house = num - ceil;
            
        let leftSide = num / 2;
        let rightSide = leftSide;
            
    
        for (let i = 1; i <= ceil; i++) {
            let ceilResult = "";
            for (let j = leftSide - 1; j >= 0; j--) {
                if (j >= i) {
                    ceilResult += "-";
                } else {
                    ceilResult += "*";
                }
            }
                
            for (let k = 1; k <= rightSide; k++) {
                if (k > i) {
                    ceilResult += "-";
                } else {
                    ceilResult += "*";
                }
            }
            console.log(ceilResult)
        }
        for (let l = 0; l < house; l++) {
            let houseResult = "";
            for (let h = 0; h < num; h++) {
                if (h === 0 || h === (num - 1)) {
                    houseResult += "|";
                } else {
                    houseResult += "*";
                }
            }
            console.log(houseResult);
        }
    }
}



function diamond(input) {
    let n = Number(input[0]);
    let firstPart = Math.ceil (n / 2);
    let secondPart = n - firstPart;
    if (n === 1) {
        console.log("*");
    } else if (n === 2) {
        console.log("**");
    } else if (n % 2 !== 0) {
        for (let i = 1; i <= firstPart; i++) {
            let leftAndMidSide = Math.ceil(n / 2);
            let rightSide = n - leftAndMidSide;
            let rowResult = "";
            

            for (let j = leftAndMidSide; j > 0; j--) {
                if (j === i) {
                    rowResult += "*";
                } else {
                    rowResult += "-";
                }
            }
            
            
            for (let l = 0; l < rightSide; l++) {
                if (i > 1 && i === l + 2) {
                    rowResult += "*";
                } else {
                    rowResult += "-";
                }
            }
            console.log(rowResult);
        }
        for (let i = 0; i < secondPart; i++) {
            let leftAndMidSide = Math.ceil(n / 2);
            let rightSide = n - leftAndMidSide;
            let rowResult = "";
            for (let j = 0; j < leftAndMidSide; j++) {
                if (i + 1 === j) {
                    rowResult += "*";
                } else {
                    rowResult += "-";
                }
            }
            for (let k = rightSide - 1; k >= 0; k--) {
                if (k === i + 1) {
                    rowResult += "*";
                } else {
                    rowResult += "-";
                }
            }
            console.log(rowResult);
        }
    } else if (n % 2 === 0) {
        for (let i = 1; i <= firstPart; i++) {
            let leftSide = n / 2;
            let rightSide = n - leftSide;
            let rowResult = "";
            

            for (let j = leftSide; j > 0; j--) {
                if (j === i) {
                    rowResult += "*";
                } else {
                    rowResult += "-";
                }
            }
            
            
            for (let l = 0; l < rightSide; l++) {
                if (i === l + 1) {
                    rowResult += "*";
                } else {
                    rowResult += "-";
                }
            }
            console.log(rowResult);
        }
        for (let i = 0; i < secondPart - 1; i++) {
            let leftAndMidSide = Math.ceil(n / 2);
            let rightSide = n - leftAndMidSide;
            let rowResult = "";
            for (let j = 0; j < leftAndMidSide; j++) {
                if (i + 1 === j) {
                    rowResult += "*";
                } else {
                    rowResult += "-";
                }
            }
            for (let k = rightSide - 1; k >= 0; k--) {
                if (k === i + 1) {
                    rowResult += "*";
                } else {
                    rowResult += "-";
                }
            }
            console.log(rowResult);
        }
    }
}


