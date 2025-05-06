import { choosePrompt } from "./choose-prompts";
import { loadPrompt } from "./load-prompt"
import { selGameElem } from "./select-game-elem";
import { gameArr } from "./choose-prompts";
import { saveToLocalstorage } from "./save-to-localstorage";
import { loadGame } from "./load-game";

const mainEvent = ()=> {
  saveToLocalstorage();
  loadPrompt(gameArr);
}

function addMainEventListner() {
  const mainElem = document.querySelector('.main');
  mainElem.addEventListener('click', mainEvent);
}

function removeMainEventListener() {
  const mainElem = document.querySelector('.main');
  mainElem.removeEventListener('click', mainEvent);
}

const switchEvent = (event)=> {
  const elemClasslist = event.currentTarget.getAttribute('class');

  if(elemClasslist.includes('not-sel')) {
    event.currentTarget.setAttribute('class' ,elemClasslist.replace('not-sel', 'sel'));
  }else {
    event.currentTarget.setAttribute('class' ,elemClasslist.replace('sel', 'not-sel'));
  }
}

function addSwtichEventListener() {
  const switchELem = document.querySelectorAll('.switch');

  switchELem.forEach(elem => {
    elem.addEventListener('click', switchEvent);
  })
}

const btnEvent = () => {
  const gameTrue = selGameElem();

  if(choosePrompt(gameTrue)) {
    addMainEventListner();
  }else {
  }
}

function addBtnEventListener() {
  const btnElem = document.querySelector('.start-btn');

  btnElem.addEventListener('click', btnEvent);
}

const startNewEvent = () => {
  localStorage.clear();
  loadGame();
}

function startNewEventListener() {
  const btnElem = document.querySelector('.start-new');

  btnElem.addEventListener('click', startNewEvent);
}

const continuePastEvent = () => {
  addMainEventListner();
}

function continuePastEventListener() {
  const btnElem = document.querySelector('.continue-past');

  btnElem.addEventListener('click', continuePastEvent);
}

export { addBtnEventListener, addMainEventListner, addSwtichEventListener, continuePastEventListener, removeMainEventListener, startNewEventListener }