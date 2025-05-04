function selGameElem() {
  const gameElem = document.querySelectorAll('.switch');
  let gameCompArr = []

  gameElem.forEach(elem => {
    elem.classList.contains('not-sel') ? gameCompArr.push(false) : gameCompArr.push(true);
  });

  return gameCompArr;
}

export { selGameElem };