//Completing the Game
const playingField = document.getElementById("playing-field");
const block = document.getElementById("block");
block.style.top = '5px';
block.style.left = '5px';
let upDown = parseInt(block.style.top);
let rightLeft = parseInt(block.style.left);

playingField.style.backgroundColor = "blue"
block.style.backgroundColor = 'yellow';

const header = document.createElement("h1");
header.innerHTML = "DOM intro Exersises ";
header.style.color = "#c0392b";
header.style.fontFamily = "Helvetica";
header.style.textAlign = 'center';
header.style.fontSize = '60px';
header.style.position = 'relative';
header.style.width = '50%';
header.style.minWidth = '95vw';
header.style.margin = '0 auto';
header.style.top = '30px';
header.style.overflow = 'hidden';
document.getElementById('header').appendChild(header);

const subHeader1 = document.createElement('h2');
subHeader1.setAttribute('class', 'sub-header');
subHeader1.innerHTML = 'Exercise 1- Completing the Game'
document.getElementById('exercise1').appendChild(subHeader1);

const subHeader2 = document.createElement('h2');
subHeader2.setAttribute('class', 'sub-header');
subHeader2.innerHTML = 'Exercise 2- Reservations'
document.getElementById('exercise2').appendChild(subHeader2);

const subHeader3 = document.createElement('h2');
subHeader3.setAttribute('class', 'sub-header');
subHeader3.innerHTML = 'Exercise 3- Visual Overload'
document.getElementById('exercise3').appendChild(subHeader3);

const subHeader4 = document.createElement('h2');
subHeader4.setAttribute('class', 'sub-header');
subHeader4.innerHTML = 'Exercise 4- Form'
document.getElementById('exercise4').appendChild(subHeader4);

function moveUp() {
    if (upDown <= 5) {
        return;
    }
    upDown -= 30;
    block.style.top = `${upDown}px`;
}

function moveRight() {
    if (rightLeft >= 395) {
        return;
    }
    rightLeft += 30;
    block.style.left = `${rightLeft}px`;
}

function moveDown() {
    if (upDown >= 395) {
        return;
    }
    upDown += 30;
    block.style.top = `${upDown}px`;
}

function moveLeft() {
    if (rightLeft <= 5) {
        return;
    }
    rightLeft -= 30;
    block.style.left = `${rightLeft}px`;
}

const right = document.getElementById('right');
const left = document.getElementById('left');
const up = document.getElementById('up');
const down = document.getElementById('down');

right.onclick = function() {
    moveRight();
}

left.onclick = function() {
    moveLeft();
}

up.onclick = function() {
    moveUp();
}

down.onclick = function() {
    moveDown();
}

//Reservations

const answer = document.createElement('div');
answer.style.height = '200px';
answer.style.width = '500px';
answer.style.position = 'absolute';
answer.style.top = '210px';
answer.style.right = 0;
answer.style.left = 0;
answer.style.margin = 'auto';
answer.style.fontSize = '30px';
document.getElementById('exercise2').appendChild(answer);

const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
}

const check = document.getElementById('input-check');
check.onclick = function() {
    checkReservation();
}

function checkReservation() {
    const name = document.getElementById('input-name').value;
    let lowerCaseName = name.toLowerCase();
    let fixedName = name.charAt(0).toUpperCase() + (lowerCaseName.slice(1));

    if (reservations[fixedName] !== undefined && reservations[fixedName].claimed === false) {
        answer.innerHTML = `Welcome, ${fixedName}`;
    } 
    else if (reservations[fixedName] !== undefined) {
        answer.innerHTML = 'Hmm, someone already claimed this reservation';
    }
    else if(name) {
        answer.innerHTML = `You have no reservation, ${name}`;
        reservations[fixedName] = {claimed: true};
    }
}

//Visual Overload

const box = [];
const colors = [0, 0, 0];
for (let i = 0; i < 6; i++) {
    box[i] = document.createElement('div');
    box[i].style.position = 'relative';
    box[i].style.top = '120px';
    box[i].style.height = '70px';
    box[i].style.width = '70px';
    box[i].style.display = 'inline';
    box[i].style.float = 'right';
    box[i].style.margin = '5px';
    box[i].style.margin = '5px';
    box[i].setAttribute('class', 'boxes');

    colorChange(box[i]);

    document.getElementById('exercise3').appendChild(box[i]);  
    
    box[i].onmouseover = function() {
        colorChange(box[i]);
    } 
}



function colorChange(box) {
    
    for (let j in colors) {
        colors[j] = Math.floor(Math.random() * 256);
    }
    box.style.backgroundColor = `rgb(${colors[0]},${colors[1]},${colors[2]})`;
}

//form
let formName = document.getElementById('form-name');
let salary = document.getElementById('salary');
let birthday = document.getElementById('birthday');
let phone = document.getElementById('phone');
let submit = document.getElementById('submit');

const error = document.createElement('p');
error.style.position = 'absolute';
error.style.bottom = '80px';
error.style.marginLeft = '20px';
error.style.fontSize = '30px';
error.style.color = 'red';

const welcome = document.createElement('p');
welcome.style.position = 'absolute';
welcome.style.top = '150px';
welcome.style.width = '100%';
welcome.style.textAlign = 'center';
welcome.style.fontSize = '80px';
welcome.style.color = 'green';

function validate() {
    error.innerHTML = '';
    if (phone.value.length !== 10) {
        error.innerHTML = 'Phone must be 10 digits long'
    }
    if (!phone.value) {
        error.innerHTML = 'phone is missing'
    }
    if (!birthday.value) {
        error.innerHTML = 'birthday is missing'
    }
    if (salary.value < 10000 || salary > 16000) {
        error.innerHTML = 'Salary must be between 10,000 - 16,000'
    }
    if (!salary.value) {
        error.innerHTML = 'desired salary is missing'
    }
    if (formName.value.length < 3) {
        error.innerHTML = 'name must be at least 3 characters'; 
    }
    if (!formName.value) {
        error.innerHTML = 'name is missing'
    }

    document.getElementById('form').appendChild(error);

    if (error.innerHTML === '') {
        document.getElementById('form').style.display = 'none';
        welcome.innerHTML = `Welcome, ${formName.value}!`;
        document.getElementById('exercise4').appendChild(welcome);
    }
}

submit.onclick = function() {
    validate();
}


