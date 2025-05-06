import { displayPrompt } from "./display-prompt";
import { genNr } from "./gen-nr";
import { loadGame } from "./load-game";
import { removeMainEventListener } from "./eventlistener";
import { getFromLocalStorage } from "./get-localstorage";


let pastPrompts = getFromLocalStorage('pastArr') || [];

function loadPrompt(arr) {
  if(pastPrompts.length < arr.length) {
      let nr;
  do{
    nr = genNr(arr.length);
  }while(pastPrompts.includes(nr));
  
  pastPrompts.push(nr);

  displayPrompt(arr[nr]);
  }else {
    pastPrompts = [];
    localStorage.clear();
    removeMainEventListener();
    loadGame();
  }
}

export { loadPrompt, pastPrompts }