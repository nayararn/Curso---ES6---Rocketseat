//4.1
const empresa = {
    nome: 'Seno',
    endereco: {
        cidade: 'São Paulo',
        estado: 'SP',
    }
};

const {
    nome,
    endereco: { cidade, estado }
} = empresa;


console.log(nome); // Seno
console.log(cidade); // São Paulo
console.log(estado); // SP

//4.2
function mostraInfo(usuario) {
    return `${usuario.nome} tem ${usuario.idade} anos.`;
   }
   mostraInfo({ nome: 'Nayara', idade: 21 })

   const {
       nome,
       idade,
   } = usuario
   
   console.log(nome);
   console.log(idade);


  