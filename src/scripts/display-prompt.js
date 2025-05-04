function displayPrompt(prompt) {
  const mainElem = document.querySelector('.main');

  mainElem.innerHTML = `
    <h1>${prompt[0]}</h1>
    <h2>${prompt[1]}</h2>
  `;
}

export { displayPrompt };