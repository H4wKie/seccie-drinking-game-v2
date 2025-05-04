import { promptDrinkIf, promptMostLikely, promptTask } from "../scripts/back/prompts";

let gameArr = []

function choosePrompt(arr) {
  gameArr = [];
  const allArr = [promptMostLikely, promptDrinkIf, promptTask];

  if(arr.includes(true)){
    arr.forEach((element, index) => {
      element ? gameArr = gameArr.concat(allArr[index]) : '';
    });
    return gameArr;
  }else {
    return false;
  }
}

export { gameArr, choosePrompt };