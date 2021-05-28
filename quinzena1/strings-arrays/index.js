/* #######   EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO   #######

#######   EXERCÍCIO 1   #######

let array
console.log('a. ', array) // a. undefined

array = null
console.log('b. ', array) // b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // c. 11 

let i = 0
console.log('d. ', array[i]) // d. 3

array[i+1] = 19
console.log('e. ', array) // e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor) // f. 9

#######   EXERCÍCIO 2   #######

Entrada do usuário: Subi num ônibus em Marrocos

Valor impresso no console: SUBI NUM ÔNIBUS EM MIRROCOS 27

*/

// #######   EXERCÍCIOS DE ESCRITA DE CÓDIGO   #######

// #######   EXERCÍCIO 1   #######

const nome = prompt("Qual o seu nome?")
const email = prompt("Qual o seu e-mail?")
console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`)

// #######   EXERCÍCIO 2   #######

let comidas = ["pizza", "hamburger", "chocolate", "lasanha", "macarronada"]
console.log(comidas)
console.log("Essas são as minhas comidas preferidas:")
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])
let comidaPref = prompt("Qual sua comida preferida?")
comidas[1] = comidaPref
console.log("Nova lista:")
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])

// #######   EXERCÍCIO 3   #######

let listaDeTarefas = []
const tarefa1 = prompt("Digite a sua primeira tarefa.")
const tarefa2 = prompt("Digite a sua segunda tarefa.")
const tarefa3 = prompt("Digite a sua terceira tarefa.")
listaDeTarefas.push(tarefa1, tarefa2, tarefa3)
console.log(listaDeTarefas)
const indice = prompt("Digite o índice de uma tarefa que você já realizou: 0 = ("+tarefa1+"), 1 = ("+tarefa2+"), 2 = ("+tarefa3+").")
listaDeTarefas.splice(indice, 1)
console.log(listaDeTarefas)

// #######   DESAFIOS   #######

// #######   DESAFIO 1   #######

let frase = prompt("Digite uma frase.")
frase = frase.split(" ")
console.log(frase)

// #######   DESAFIO 2   #######

const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
console.log(frutas)
console.log("O índice da palavra Abacaxi é: "+ frutas.indexOf("Abacaxi", [0]) +"\nO tamanho do array é: "+ frutas.length +".")