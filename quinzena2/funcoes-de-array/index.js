/*####### Exercícios de interpretação de código #######

####### Exercício 1 #######

a) Serão impressos cada um dos objetos do array, seus índices e ao final de cada linha, o array inteiro.

####### Exercício 2 #######

a) Será impresso um array somente com os nomes dos usuários.

####### Exercício 3 #######

a) Será impresso o array com todos os usuários, menos a Chijo.

*/

//####### Exercícios de escrita de código #######

//####### Exercício 1 #######

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]

// a)

const nomeDoguinhos = pets.map((inputItem) => {
    return inputItem.nome
})

console.log(nomeDoguinhos)

// b)

const hotDogs = pets.filter((inputItem) => {
    return inputItem.raca === "Salsicha"
})

console.log(hotDogs)

// c)

const poodles = pets.filter((inputItem) => {
    return inputItem.raca === "Poodle"
})

const descontoPoodle = poodles.map((inputItem) => {
    let mensagem = "Você ganhou um cupom de desconto de 10% para tosar o/a "+ inputItem.nome +"!"
    return mensagem
})

console.log(descontoPoodle)

//####### Exercício 2 #######

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

// a) 

const arrayNomes = produtos.map((inputItem) => {
    return inputItem.nome
})

console.log(arrayNomes)

// b) 

const arrayDesconto = produtos.map((input) => {
    return {nome: input.nome, preco: (0.95 * input.preco).toFixed(2)} })

console.log(arrayDesconto)

// c) 

const arrayBebidas = produtos.filter((inputItem) => {
    return inputItem.categoria === "Bebidas"
})

console.log(arrayBebidas)

// d)

const arrayYpe = produtos.filter((inputItem) => {
    ype = inputItem.nome.includes("Ypê")
    return ype
})

console.log(arrayYpe)

// e)

const comprarYpe = arrayYpe.map((inputItem) => {
    let mensagem = `Compre ${inputItem.nome} por R$${inputItem.preco.toFixed(2)}.`
    return mensagem
})

console.log(comprarYpe)