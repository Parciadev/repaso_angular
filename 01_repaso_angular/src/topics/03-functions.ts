

function addNumbers (a: number, b: number) {
    return a + b;
}

const addNumbersArrow = (a: number, b:number) => {
    return `${  a + b  }`;
}

function multiply (firstNumber: number , secondNumber: number, base: number = 2){
    return firstNumber * secondNumber * base;
}

const result = addNumbers(1, 2);
const resultArrow = addNumbersArrow(1, 2);
const resultMultiply = multiply(2, 3, 2);

console.log({result});
console.log({resultArrow});
console.log({resultMultiply});

export {};