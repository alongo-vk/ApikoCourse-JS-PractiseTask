const Calculator = (a, b) => {
    const calculator = {a, b};
    
    return {
        ...calculator,
        ...sum(calculator),
        ...subtract(calculator),
    }
}

const sum = ({a, b}) => {
    return{
        sum: () => a + b,
    }
} 

const subtract = ({a, b}) => {
    return{
        subtract: () => a - b,
    }
} 

const AdvancedCalculator = (a, b) => {
    const calculator = Calculator(a, b);

    return{
        ...calculator,
        ...multiply(calculator),
        ...divide(calculator),
    }
}


const multiply = ({a, b}) => {
    return{
        multiply: () => a * b,
    }
}

const divide = ({a, b}) => {
    return{
        divide: () => a / b,
    }
}

const calculator = Calculator(10, 5);
console.log(calculator.sum());
console.log(calculator.subtract());

const advancedCalculator = AdvancedCalculator(4, 2);
console.log(advancedCalculator.sum());
console.log(advancedCalculator.subtract());
console.log(advancedCalculator.multiply());
console.log(advancedCalculator.divide());