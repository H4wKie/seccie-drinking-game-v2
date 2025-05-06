import "./styles/main.scss";
import "./styles/loadgame.scss";
import "./styles/responsive.scss";
import "./styles/pastgame.scss";

import { loadGame } from "./scripts/load-game";
import { loadHeader } from "./scripts/load-header";
import { loadBackground } from "./scripts/load-background";
import { getFromLocalStorage } from "./scripts/get-localstorage";
import { loadPastGame } from "./scripts/load-past-game";

loadHeader();
loadBackground();

if(getFromLocalStorage('gameArr') && getFromLocalStorage('gameArr').length - getFromLocalStorage('pastArr').length) {
  loadPastGame();
}else{
  loadGame();
}