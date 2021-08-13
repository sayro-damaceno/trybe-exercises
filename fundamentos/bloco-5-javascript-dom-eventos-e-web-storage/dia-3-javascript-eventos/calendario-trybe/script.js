function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Exercício 1:
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let days = document.getElementById('days');

for (let index = 0; index < dezDaysList.length; index += 1) {
  let li = document.createElement('li');
  li.innerText = dezDaysList[index];
  li.className = 'day'

  if (dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31) {
      li.classList.add('holiday')
  }
  if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18 || dezDaysList[index] === 25) {
      li.classList.add('friday')
  }  
  days.appendChild(li);
}

// Exercício 2:
let buttons = document.getElementsByClassName('buttons-container')[0];

function createButtons(string) {
  let button = document.createElement('button');
  button.innerText = string;
  buttons.appendChild(button);
}

createButtons('Feriados');

let buttonFeriado = document.getElementsByTagName('button')[0];
buttonFeriado.id = 'btn-holiday';

// Exercício 3:
let holidays = document.querySelectorAll('.holiday');

function mudarCorFeriados() {
  for (let index = 0; index < holidays.length; index += 1) {
    if (holidays[index].style.backgroundColor === 'rgb(36, 209, 224)') {
      holidays[index].style.backgroundColor = 'rgb(238,238,238)'
    } else {
      holidays[index].style.backgroundColor = 'rgb(36, 209, 224)'
    }
  } 
}

buttonFeriado.addEventListener('click', mudarCorFeriados);

// Exercício 4:
createButtons('Sexta-feira');
let buttonFriday = document.getElementsByTagName('button')[1];
buttonFriday.id = 'btn-friday'

// Exercício 5:
let fridays = document.querySelectorAll('.friday');
let day = [4, 11, 18, 25]

function mudarTextoFriday() {
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerText === 'Sextouu!') {
      fridays[index].innerText = day[index];
    } else {
      fridays[index].innerText = 'Sextouu!';
    }
  } 
}

buttonFriday.addEventListener('click', mudarTextoFriday);

// Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
let diasDoMes = document.getElementsByClassName('day');

