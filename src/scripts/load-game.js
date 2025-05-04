import { addBtnEventListener, addSwtichEventListener } from "./eventlistener";

function loadGame() {
  const mainElem = document.querySelector('.main');

  mainElem.innerHTML = `
    <div class="switch not-sel most-likely"><h2>who's most likely to</h2></div>
    <div class="switch not-sel drink-if"><h2>drink if</h2></div>
    <div class="switch not-sel tasks"><h2>tasks</h2></div>
    <button class="start-btn">start game</button>
  `;

  addSwtichEventListener();
  addBtnEventListener();
}

export { loadGame }