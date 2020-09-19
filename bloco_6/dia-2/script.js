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

button.addEventListener('click', function () {
  let date = document.getElementById('date');
  if (date.value[2] !== '/' || date.value[5] !== '/' || date.value.length !== 10) {
    alert('Formato inválido!')
  } else {
    verifyDay(date);
    verifyMonth(date);
    verifyYear(date);
  }
});

button.addEventListener('click', function (event) {
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
  capture += document.getElementById('date').value + '<br>';
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


function verifyDay(day) {
  const limit = 1;
  let entry = '';
  for (let index = 0; index <= limit; index += 1) {
    entry = entry + day.value[index];
  }
  if (entry < 1 || entry > 31) {
    alert('O dia deve ser um valor entre 01 e 31!')
  }
};

function verifyMonth(month) {
  const limit = 4;
  let entry = '';
  for (let index = 3; index <= limit; index += 1) {
    entry = entry + month.value[index];
  }
  if (entry < 1 || entry > 12) {
    alert('O mês deve ser um valor entre 01 e 12!');
  }
};

function verifyYear(year) {
  let entry = "";
  for (let index = 6; index <= year.value.length; index += 1) {
    entry = entry + year.value[index];
  }
  if (entry < 0) {
    alert('O ano não pode ser um valor negativo!');
  }
};