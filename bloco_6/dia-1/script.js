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

for (let index = 0; index < estatesListBR.length; index += 1) {
  let list = document.getElementById('estate');
  let item = document.createElement('option');
  item.innerHTML = estatesListBR[index];
  list.appendChild(item);
};


function verifyDay(day){
  let limit = 1;
  let entry = "";
  for (let index = 0; index <= limit ; index += 1) {
  entry = entry + day.value[index];
  }
  if (entry < 1 || entry > 31) {
  alert('O dia deve ser um valor entre 01 e 31!')
}
}

function verifyMonth(month){
  let limit = 4;
  let entry = "";
  for (let index = 3; index <= limit; index += 1) {
  entry = entry + month.value[index];
  }
  if (entry < 1 || entry > 12){
    alert('O mês deve ser um valor entre 01 e 12!');
  }
}

function verifyYear(year) {
  let limit = 9;
  let entry = "";
  for (let index = 6; index <= limit; index += 1) {
  entry = entry + year.value[index];
  }
  if (entry < 0) {
    alert('O ano não pode ser um valor negativo!');
  }
}

let date = document.getElementById('date');
date.addEventListener('change', function () {
  if (date.value[2] !== "/" || date.value[5] !== "/" || date.value.length !== 10) {
    alert('Formato inválido!')
  } else {
    verifyDay(date);
    verifyYear(date);
    verifyMonth(date);
  }
});