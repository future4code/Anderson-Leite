/* #######   EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO   #######

#######   EXERCÍCIO 1   #######



#######   EXERCÍCIO 2   #######

Entrada do usuário: "Subi num ônibus em Marrocos"

Valor impresso no console: "SUBI NUM ÔNIBUS EM MIRROCOS"

*/

// #######   EXERCÍCIOS DE ESCRITA DE CÓDIGO   #######

// #######   EXERCÍCIO 1   #######

const nome = prompt("Qual o seu nome?")
const email = prompt("Qual o seu e-mail?")
console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`)

// #######   EXERCÍCIO 2   #######

let comidas = ["pizza", "hamburger", "chocolate", "lasanha", "macarronada"]
console.log(comidas)
comidas = String(comidas)
comidas = comidas.replaceAll(",","\n")
console.log("Essas são as minhas comidas preferidas: \n"+comidas)
const comidaPref = prompt("Qual sua comida preferida?")
console.log("Nova lista: \n"+comidas.replaceAll("hamburger",comidaPref))

// #######   EXERCÍCIO 3   #######

let listaDeTarefas = []
const tarefa1 = prompt("Digite a sua primeira tarefa.")
const tarefa2 = prompt("Digite a sua segunda tarefa.")
const tarefa3 = prompt("Digite a sua terceira tarefa.")
listaDeTarefas.push(tarefa1, tarefa2, tarefa3)
console.log(listaDeTarefas)
const indice = prompt("Digite o índice de uma tarefa que você já realizou: 0, 1 ou 2.")
listaDeTarefas.splice(indice, 1)
console.log(listaDeTarefas)