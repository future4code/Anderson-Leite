// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  let altura = Number(prompt("Digite a altura do retângulo em metros."))
  let largura = Number(prompt("Digite a largura do retângulo em metros."))

  console.log(altura * largura)
}

// Exercício 2
function imprimeIdade() {
  let ano = Number(prompt("Digite o ano atual."))
  let nascimento = Number(prompt("Digite o ano de seu nascimento."))

  console.log(ano - nascimento)
}

// Exercício 3
function calculaIMC() {
  let peso = Number(prompt("Digite o seu peso em Kg."))
  let altura = Number(prompt("Digite a sua altura em metros."))
  let alturaAoQuadrado = altura * altura

  console.log(peso / alturaAoQuadrado)
}

// Exercício 4
function imprimeInformacoesUsuario() {
  let nome = prompt("Digite seu nome.")
  let idade = Number(prompt("Digite a sua idade."))
  let email = prompt("Digite o seu e-mail.")

  console.log("Meu nome é "+nome+", tenho "+idade+" anos, e o meu email é "+email+".")
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // TERMINAR
}

// Exercício 6
function retornaStringEmMaiuscula() {
  let palavra = prompt("Escreva uma palavra que contenha letras minúsculas.")

  console.log(palavra.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  let custo = Number(prompt("Digite o custo total do espetáculo."))
  let ingresso = Number(prompt("Digite o preço de cada ingresso."))

  console.log(custo/ingresso)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  let string1 = prompt("Digite uma palavra.")
  let string2 = prompt("Digite outra palavra.")
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
}