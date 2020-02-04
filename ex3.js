// 3.1
const arr = [1, 2, 3, 4, 5];
console.log(arr.map(item => item + 10));

// 3.2
// Dica: Utilize uma constante pra function
const mostraIdade = () => ({ idade: 21 })
console.log(mostraIdade());

// 3.3
// Dica: Utilize uma constante pra function
const mostraUsuario = () => ({ nome: 'Nayara', idade: 21 })
console.log(mostraUsuario());

// 3.4
const promise = () => {
    return new Promise((resolve, reject) => {
        return resolve()
    })
}
