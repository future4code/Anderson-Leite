/* ####### EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO #######

####### EXERCÍCIO 1 #######

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2)) // Printa 10 no console
console.log(minhaFuncao(10)) // Printa 50 no console

(minhaFuncao(2) // vai fazer a multiplicação, sem printar no console
(minhaFuncao(10) // vai fazer a multiplicação, sem printar no console

####### EXERCÍCIO 2 #######

let textoDoUsuario = prompt("Insira um texto"); // pede para o usuário digitar um texto

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura") // transforma todas as letras do texto em minúsculas e verifica se a palavra "cenoura" está no texto, retornando true ou false dependendo do resultado
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta) // as saídas serão todas true, pois a palavra "cenoura" está em todas as entradas

*/

// ####### EXERCÍCIOS DE ESCRITA DE CÓDIGO #######

// ####### EXERCÍCIO 1 #######

//a)

function falarDeMim() {
    console.log("Eu sou Anderson, tenho 32 anos, moro em Pelotas e sou estudante.")
}

falarDeMim()

//b)

    const nome = prompt("Qual seu nome?")
    const idade = Number(prompt("Qual sua idade?"))
    const endereco = prompt("Qual seu endereço?")
    const profissao = prompt("Qual sua profissão?")

function infosPessoa(nome, idade, endereco, profissao) {
    const infos = `Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}.`
    return infos
}

console.log(infosPessoa(nome, idade, endereco, profissao))

// ####### EXERCÍCIO 2 #######

//a)

const numero1a = Number(prompt("Digite um número."))
const numero2a = Number(prompt("Digite outro número."))

function somarDoisNumeros(numero1a, numero2a) {
    const soma = numero1a + numero2a
    return soma
}

somarDoisNumeros()

console.log(somarDoisNumeros(numero1a, numero2a))

//b)

const numero1b = Number(prompt("Digite o primeiro número."))
const numero2b = Number(prompt("Digite o segundo número."))

function informarMaiorMenor(numero1b, numero2b) {
    const resultado = numero1b >= numero2b
    return resultado
}

console.log("O primeiro número é maior ou igual ao segundo?", informarMaiorMenor(numero1b, numero2b))

//c)

const par = Number(prompt("Digite um número."))

function parOuImpar(par) {
    const resposta = (par % 2) == 0
    return resposta
}

console.log("O número digitado é par?", parOuImpar(par))

//d)

const mensagem = prompt("Digite uma mensagem.")

function receberMensagem(mensagem) {
    const frase = mensagem.length + " " + mensagem.toUpperCase()
    return frase
}

console.log(receberMensagem(mensagem))

// ####### EXERCÍCIO 3 #######

const num1 = Number(prompt("Digite um número."))
const num2 = Number(prompt("Digite outro número."))

function somar(num1, num2) {
    const soma = num1 + num2
    return soma
}

function subtrair(num1, num2) {
    const subtracao = num1 - num2
    return subtracao
}

function multiplicar(num1, num2) {
    const multiplicacao = num1 * num2
    return multiplicacao
}

function dividir(num1, num2) {
    const divisao = num1 / num2
    return divisao
}

console.log("Números inseridos:",num1 + " e " + num2)
console.log("Soma:",somar(num1, num2))
console.log("Subtração:",subtrair(num1, num2))
console.log("Multiplicação:",multiplicar(num1, num2))
console.log("Divisão:",dividir(num1, num2))


// ####### DESAFIO #######

// ####### DESAFIO 1 #######

/*
//a)
let n1 = Number(prompt("Digite um número."))

let desafio1 = (n1) => {
    let imprime = n1
    return imprime
}

console.log(desafio1(n1))

//b)

let valor1 = Number(prompt("Digite um número."))
let valor2 = Number(prompt("Digite outro número."))

let valores = (valor1, valor2) => {
    let somaValores = valor1 + valor2
    desafio1(somaValores)
}
*/

// ####### DESAFIO 2 #######

cateto1 = Number(prompt("Digite um valor para o primeiro cateto."))
cateto2 = Number(prompt("Digite um valor para o segundo cateto."))

function pitagoras(cateto1, cateto2) {
    const hip = Math.sqrt((cateto1 * cateto1) + (cateto2 * cateto2))
    return hip
}

pitagoras()

console.log(pitagoras(cateto1, cateto2))