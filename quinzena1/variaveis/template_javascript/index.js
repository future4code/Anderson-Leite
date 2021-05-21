/*

####### Exercícios de interpretação de código #######

####### Exercício 1 #######

let a = 10                      Declara o valor da variável a como 10
let b = 10                      Declara o valor da variável b como 10

console.log(b)                  Imprime a variável b no console

b = 5                           Altera o valor da variável b para 5
console.log(a, b)               Imprime as variáveis a e b no console



####### Exercício 2 #######

let a = 10                      Declara o valor da variável a como 10
let b = 20                      Declara o valor da variável b como 20
let c                           Declara uma variável c sem atribuir valor
c = a                           Altera o valor da variável c para o mesmo valor da variável a
b = c                           Altera o valor da variável b para o mesmo valor da variável c
a = b                           Altera o valor da variável a para o mesmo valor da variável b

console.log(a, b, c)            Imprime as variáveis a, b e c no console



####### Exercício 3 #######

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

O programa pergunta ao usuário quantas horas ele trabalha por dia e quanto ele recebe por dia
Após o usuário inserir cada uma das informações, o programa divide o que o usuário recebe por dia pelo número de horas que ele trabalha por dia e mostra quanto ele recebe por hora
Um nome melhor para a variável p seria horasPorDia
Um nome melhor para a variável t seria recebePorDia
Dessa forma, o programa ficaria da seguinte maneira:

let horasPorDia = prompt("Quantas horas você trabalha por dia?")
let recebePorDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)



####### Exercícios de escrita de código #######

####### Exercício 1 #######                    */ 

let nome
let idade
console.log(typeof nome)            // A variável foi declarada, mas nenhum valor foi atribuido a ela. Isso justifica o tipo undefined. 
console.log(typeof idade)           // A variável foi declarada, mas nenhum valor foi atribuido a ela. Isso justifica o tipo undefined.

nome = prompt("Qual seu nome?")
idade = prompt("Qual sua idade?")
console.log(typeof nome)            // O tipo da variável mudou para string. Isso ocorreu porque um valor foi atribuido a ela via prompt.
console.log(typeof Number(idade))   // O tipo da variável mudou para string. Isso ocorreu porque um valor foi atribuido a ela via prompt. Utilizei o método de conversão String para Número para deixar a variável com o tipo certo.

console.log("Olá,",nome,", você tem",idade,"anos.")



// ####### Exercício 2 #######

let r1
let r2
let r3

r1 = prompt("Você está usando uma roupa azul hoje? Sim ou Não?")
r2 = prompt("Você gosta de chocolate? Sim ou Não?")
r3 = prompt("Você é torcedor ou torcedora do Sport Club Internacional? Sim ou Não?")

console.log("Você está usando uma roupa azul hoje? -", r1)
console.log("Você gosta de chocolate? -", r2)
console.log("Você é torcedor ou torcedora do Sport Club Internacional? -", r3)



// ####### Exercício 3 #######

let a
let b
let c

a = prompt("Insira um valor para A.")
c = a
b = prompt("Insira um valor para B.")
console.log("Os valores inseridos foram A =",a,"e B =",b,".")
a = b
b = c

console.log("Os valores de A e B inseridos inicialmente serão invertidos.")
console.log("O novo valor de A é", a)
console.log("O novo valor de B é", b)



// ####### DESAFIO #######

let n1 = Number(prompt("Digite o primeiro número."))
let n2 = Number(prompt("Digite o segundo número."))
let x=n1+n2
let y=n1*n2

console.log("O número",n1,"somado ao número",n2,"é igual a",x)
console.log("O número",n1,"multiplicado pelo número",n2,"é igual a",y)