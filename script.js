let sum = '';
let oper = '';
let firstOp = '';
let secondOp = '';
let operStore = '';
let firstStore = '';
let secondStore = '';
let currentScreen = '';

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
    if (y == 0) {
        return 'ERR';
    } else {
        return x / y;
    };
};
const modulo = (x, y) => {
    if (x < 0 || y < 0) {
        return 'ERR';
    } else {
        if (y > x) {
            return 'ERR';
        } else {
            let total = x / y;
            let floor = Math.floor(total);
            let mod = x - (floor * y);
            return mod;
        };
    };
};
const rounded = num => {
    let numString = num.toString();
    if (numString.indexOf('.' == -1)) {        
        if (numString.length > 7) {
            let numNum = num.toExponential(1);
            return numNum.toString();
        } else {
            return num;
        }
    } else {
        if (num.length > 8) {
            let numNum = num.toExponential(1);
            return numNum.toString();  
        } else {
            return num;
        }
    }
}
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
        case "%":
            return modulo(x, y);
            break;
        default:
            return 'HAHAHA';
            break;
    }
};
const clear = document.getElementById('clear');
const clearer = () => {
    screen.innerHTML = `<p>0</p>`;
    if (!secondOp) {
        oper = '';
        operStore = '';
        firstOp = '';
        firstStore = '';
    } else {
        secondOp = '';
        secondStore = '';
    };
};
clear.addEventListener('click', clearer);

const screen = document.getElementById('screen');
const updateScreen = num => {
    screen.innerHTML = `<p>${num}</p>`;
};
const firstOper = num => {
    let nums = String(firstOp).replace('.', '').length;
    if (nums >= 7) {
        return;
    } else {
        if (num.key) {     
            if (num.key == '.' && firstStore == '') {                
                let _num = num.key;
                firstOp += `0${_num}`;
                firstStore = firstOp;
                updateScreen(firstStore);
            } else {
                let _num = num.key;
                firstOp += `${_num}`;
                firstStore = firstOp;
                updateScreen(firstStore);
            }       
        } else {  
            if (num.target.id == '.' && firstStore == '') {                
                let _num = num.target.id;
                firstOp += `0${_num}`;
                firstStore = firstOp;
                updateScreen(firstStore);
            } else {
                let _num = num.target.id;
                firstOp += `${_num}`;
                firstStore = firstOp;
                updateScreen(firstStore);
            }          
        }
    };
};
const secondOper = num => {
    let nums = String(secondOp).replace('.', '').length;
    if (nums >= 7) {
        return;
    } else {
        if (num.key) {            
            if (num.key == '.' && secondStore == '') {                
                let _num = num.key;
                secondOp += `0${_num}`;
                secondStore = secondOp;
                updateScreen(secondStore);
            } else {                
                let _num = num.key;
                secondOp += `${_num}`;
                secondStore = secondOp;
                updateScreen(secondStore);
            }
        } else {  
            if (num.target.id == '.' && secondStore == '') {
                let _num = num.target.id;
                secondOp += `0${_num}`;
                secondStore = secondOp;
                updateScreen(secondStore);
            } else {
                let _num = num.target.id;
                secondOp += `${_num}`;
                secondStore = secondOp;
                updateScreen(secondStore);
            }          
        }
    };
};
const numbers = document.querySelectorAll('.number');
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', e => {
        if (e.target.id == '.') {
            if (!oper && !secondOp) {
                if (firstOp.indexOf('.') == -1) {
                    firstOper(e);
                } else {
                    return;
                };
            } else {
                if (secondOp.indexOf('.') == -1) {
                    secondOper(e);
                } else {
                    return;
                };
            };
        } else {
            if (!oper && !secondOp) {
                if (firstOp == '0') {
                    firstOp = '';
                    firstStore = '';
                    firstOper(e);
                } else {
                    firstOper(e);
                }
            } else {
                if (secondOp == '0') {
                    secondOp = '';
                    secondStore = '';
                    secondOper(e);
                } else {
                    secondOper(e);
                }
            };
        };
    });
};
let numbs = Array.from(numbers).map(num => num.id);
window.addEventListener('keydown', e => {
    if (numbs.indexOf(e.key) != -1) {
        if (e.key == '.') {
            if (!oper && !secondOp) {
                if (firstOp.indexOf('.') == -1) {
                    firstOper(e);
                } else {
                    return;
                };
            } else {
                if (secondOp.indexOf('.') == -1) {
                    secondOper(e);
                } else {
                    return;
                };
            };
        } else {
            if (!oper && !secondOp) {
                if (firstOp == '0') {
                    firstOp = '';
                    firstStore = '';
                    firstOper(e);
                } else {
                    firstOper(e);
                }
            } else {
                if (secondOp == '0') {
                    secondOp = '';
                    secondStore = '';
                    secondOper(e);
                } else {
                    secondOper(e);
                }
            };
        };
    } else {
        return;
    }
});
const operators = document.querySelectorAll('.operator');
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', e => {
        if (!secondOp && firstOp) {
            oper = e.target.id;
        } else if (firstOp && secondOp) {
            operStore = oper;
            sum = rounded(operate(Number(firstStore), Number(secondStore), operStore));
            firstStore = sum;
            oper = e.target.id;
            secondOp = '';
            updateScreen(sum);
        };
    });
};
const equal = document.querySelector('.operate');
equal.addEventListener('click', () => {
    if (firstStore && oper && secondStore) {
        operStore = oper;
        sum = rounded(operate(Number(firstStore), Number(secondStore), operStore));
        firstStore = sum;
        secondOp = '';
        updateScreen(sum);
    };
});
const negator = document.querySelector('#negator');
negator.addEventListener('click', () => {
    if (!secondOp) {
        firstOp = negate(firstOp).toString();
        firstStore = negate(firstStore).toString();
    } else {
        secondOp = negate(secondOp).toString();
        secondStore = negate(secondStore).toString();
    };
    screen.innerHTML = `<p>${negate(screen.innerText)}</p>`;
});

window.addEventListener('keydown', e => {
    if (e.key == 'Backspace') {
        if (!oper && !secondOp) {
            if (screen.innerText.length == 1) {
                firstOp = '0';
                firstStore = firstOp;
                screen.innerHTML = `<p>${firstOp}</p>`;
            } else {
                firstOp = firstOp.substring(0, firstOp.length - 1);
                firstStore = firstOp;
                screen.innerHTML = `<p>${firstOp}</p>`;
            };
        } else {
            if (screen.innerText.length == 1) {
                secondOp = '0';
                secondStore = secondOp;
                screen.innerHTML = `<p>${secondOp}</p>`;
            } else {
                secondOp = secondOp.substring(0, secondOp.length - 1);
                secondStore = secondOp;
                screen.innerHTML = `<p>${secondOp}</p>`;
            };
        };
    } else {
        return;
    }
})