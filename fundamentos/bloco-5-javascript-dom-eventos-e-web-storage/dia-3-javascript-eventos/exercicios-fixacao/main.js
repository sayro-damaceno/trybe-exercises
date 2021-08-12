const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;

// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

function clickEvent1() {
  firstLi.className = 'tech'
  secondLi.classList.remove('tech');
  thirdLi.classList.remove('tech');
}

firstLi.addEventListener('click',clickEvent1);

function clickEvent2() {
  secondLi.className = 'tech'
  firstLi.classList.remove('tech');
  thirdLi.classList.remove('tech');
}

secondLi.addEventListener('click',clickEvent2);

function clickEvent3() {
  thirdLi.className = 'tech'
  firstLi.classList.remove('tech');
  secondLi.classList.remove('tech');
}

thirdLi.addEventListener('click',clickEvent3);



// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

function button() {
  let tech = document.querySelector('.tech');
  let buttonValue = document.querySelector('input').value;
  tech.innerText = buttonValue;
}

document.querySelector('input').addEventListener('keyup', button);

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?


// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

let spotrybefy = document.getElementById('my-spotrybefy');

function mudaCor() {
  spotrybefy.style.color = 'yellow'
}

spotrybefy.addEventListener('mouseover', mudaCor);

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.