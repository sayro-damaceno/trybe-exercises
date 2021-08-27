const buttonClick = document.getElementById('count-btn');

buttonClick.addEventListener('click', () => {
  const countText = document.getElementById('count');
  const countInt = Number(countText.innerText);
  countText.innerText = countInt + 1;
})
