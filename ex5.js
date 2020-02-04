//5.1
const arr = [1, 2, 3, 4, 5, 6]
const [x,...y] = arr;

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

function soma(a){
    return a.reduce((acc, x) =>  acc + x, 0)
}

console.log(soma(arr));

//5.2
const usuario = {
    nome: 'Nayara',
    idade: 21,
    endereco: {
    cidade: 'São Paulo',
    uf: 'SP',
    pais: 'Brasil',
    }
};

const usuario2 = { ...usuario, nome: 'Nayarao'};
console.log(usuario2);

const usuario3 = { ...usuario, cidade: 'Lontras'};
console.log(usuario3);