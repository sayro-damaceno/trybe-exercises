document.querySelector('#elementoOndeVoceEsta'). parentNode.style.color = 'red'

document.querySelector('#primeiroFilhoDoFilho').innerText = 'Primeiro filho do filho'

document.querySelector('#pai').firstElementChild

document.querySelector('#elementoOndeVoceEsta').previousElementSibling

document.querySelector('#elementoOndeVoceEsta').nextSibling

document.querySelector('#elementoOndeVoceEsta').nextElementSibling

document.querySelector('#pai').childNodes[5]

let criaSection = document.createElement('section');
criaSection.innerText = 'irmão';
criaSection.className = 'irmao'
document.querySelector('#pai').appendChild(criaSection);

let criaFilho = document.createElement('section');
criaFilho.innerText = 'filho element';
criaFilho.className = 'filho element';
document.querySelector('#elementoOndeVoceEsta ').appendChild(criaFilho);

let pai = document.querySelector('#pai');

let terceiroFilho = document.querySelector('#terceiroFilho');
pai.removeChild(terceiroFilho);

let quartoFilho = document.querySelector('#quartoEUltimoFilho');
pai.removeChild(quartoFilho);