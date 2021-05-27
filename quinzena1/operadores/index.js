/* ####### Exercícios de interpretação de código #######

####### EXERCÍCIO 1 #######

Primeiro console.log: a.  false
Segundo console.log: b.  false
Terceiro console.log: c.  true
Quarto console.log: d.  boolean

####### EXERCÍCIO 2 #######

O problema é que o tipo das variáveis primeiroNumero e segundoNumero não foi definido como Number.
Será impresso no console a concatenação dos dois números, e não a soma deles, pois estão tipificados como string.

####### EXERCÍCIO 3 #######

A solução é definir as variáveis do prompt como Number.

Ex.:
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

*/

// ####### Exercícios de escrita de código #######

// ####### EXERCÍCIO 1 #######

let idadeUsuario = Number(prompt("Qual a sua idade?"))
let idadeAmigo = Number(prompt("Qual a idade do(a) seu(sua) melhor amigo(a)?"))

const resultado = idadeUsuario > idadeAmigo
const difIdade = idadeUsuario - idadeAmigo

console.log("Sua idade é maior do que a do(a) seu(sua) melhor amigo(a)?", resultado)
console.log("A diferença de idade entre vocês é:", difIdade)

// ####### EXERCÍCIO 2 #######

let numero = Number(prompt("Digite um número par."))
resto = numero % 2

console.log(resto)
// Quando o número inserido é par, o resultado é sempre 0.
// Quando o número inserido é ímpar, o resultado é sempre 1.

// ####### EXERCÍCIO 3 #######

let anos = Number(prompt("Quantos anos você tem?"))

const meses = anos * 12
const dias = anos * 365
const horas = anos * 8760

console.log("Sua idade em meses é:", meses,"meses.")
console.log("Sua idade em dias é:", dias,"dias.")
console.log("Sua idade em horas é:", horas,"horas.")

// ####### EXERCÍCIO 4 #######

const numero1 = Number(prompt("Digite um número."))
const numero2 = Number(prompt("Digite outro número."))
const modulo1 = numero1 % numero2
const modulo2 = numero2 % numero1

let saida = numero1 > numero2
console.log("O primeiro número é maior que o segundo?", saida)

saida = numero1 === numero2
console.log("O primeiro número é igual ao segundo?", saida)

saida = modulo1 === 0
console.log("O primeiro número é divisível pelo segundo?", saida)

saida = modulo2 === 0
console.log("O segundo número é divisível pelo primeiro?", saida)



// ####### DESAFIOS #######

// ####### EXERCÍCIO 1 #######

let fahrParaKelv = (77 - 32) * (5/9) + 273.15
console.log("77°F é igual a "+fahrParaKelv+"°K.")

let celsParaFahr = (80) * (9/5) + 32
console.log("80°C é igual a "+celsParaFahr+"°F.")

let celsParaKelv = 30 + 273.15
let celsParaFahr2 = (30) * (9/5) + 32
console.log("30°C é igual a "+celsParaKelv+"°K. e "+celsParaFahr2+"°F.")

celsParaFahr2 = Number(prompt("Digite uma temperatura em Celsius."))
celsParaKelv = celsParaFahr2 + 273.15
celsParaFahr = celsParaFahr2 * (9/5) + 32
console.log(celsParaFahr2+"°C é igual a "+celsParaKelv+"°K. e "+celsParaFahr+"°F.")

// ####### EXERCÍCIO 2 #######

let qwhPreco = 0.05
let qwhConsumo = 280
let valor = qwhPreco * qwhConsumo
console.log("O valor a ser pago por uma residência que consome 280 quilowatt-hora é: R$", valor)
console.log("O valor a ser pago após aplicarmos 15% de desconto é: R$", valor - ((15*valor)/100))

// ####### EXERCÍCIO 3 #######

let libraParaKG = 0.453592
console.log("20 lb equivalem a "+libraParaKG * 20+" Kg.")
let ozParaKG = 0.02835
console.log("10.5 oz equivalem a "+ozParaKG * 10.5+" Kg.")
let milhaParaMetro = 1609.34
console.log("100 milhas equivalem a "+milhaParaMetro * 100+" metros.")
let pesParaMetro = 0.3048
console.log("50 pés equivalem a "+pesParaMetro * 50+" metros.")
let galaoParaLitro = 3.78541
console.log("103.56 galões equivalem a "+galaoParaLitro * 103.56+" litros.")
let xicaraParaLitro = 0.284131
console.log("450 xícaras equivalem a "+xicaraParaLitro * 450+" litros.")

libraParaKG = Number(prompt("Digite o valor em libras."))
console.log(libraParaKG+" lb é equivalente a "+libraParaKG * 0.453592+" Kg.")