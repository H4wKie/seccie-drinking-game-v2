import "./styles/main.scss";
import "./styles/loadgame.scss";
import "./styles/responsive.scss";
import "./styles/pastgame.scss";

import { loadGame } from "./scripts/load-game";
import { loadPrompt } from "./scripts/load-prompt";
import { gameArr } from "./scripts/choose-prompts";
import { addMainEventListner } from "./scripts/eventlistener";
import { loadHeader } from "./scripts/load-header";
import { loadBackground } from "./scripts/load-background";
import { getFromLocalStorage } from "./scripts/get-localstorage";
import { loadPastGame } from "./scripts/load-past-game";

loadHeader();
loadBackground();

if(getFromLocalStorage('gameArr') && getFromLocalStorage('gameArr').length - getFromLocalStorage('pastArr').length) {
  // addMainEventListner();
  // loadPrompt(gameArr);
  loadPastGame();
}else{
  loadGame();
}