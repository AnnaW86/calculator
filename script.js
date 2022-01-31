let screen = document.querySelector("#screen");
let numBtns = document.querySelectorAll(".num");
let calcBtns = document.querySelectorAll(".calc");
let equalsBtn = document.querySelector("#equals");
let clearBtn = document.querySelector('#clear');
let pointBtn = document.querySelector('.point');
let num1 = '';
let num2 = '';
let operator = '';
let result;
let status = '';

// numBtns to input num1 and num2:

numBtns.forEach(button => {
    button.addEventListener('click', function(e) {
        getNumbers(e.target.value)
    })
});

function getNumbers(num) {
    if (!operator && num1.length<10) {
        num1 += num;
        screen.textContent = num1;
    }
    if (operator && num2.length<10) {
        num2 += num;
        screen.textContent = num2;
       }
    }

pointBtn.addEventListener('click', function(e) {
        getPoint(e.target.value)
    });

function getPoint(dot) {
    if (!operator /*&& num1.length<0*/ && !num1.includes('.')) {
        num1 += dot;
        screen.textContent = num1;
    } else if (num2 && !num2.includes('.')) {
        num2 += dot;
        screen.textContent = num2;
    }
}

//calcBtns to input operators:

calcBtns.forEach(button => {
    button.addEventListener('click', function(e) {
        if (num1 && operator && num2) {
            calculate();
            num1 = result;
            num2 = '';
            getOperator(e.target.value)
            return;
        } else {
           getOperator(e.target.value)
        }
    })
});

function getOperator(calc) {
    operator = calc;
}

//equalsBtn to calculate final answer:

equalsBtn.addEventListener('click', calculate);

function calculate() {
    if (!num1 || !operator || !num2) {
        clearInput();
        alert("Uh oh, something's missing - start again.");
    }
    switch (operator) {
        case '+':
            add(num1,num2);
            break;
        case '-':
            subtract(num1,num2);
            break;
        case '*':
            product(num1,num2);
            break;
        case '/':
            if (num2 === '0') {
                alert("Don't you dare!");
            }
            else {
            quotient(num1,num2);
            }
            break;
            
    }
}

function add(a,b) {
    initialResult = +a + +b;
    dealWithDecimals(initialResult);
    getFinalAnswer(result);
}

function subtract(a,b) {
    initialResult = +a - +b;
    dealWithDecimals(initialResult);
    getFinalAnswer(result);
}

function product(a,b) {
    initialResult = (+a)*(+b);
    dealWithDecimals(initialResult);
    getFinalAnswer(result);
}

function quotient(a,b) {
    initialResult = (+a)/(+b);
    dealWithDecimals(initialResult);
    getFinalAnswer(result);
}

function dealWithDecimals(d) {
    result = Math.round(d * 10000000) / 10000000;
}
function getFinalAnswer(c) {
    if (c.toString().length <10) {
        finalAnswer = c;
    } else {
        finalAnswer = c.toExponential(3);
    }
    screen.textContent = finalAnswer;
}

//Clear button and escape key

clearBtn.addEventListener('click', clearInput);

document.addEventListener('keydown', function(e) {
    if(e.key === "Escape") {
        clearInput();
    }
})

function clearInput() {
    num1 = '';
    num2 = '';
    operator = '';
    screen.textContent = '';
}

