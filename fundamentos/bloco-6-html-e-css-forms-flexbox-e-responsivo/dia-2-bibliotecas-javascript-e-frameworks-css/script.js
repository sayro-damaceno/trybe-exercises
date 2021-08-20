const estados = document.getElementById('estados');

let estadosBrasil = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO']

for (let index = 0; index < estadosBrasil.length; index += 1) {
  let option = document.createElement('option');
  option.innerText = estadosBrasil[index];
  option.value = estadosBrasil[index]
  estados.appendChild(option);
}

var picker = new Pikaday({ field: document.getElementById('datepicker') });