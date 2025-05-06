function getFromLocalStorage(itemName) {
  const oldItem = JSON.parse(localStorage.getItem(itemName));

  return oldItem;
}

export { getFromLocalStorage }