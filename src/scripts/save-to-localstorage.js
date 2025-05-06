import { gameArr } from "./choose-prompts";
import { pastPrompts } from "./load-prompt";

function saveToLocalstorage() {
  const gameArrJson = JSON.stringify(gameArr);
  const pastArrjson = JSON.stringify(pastPrompts);
  localStorage.setItem('gameArr', gameArrJson);
  localStorage.setItem('pastArr', pastArrjson);
}

export { saveToLocalstorage }