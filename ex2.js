//MAP
const usuarios = [
  { nome: "Nayara", idade: 17, empresa: "Rocketseat" },
  { nome: "Mariana", idade: 26, empresa: "Facebook" },
  { nome: "Guilherme", idade: 18, empresa: "Rocketseat" }
];

const idadesArray = usuarios.map(function (usuario) {
  return usuario.idade;
});

console.log("IDADES => ", idadesArray);

//FILTER
const filterArray = usuarios.filter(function (item) {
  return item.empresa === 'Rocketseat' && item.idade >= 18;
});

console.log("EMPRESA ROCKETSEAT => ", filterArray);

//FIND
const findArray = usuarios.find(function (item) {
  return item.emprego === 'Google';
});

console.log("EMPRESA GOOGLE => ", findArray);

//MULTIPLAS OP
const mUsuarios = usuarios.map(function (usuario) {
  usuario.idade = usuario.idade * 2;
  return usuario;
});

const fUsuarios = mUsuarios.filter(function (usuario) {
  return usuario.idade <= 50;
});


console.log("IDADES ATÉ 50 => ", mUsuarios, fUsuarios);
