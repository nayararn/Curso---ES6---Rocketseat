//AULA SOBRE REST/SPREAD
//REST
const usuario = {
    nome: "Nayara",
    idade: "21",
    empresa: "Seno"
};

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);

//OU

const arr = [1, 2, 3, 4, 5, 6];

const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

//SPREAD
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

//OU

const usuario1 = {
    nome: "Nayara",
    idade: 21,
    empresa: "Seno"
};

const usuario2 = { ...usuario1, nome: "Nayarao" };

console.log(usuario2);
