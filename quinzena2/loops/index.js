/*####### EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

####### EXERCÍCIO 1 #######

let valor = 0
for(let i = 0; i < 5; i++) { // O código está incrementando 1 ao "i" a cada loop.
  valor += i // Aqui o valor que está em "i" no momento do loop é incrementado à variável valor.
}
console.log(valor) // 10

####### EXERCÍCIO 2 #######

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

// a) Serão impressos todos os números maiores que 18.
// b) 

//####### EXERCÍCIO 3 #######

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

Serão impressas 4 linhas. Cada uma delas com o número de asteriscos referente ao número da linha.
Ex.: linha 1 --> 1*, linha 2 --> 2*.

//####### EXERCÍCIOS DE ESCRITA DE CÓDIGO #######

//####### EXERCÍCIO 1 #######

let numeroDeBichos = Number(prompt("Quantos bichinhos de estimação você tem?"))
let arrayDeBichos = []
let nomeDosBichos = ""

if (numeroDeBichos <= 0) {
    console.log("Que pena! Você pode adotar um pet!")
} else if (numeroDeBichos === 1) {
    nomeDosBichos = prompt("Digite o nome do seu bichinho.")
    arrayDeBichos.push(nomeDosBichos)
    console.log(`O nome do seu bichinho é: ${arrayDeBichos}.`)
} else {
    for (i = 0; i < numeroDeBichos; i++) {
        nomeDosBichos = prompt(`Digite o nome do seu ${i+1}º bichinho.`)
        arrayDeBichos.push(nomeDosBichos)
    }
    console.log(`O nome dos seus bichinhos são: ${arrayDeBichos}.`)
}
*/
//####### EXERCÍCIO 2 #######

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let valorMaximo = 0
let valorMinimo = 200

function imprimirArrayOriginal(parametro1) {
    for (let i = 0; i < parametro1.length; i++) {
    let array1 = parametro1[i]
    console.log(array1)
    }
}

function imprimirArrayOriginalDividido(parametro2) {
    for (let i = 0; i < parametro2.length; i++) {
    let array2 = parametro2[i] / 10
    console.log(array2)
    }
}

function novoArray(parametro3) {
    let pares = []
    for (let i = 0; i < parametro3.length; i++) {
        if (parametro3[i] % 2 === 0) {
        pares.push(parametro3[i])
        }
    }
    console.log(pares)
}    

function arrayComStrings(parametro4) {
    for (let i = 0; i < parametro4.length; i++) {
    console.log(`O elemento do índex ${i} é ${parametro4[i]}.`)
    }
}

function maiorMenorNumerosArrayOriginal(valorMaxMin) {
    for (let num of valorMaxMin) {
        if (num > valorMaximo) {
            valorMaximo = num
        }
    }
    for (let num of valorMaxMin) {
        if(num < valorMinimo) {
            valorMinimo = num
        }
    }
    console.log(`O maior número é ${valorMaximo} e o menor é ${valorMinimo}.`)
}

imprimirArrayOriginal(arrayOriginal)
imprimirArrayOriginalDividido(arrayOriginal)
novoArray(arrayOriginal)
arrayComStrings(arrayOriginal)
maiorMenorNumerosArrayOriginal(arrayOriginal)