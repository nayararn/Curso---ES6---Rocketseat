//AULA SOBRE DESESTRUTURAÇÃO

const usuario = {
  nome: "Nayara",
  idade: 21,
  endereco: {
    cidade: "São Paulo",
    estado: "SP"
  }
};

const {
  nome,
  idade,
  endereco: { cidade }
} = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

//OU

function mostraNome({ nome, idade }) {
  console.log(nome, idade);
}

mostraNome(usuario);
