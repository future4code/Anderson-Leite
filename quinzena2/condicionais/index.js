/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

####### EXERCÍCIO 1 #######

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

a) Explique o que o código faz. Qual o teste que ele realiza?

O código pede que o usuário digite um número e testa se o número é par ou ímpar.

b) Para que tipos de números ele imprime no console "Passou no teste"?

Será impresso "Passou no teste" quando o número for par.

c) Para que tipos de números a mensagem é "Não passou no teste"?

Será impresso "Não passou no teste" quando o número for ímpar.

####### EXERCÍCIO 2 #######

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

a) Para que serve o código acima?

Serve para informar o preço da fruta que o usuário digitar.

b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?

A mensagem será "O preço da fruta Maçã é R$ 2.25"

c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?

A mensagem será "O preço da fruta Pêra é R$ 5"

####### EXERCÍCIO 3 #######

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

a) O que a primeira linha está fazendo?

Está pedindo para o usário inserir um número e convertendo ele para número utilizando o comando Number.

b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

Se o número for 10, a mensagem será "Esse número passou no teste", pois 10 é maior que 0. Caso seja -10, não terá mensagem alguma.

c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

Haverá um erro, pois o console.log está fora do if, portanto a "mensagem" será indefinida.

*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

//####### EXERCÍCIO 1 #######

const idade = Number(prompt("Qual a sua idade?"))

if(idade < 18) {
    console.log("Você não pode dirigir.")
} else {
    console.log("Você pode dirigir!")
}

//####### EXERCÍCIO 2 #######

const turno1 = (prompt("Em qual turno você estuda? Digite M (Matutino), V (Vespertino) ou N (Noturno)."))

if (turno1 === "M") {
    console.log("Bom Dia!")
} else if (turno1 === "V") {
    console.log("Boa Tarde!")
} else if (turno1 === "N") {
    console.log("Boa Noite!")
}

//####### EXERCÍCIO 3 #######

const turno2 = (prompt("Em qual turno você estuda? Digite M (Matutino), V (Vespertino) ou N (Noturno)."))

switch (turno2) {
    case "M":
        console.log("Bom Dia!")
        break
    case "V":
        console.log("Boa Tarde!")
        break
    case "N":
        console.log("Boa Noite!")
        break
    default:
        console.log("O turno está incorreto ou não existe.")
        break
}

//####### EXERCÍCIO 4 #######

const generoFilme1 = (prompt("Qual o gênero do filme?"))
const precoIngresso1 = Number(prompt("Qual o preço do ingresso?"))

if (generoFilme1 === "fantasia" && precoIngresso1 < 15) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme. :(")
}

//####### DESAFIOS #######

//####### DESAFIO 1 #######

const generoFilme2 = (prompt("Qual o gênero do filme?"))
const precoIngresso2 = Number(prompt("Qual o preço do ingresso?"))

if (generoFilme2 === "fantasia" && precoIngresso2 < 15) {
    const lanchinho = prompt("Qual lanchinho você vai comprar?")
    console.log(`Bom filme!\nAproveite o seu ${lanchinho}.`)
} else {
    console.log("Escolha outro filme. :(")
}

//####### DESAFIO 2 #######

let moeda
let valorTotal
let nomeCompleto = (prompt("Digite seu nome e sobrenome?"))
let tipoDeJogo = (prompt("O jogo que você quer assistir é DO (doméstico) ou IN (internacional)?"))

while (tipoDeJogo !== "DO" && tipoDeJogo !== "IN") {
    alert("Tipo de Jogo inválido!")
    tipoDeJogo = (prompt("O jogo que você quer assistir é DO (doméstico) ou IN (internacional)?"))
}

let etapaDoJogo = (prompt("Qual etapa você quer assistir? SF (semi-final), DT (decisão de terceiro lugar) ou FI (final)?"))

while (etapaDoJogo !== "SF" && etapaDoJogo !== "DT" && etapaDoJogo !== "FI") {
    alert("Etapa inválida!")
    etapaDoJogo = (prompt("Qual etapa você quer assistir? SF (semi-final), DT (decisão de terceiro lugar) ou FI (final)?"))
}

let categoria = Number(prompt("Escolha entre as seguintes categorias: 1, 2, 3 ou 4."))

while (categoria != 1 && categoria != 2 && categoria != 3 && categoria != 4) {
    alert("Categoria inválida!")
    categoria = Number(prompt("Escolha entre as seguintes categorias: 1, 2, 3 ou 4."))
}

let qtdIngresso = Number(prompt("Quantos ingressos você quer comprar?"))

while (qtdIngresso <= 0) {
    alert("Quantidade inválida!")
    qtdIngresso = Number(prompt("Quantos ingressos você quer comprar?"))
}

if (etapaDoJogo === "DT") {
    etapaDoJogo = "Decisão de Terceiro Lugar"
        if (categoria == 1) {
        valorTotal = (qtdIngresso * 660)
        } else if (categoria == 2) {
        valorTotal = (qtdIngresso * 440)
        } else if (categoria == 3) {
        valorTotal = (qtdIngresso * 330)
        } else if (categoria == 4) {
        valorTotal = (qtdIngresso * 170)
        }
}

else if (etapaDoJogo === "SF") {
    etapaDoJogo = "Semi-Final"    
        if (categoria == 1) {
        valorTotal = (qtdIngresso * 1320)
        } else if (categoria == 2) {
        valorTotal = (qtdIngresso * 880)
        } else if (categoria == 3) {
        valorTotal = (qtdIngresso * 550)
        } else if (categoria == 4) {
        valorTotal = (qtdIngresso * 220)
        }
}

else {
    etapaDoJogo = "Final"
        if (categoria == 1) {
        valorTotal = (qtdIngresso * 1980)
        } else if (categoria == 2) {
        valorTotal = (qtdIngresso * 1320)
        } else if (categoria == 3) {
        valorTotal = (qtdIngresso * 880)
        } else if (categoria == 4) {
        valorTotal = (qtdIngresso * 330)
        }
}

if (tipoDeJogo === "IN") {
    tipoDeJogo = "Internacional"
    valorTotal = valorTotal / 4.10
    moeda = "U$"
} else {
    tipoDeJogo = "Nacional"
    moeda = "R$"
}

console.log(`- - - Dados da Compra - - -\n
Nome do Cliente: ${nomeCompleto}\n
Tipo de Jogo: ${tipoDeJogo}\n
Etapa do Jogo: ${etapaDoJogo}\n
Categoria: ${categoria}\n
Quantidade de Ingressos: ${qtdIngresso} ingressos.\n
- - - Valores - - -\n
Valor do Ingresso: ${moeda} ${valorTotal / qtdIngresso}\n
Valor Total: ${moeda} ${valorTotal}`)