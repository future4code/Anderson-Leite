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
  const altura = Number(prompt("Digite a altura do retângulo em metros."))
  const largura = Number(prompt("Digite a largura do retângulo em metros."))

  console.log(altura * largura)
}

// Exercício 2
function imprimeIdade() {
  const anoAtual = Number(prompt("Digite o ano atual."))
  const anoNascimento = Number(prompt("Digite o ano de seu nascimento."))

  console.log(anoAtual - anoNascimento)
}

// Exercício 3
function calculaIMC() {
  const peso = Number(prompt("Digite o seu peso em Kg."))
  const altura = Number(prompt("Digite a sua altura em metros."))
  
  console.log(peso / (altura * altura))
}

// Exercício 4
function imprimeInformacoesUsuario() {
  const nome = prompt("Digite seu nome.")
  const idade = Number(prompt("Digite a sua idade."))
  const email = prompt("Digite o seu e-mail.")

  console.log("Meu nome é "+nome+", tenho "+idade+" anos, e o meu email é "+email+".")
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  let cores = []
  const cor1 = prompt("Digite sua primeira cor favorita.")
  const cor2 = prompt("Digite sua segunda cor favorita.")
  const cor3 = prompt("Digite sua terceira cor favorita.")
  cores.push(cor1, cor2, cor3)
  console.log(cores)
}

// Exercício 6
function retornaStringEmMaiuscula() {
  const palavra = prompt("Escreva uma palavra que contenha letras minúsculas.")

  console.log(palavra.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  const custo = Number(prompt("Digite o custo total do espetáculo."))
  const ingresso = Number(prompt("Digite o preço de cada ingresso."))

  console.log(custo/ingresso)
}

// Exercício 8

function checaStringsMesmoTamanho() {
  const palavra1 = prompt("Digite uma palavra.")
  const palavra2 = prompt("Digite outra palavra.")
  
  console.log(palavra1 >= palavra2)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  const string1 = prompt("Digite uma palavra.")
  const string2 = prompt("Digite outra palavra.")
  
  console.log(string1.toUpperCase() === string2.toUpperCase())
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
  const ano = Number(prompt("Digite um ano."))
  
  console.log(((ano % 400) === 0) || ((ano % 4) === 0) && ((ano % 100) !== 0))
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  const idade = (prompt("Você tem mais de 18 anos?"))
  const ensino = (prompt("Você possui ensino médio completo?"))
  const dispon = (prompt("Você possui disponibilidade exclusiva durante os horários do curso?"))

  console.log((idade === 'sim') && (ensino === idade) && (dispon === ensino))
}
