function loadBackground() {
  const backgroundElem = document.querySelector('.background-text');

  for(let i = 0; i < 64; i++) {
    const elem = document.createElement('h6');
    let nr = Math.round(Math.random());

    if(nr === 0) {
      elem.innerHTML = `VIP`;
    }else {
      elem.innerHTML = `SECCIE`;
    }

    backgroundElem.appendChild(elem);
  }

}

export { loadBackground }