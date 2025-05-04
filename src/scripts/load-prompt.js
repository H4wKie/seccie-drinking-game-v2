import { displayPrompt } from "./display-prompt";
import { genNr } from "./gen-nr";
import { loadGame } from "./load-game";
import { removeMainEventListener } from "./eventlistener";


let pastPrompts = []

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
    removeMainEventListener();
    loadGame();
  }
}

export { loadPrompt }