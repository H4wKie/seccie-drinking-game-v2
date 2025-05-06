import { continuePastEventListener, startNewEventListener } from "./eventlistener";
import { getFromLocalStorage } from "./get-localstorage";

function loadPastGame() {
  const mainElem = document.querySelector('.main');
  const getGameArr = getFromLocalStorage('gameArr');
  const getPastArr = getFromLocalStorage('pastArr');

  mainElem.innerHTML = `
    <div class="past-game">
      <button class="standard-btn start-new">Start New Game</button>
      <button class="standard-btn continue-past">Continue Past Game<br><span class="prompts-left">Prompts left: ${getGameArr.length - getPastArr.length}</span></button>
    </div>
  `;

  startNewEventListener();
  continuePastEventListener();
}

export { loadPastGame }