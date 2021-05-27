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
  const palavra1 = prompt("Digite uma palavra.")
  const palavra2 = prompt("Digite outra palavra.")
  const resultado = palavra1 > palavra2

  console.log(resultado)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  let string1 = prompt("Digite uma palavra.")
  let string2 = prompt("Digite outra palavra.")
  let resultado = string1 !== string2

  console.log(resultado)
}

// Exercício 10
function checaRenovacaoRG() {
  const anoAtual = Number(prompt("Digite o ano atual."))
  const anoNascimento = Number(prompt("Digite o ano de seu nascimento."))
  const anoCarteira = Number(prompt("Digite o ano em que sua Carteira de Identidade foi emitida."))

  const ano = anoAtual - anoNascimento
  const renov = anoAtual - anoCarteira
    
  const rg = ((ano <= 20) && (renov >= 5)) || ((ano > 20) && (ano <= 50) && (renov >= 10)) || ((ano > 50) && (renov >= 15))
  console.log(rg)
}

// Exercício 11
function checaAnoBissexto() {
  let ano = Number(prompt("Digite um ano."))
  bissexto = ((ano % 400) === 0) || ((ano % 4) === 0) && ((ano % 100) !== 0)
  console.log(bissexto)
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  let idade = (prompt("Você tem mais de 18 anos?"))
  let ensino = (prompt("Você possui ensino médio completo?"))
  let dispon = (prompt("Você possui disponibilidade exclusiva durante os horários do curso?"))

  positivo = (idade === 'sim') && (ensino === idade) && (dispon === ensino)
  console.log(positivo)
}
