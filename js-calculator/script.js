"use strict";

const btnCounts = document.querySelectorAll('button.count');
const btnDivide = document.getElementById("divide");
const btnMultiply = document.getElementById("multiply");
const btnPlus = document.getElementById("plus");
const btnMinus = document.getElementById("minus");
const btnEqual = document.getElementById("equal");
const btnClear = document.getElementById("clear");
const inputElem = document.getElementById("inputElem");

const modalEl = document.querySelector(".modal");
const overlayEl = document.querySelector(".overlay");
const okBtn = document.querySelector('.modal__message button');
const introEl = document.querySelector('.intro');

document.addEventListener('DOMContentLoaded', () => {
    introEl.classList.add('active');
    overlayEl.classList.add('active');
    endIntro(introEl, overlayEl);
});

function endIntro(intro, overlay) {
    setTimeout(() => {
        intro.classList.remove('active');
        overlay.classList.remove('active');
    }, 3500);
}

okBtn.addEventListener('click', () => {
    modalEl.classList.remove('active');
    overlayEl.classList.remove('active');
    inputElem.value = '';
});

btnCounts.forEach((btn) => {
    btn.addEventListener('click', () => {
        inputElem.value += btn.innerText;
    });
});

let countArray = [];
let decide;

btnPlus.addEventListener('click', () => {
    countArray.push(Number(inputElem.value));
    inputElem.value = '';
    decide = 'plus';
});

btnMinus.addEventListener('click', () => {
    countArray.push(Number(inputElem.value));
    inputElem.value = '';
    decide = 'minus';
});

btnDivide.addEventListener('click', () => {
    countArray.push(Number(inputElem.value));
    inputElem.value = '';
    decide = 'divide';
});

btnMultiply.addEventListener('click', () => {
    countArray.push(Number(inputElem.value));
    inputElem.value = '';
    decide = 'multiply';
});

btnEqual.addEventListener('click', () => {
    countArray.push(Number(inputElem.value));
    let sum = 0;
    if (decide == 'plus') {
        sum = countArray.reduce((acc, val) => acc + val, 0);
        inputElem.value = sum;
        countArray = [];
    } else if (decide == 'minus') {
        sum = countArray[0] - countArray[1];
        inputElem.value = sum;
        countArray = [];
    } else if (decide == 'divide') {
        if (countArray[1] === 0) {
            modalEl.classList.add('active');
            overlayEl.classList.add('active');
            countArray = [];
            return;
        }
        sum = countArray[0] / countArray[1];
        inputElem.value = sum;
        countArray = [];
    } else if (decide == 'multiply') {
        sum = countArray[0] * countArray[1];
        inputElem.value = sum;
        countArray = [];
    }
    lastResult = sum.toString();
    resultDisplayed = true;
});

btnClear.addEventListener('click', () => {
    inputElem.value = '';
    countArray = [];
    decide = null;
});