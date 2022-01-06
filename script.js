const add = (x, y) => {
    return x + y;
};
const subtract = (x, y) => {
    return x - y;
};
const multiply = (x, y) => {
    return x * y;
};
const divide = (x, y) => {
    return x / y;
};
const negate = num => {
    return num - num * 2;
};
const operate = (x, y, op) => {
    switch (op) {
        case "+":
            return add(x, y);
            break;
        case "-":
            return subtract(x, y);
            break;
        case "*":
            return multiply(x, y);
            break;
        case "/":
            return divide(x, y);
            break;
        default:
            return 'ERR';
            break;
    }
};
let firstOp = '';
let firstStore = '';
let oper = '';
let operStore = '';
let secondOp = '';
let secondStore = '';
let sum = '';

const firstOper = num => {
    let nums = String(firstOp).replace('.', '').length;
    if (nums >= 7) {
        return;
    } else {
        let _num = num.target.innerHTML;
        firstOp += `${_num}`;
        firstStore = firstOp;
        console.log(firstStore);
    };
};
const secondOper = num => {
    let nums = String(secondOp).replace('.', '').length;
    if (nums >= 7) {
        return;
    } else {
        let _num = num.target.innerHTML;
        secondOp += `${_num}`;
        secondStore = secondOp;
        console.log(secondStore);
    };
};
const numbers = document.querySelectorAll('.number');
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', e => {
        if (!oper && !secondOp) {
            firstOper(e);
        } else {
            secondOper(e);
        }
    });
};
const operators = document.querySelectorAll('.operator');
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', e => {
        if (!secondOp && firstOp) {
            oper = e.target.innerHTML;
            console.log(oper);
        } else if (firstOp && secondOp) {
            operStore = oper;
            sum = operate(Number(firstStore), Number(secondStore), operStore);
            firstStore = sum;
            oper = e.target.innerHTML;
            secondOp = '';
            console.log(sum);
            console.log(oper);
        };
    });
};
 