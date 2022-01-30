let screen = document.querySelector("#screen");
let numBtns = document.querySelectorAll(".num");
let calcBtns = document.querySelectorAll(".calc");
let equalsBtn = document.querySelector("#equals");
let clearBtn = document.querySelector('#clear');
let num1 = '';
let num2 = '';
let operator = '';
let result;


numBtns.forEach(button => {
    button.addEventListener('click', function(e) {
        getNumbers(e.target.value)
    })
});

function getNumbers(num) {
    if (!operator) {
        num1 = ''
    num1 += num;
    screen.textContent += num1; 
    }
    if (operator) {
        num2 += num;
        screen.textContent = num2;
    }
}

calcBtns.forEach(button => {
    button.addEventListener('click', function(e) {
        if (num1 && operator && num2) {
            operate();
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

function add(a,b) {
    //return a + b;
    result = +a + +b;
    screen.textContent = result;
}

function subtract(a,b) {
    result = +a - +b;
    screen.textContent = result;
}

function product(a,b) {
    result = (+a)*(+b);
    screen.textContent = result;
}

function quotient(a,b) {
    result = (+a)/(+b);
    roundedResult = parseFloat(result.toFixed(8));
    screen.textContent = roundedResult;
}



equalsBtn.addEventListener('click', operate);

function operate() {
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

//operate('-', 2, 5);