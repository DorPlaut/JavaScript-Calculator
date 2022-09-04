// vars

let result = document.querySelector('.result');
let calculate = document.querySelector('.calculate');
let screen = document.querySelector('.screen');
// !!!!!! NUMBERS !!!!!!!

const numBtns = document.querySelectorAll('.numBtn');
const numbers = Array.from(numBtns);
numbers.unshift(numbers.pop());
numbers.map((btn, num) => {
  const addNumToScreen = () => {
    if (result.textContent != '' && screen.textContent != '') {
      screen.textContent = screen.textContent + btn.textContent;
    } else {
      result.textContent = '';
      screen.textContent = screen.textContent + btn.textContent;
    }
  };
  btn.addEventListener('click', addNumToScreen);
});

// !!!!!! END OF NUMBERS !!!!!!!

// !!!!!! ACTIONS !!!!!!!
// = equel
const equel = document.querySelector('.equel');
const getResult = () => {
  let acuation = eval(
    result.textContent + calculate.textContent + screen.textContent
  );
  result.textContent = acuation;
  screen.textContent = '';
  calculate.textContent = '';
};
equel.addEventListener('click', getResult);

// minus plus divide times -+/*

const regex = /^\+|^\-|^\*|^\//;

const actionBtn = document.querySelectorAll('.actionBtnSide');
const actionsArr = ['/', '*', '-', '+'];
const actions = Array.from(actionBtn);
actions.map((action, num) => {
  const addActionToScreen = () => {
    if (screen.textContent != '' && screen.textContent.match(regex) == null) {
      calculate.textContent =
        calculate.textContent + screen.textContent + actionsArr[num];
      screen.textContent = '';
    }
    if (result.textContent != '' && screen.textContent === '') {
      screen.textContent = actionsArr[num];
    }
  };

  action.addEventListener('click', addActionToScreen);
});

// delete last Num
const deleteLastNum = document.querySelector('.delete');
const deleteLast = () => {
  if (screen.textContent == '') {
    calculate.textContent = calculate.textContent.slice(0, -1);
  }
  if (calculate.textContent == '' && screen.textContent == '') {
    result.textContent = result.textContent.slice(0, -1);
  } else {
    screen.textContent = screen.textContent.slice(0, -1);
  }
};
deleteLastNum.addEventListener('click', deleteLast);
// c
const clear = document.querySelector('.clear-final');
const clearAll = () => {
  screen.textContent = '';
  calculate.textContent = '';
  result.textContent = '';
};
clear.addEventListener('click', clearAll);
// ce
const clearScreen = document.querySelector('.clear-screen');
const clearLowerScreen = () => {
  screen.textContent = '';
};
clearScreen.addEventListener('click', clearLowerScreen);
// plusminus +-
const plusMinus = document.querySelector('.plusMinus');
const flipNum = () => {
  console.log(screen.textContent[0]);
  if (screen.textContent != '') {
    if (screen.textContent[0] == '-') {
      screen.textContent = screen.textContent.slice(1);
    } else {
      screen.textContent = '-' + screen.textContent;
    }
  }
};
plusMinus.addEventListener('click', flipNum);
