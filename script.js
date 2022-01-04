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
const operate = (a, b, op) => {
    switch (op) {
        case "+":
            return add(a, b);
            break;
        case "-":
            return subtract(a, b);
            break;
        case "*":
            return multiply(a, b);
            break;
        case "/":
            return divide(a, b);
            break;
        default:
            return 'Invalid operator!';
            break;
    }
};