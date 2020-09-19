const estatesListBR = [
  'Acre',
  'Alagoas',
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espírito Santo',
  'Goiás',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraima',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins'
];

const button = document.getElementById('button');
const eraser = document.getElementById('clear');

eraser.addEventListener('click', function () {
  let div = document.getElementById('info-compilation');
  div.parentNode.removeChild(div);
});

button.addEventListener('submit', function (event) {
  event.preventDefault();
  let page = document.getElementById('body');
  let capture = document.getElementById('name').value + '<br>';
  capture += document.getElementById('e-mail').value + '<br>';
  capture += document.getElementById('cpf').value + '<br>';
  capture += document.getElementById('address').value + '<br>';
  capture += document.getElementById('city').value + '<br>';
  capture += document.getElementById('estate').value + '<br>';
  capture += document.getElementById('house').value + '<br>';
  capture += document.getElementById('apartment').value + '<br>';
  capture += document.getElementById('summary').value + '<br>';
  capture += document.getElementById('position').value + '<br>';
  capture += document.getElementById('description').value + '<br>';
  capture += document.getElementById('datepicker').value + '<br>';
  let div = document.createElement('div');
  div.id = 'info-compilation';
  div.innerHTML = capture;
  page.appendChild(div);
});

for (let index = 0; index < estatesListBR.length; index += 1) {
  let list = document.getElementById('estate');
  let item = document.createElement('option');
  item.innerHTML = estatesListBR[index];
  list.appendChild(item);
};
