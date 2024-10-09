let allOut = document.querySelectorAll('.out');
allOut.forEach(elem => {
    elem.style.display = 'flex';
    elem.style.justifyContent = 'space-between';
});

let row = document.querySelector('.row');
let rowNum = document.querySelector('.row-num');
let row1 = document.querySelector('.row-1');
let row2 = document.querySelector('.row-2');
let row3 = document.querySelector('.row-3');
let row4 = document.querySelector('.row-4');

const keysNum = [
    {key: '1', text: '1'},
    {key: '2', text: '2'},
    {key: '3', text: '3'},
    {key: '4', text: '4'},
    {key: '5', text: '5'},
    {key: '6', text: '6'},
    {key: '7', text: '7'},
    {key: '8', text: '8'},
    {key: '9', text: '9'},
    {key: '0', text: '0'}
];

keysNum.forEach((item, elem) => {
    elem = document.createElement('div');
    elem.dataset.key = item.key;
    elem.textContent = item.text;
    elem.classList.add('keyboard');
    rowNum.append(elem);
});

const keys1 = [
    {key: 'q', text: 'q'},
    {key: 'w', text: 'w'},
    {key: 'e', text: 'e'},
    {key: 'r', text: 'r'},
    {key: 't', text: 't'},
    {key: 'y', text: 'y'},
    {key: 'u', text: 'u'},
    {key: 'i', text: 'i'},
    {key: 'o', text: 'o'},
    {key: 'p', text: 'p'},
];

keys1.forEach((item, elem) => {
    elem = document.createElement('div');
    elem.dataset.key = item.key;
    elem.textContent = item.text;
    elem.classList.add('keyboard');
    row1.append(elem);
});

const keys2 = [
    {key: 'a', text: 'a'},
    {key: 's', text: 's'},
    {key: 'd', text: 'd'},
    {key: 'f', text: 'f'},
    {key: 'g', text: 'g'},
    {key: 'h', text: 'h'},
    {key: 'j', text: 'j'},
    {key: 'k', text: 'k'},
    {key: 'l', text: 'l'},
];

keys2.forEach((item, elem) => {
    elem = document.createElement('div');
    elem.dataset.key = item.key;
    elem.textContent = item.text;
    elem.classList.add('keyboard');
    row2.append(elem);
});

const keys3 = [
    {key: 'z', text: 'z'},
    {key: 'x', text: 'x'},
    {key: 'c', text: 'c'},
    {key: 'v', text: 'v'},
    {key: 'b', text: 'b'},
    {key: 'n', text: 'n'},
    {key: 'm', text: 'm'}
];

keys3.forEach((item, elem) => {
    elem = document.createElement('div');
    elem.dataset.key = item.key;
    elem.textContent = item.text;
    elem.classList.add('keyboard');
    row3.append(elem);
});

const keys4 = [
    {key: 'Control', text: 'ctrl'},
    {key: 'Alt', text: 'alt'}
];

keys4.forEach((item, elem) => {
    elem = document.createElement('div');
    elem.dataset.key = item.key;
    elem.textContent = item.text;
    elem.classList.add('keyboard');
    row4.append(elem);
});

let bs = document.createElement('div');
bs.classList.add('keyboard');
bs.dataset.key = 'Backspace';
bs.textContent = 'backspace';
bs.style.width = '150px';
row.append(bs);

let space = document.createElement('div');
space.classList.add('keyboard');
space.dataset.key = ' ';
space.textContent = 'space';
space.style.width = '350px';
row4.append(space);

let enter = document.createElement('div');
enter.classList.add('keyboard');
enter.dataset.key = 'Enter';
enter.textContent = 'enter';
enter.style.width = '100px';
row4.append(enter);

let shift = document.createElement('div');
shift.classList.add('keyboard');
shift.dataset.key = 'Shift';
shift.textContent = 'shift';
shift.style.width = '100px';
row4.append(shift);

let allKeys = document.querySelectorAll('.keyboard');

function addActive(button) {
    for(let k of allKeys) {
        if(k.dataset.key === button) k.classList.add('active');
    }
};

function removeActive() {
    allKeys.forEach(key => key.classList.remove('active'));
};

function result(event) {
    console.log(event);
    if(event.key === 'Alt') event.preventDefault();
    removeActive();
    addActive(event.key);
};

document.querySelector('input').onkeydown = result;


// function t11(event) {
//     console.log(event.key);
    // allKeys.forEach(key => key.classList.remove('active'));
    // let key = event.key;
    // let button = document.querySelector(`.keyboard[data="${key}"]`);
    // button.classList.add('active');
// }

// document.querySelector('.i-11').onkeydown = t11;