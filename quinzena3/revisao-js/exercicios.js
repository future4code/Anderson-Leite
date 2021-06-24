// EXERCÍCIO 01
function inverteArray(array) {
  let novoArray = [] 
  for (let i = array.length-1; i >= 0; i--) {
    novoArray.push(array[i])
  }
  return novoArray
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let novoArray = []
  for(let i = 0; i < array.length; i++) {
    if(array[i] % 2 === 0) {
    novoArray.push(array[i]**2)
    }
  }
  return novoArray  
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let novoArray = []
  for(let i = 0; i < array.length; i++) {
    if(array[i] % 2 === 0) {
    novoArray.push(array[i])
    }
  }
  return novoArray
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorNumero = 0
    for(let i = 0; i < array.length; i++) {
      if(array[i] > maiorNumero) {
      maiorNumero = array[i]
    }
  }
  return maiorNumero
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  let qtdElementos = 0
    for(let i = 0; i <= array.length; i++) {
    qtdElementos = i
  }
  return qtdElementos  
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2 //true
  const booleano4 = !booleano3 //false
  
  const a = booleano1 && booleano2 && !booleano4
  const b = (booleano1 && booleano2) || !booleano3
  const c = (booleano2 || booleano3) && (booleano4 || booleano1)
  const d = !(booleano2 && booleano3) || !(booleano1 && booleano3)
  const e = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
  
  const respostas = [a, b, c, d, e]
  return respostas
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let arrayN = []
  for(let i = 0; i < n; i++) {
  arrayN.push(i * 2)
  }
  return arrayN  
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if(a !== b && a !== c && b !== c) {
    return 'Escaleno'
  } else if(a === b && a === c && b === c) {
    return 'Equilátero'
  } return 'Isósceles'
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  let filme = {
    maiorNumero: 0,
    maiorDivisivelPorMenor: 0,
    diferenca: 0
    }     
    
    if(num1 > num2) {
      filme.maiorNumero = num1
    } else if(num2 > num1) {
      filme.maiorNumero = num2
    } else {
      filme.maiorNumero = num1
    }

    if(filme.maiorNumero === num1) {
      filme.maiorDivisivelPorMenor = num1 % num2 === 0
    } else {
      filme.maiorDivisivelPorMenor = num2 % num1 === 0
    }

    if(filme.maiorNumero === num1) {
      filme.diferenca = num1 - num2
    } else {
      filme.diferenca = num2 - num1
    }
        
    return filme
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			if (array[j] > array[j + 1]) {
				let temp = array[j]
				array[j] = array[j + 1]
				array[j + 1] = temp
			}
		}
	}
	return [array[array.length-2], array[1]]
}

// EXERCÍCIO 11
function ordenaArray(array) {
  for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			if (array[j] > array[j + 1]) {
				let temp = array[j]
				array[j] = array[j + 1]
				array[j + 1] = temp
			}
		}
	}
	return array
}

// EXERCÍCIO 12
function filmeFavorito() {
  let filme = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }
  return filme
}

// EXERCÍCIO 13
function imprimeChamada() {
  let filme = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  let retangulo = {
  largura: lado1,
  altura: lado2,
  perimetro: 2 * (lado1 + lado2),
  area: lado1 * lado2,
  }
  return retangulo
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  const novaPessoa = {
    ...pessoa,
    nome: "ANÔNIMO",
  }
  return novaPessoa
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  const maiorDeIdade = arrayDePessoas.filter(arrayDePessoas => {
    return arrayDePessoas.idade >= 18
  })
  return maiorDeIdade
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  const criancas = arrayDePessoas.filter(arrayDePessoas => {
    return arrayDePessoas.idade < 18
  })
  return criancas
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  let novoArray = []
  for(let i = 0; i < array.length; i++) {
    novoArray.push(array[i] * 2)
  }
  return novoArray
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  let novoArray = []
  let multiplicacao
  for(let i = 0; i < array.length; i++) {
    multiplicacao = (array[i] * 2)
    novoArray.push(`${multiplicacao}`)
  }
  return novoArray
}

// EXERCÍCIO 17C
function verificaParidade(array) {
  let resultado = []
  for(let i = 0; i <= array.length-1; i++) {
    if(array[i] % 2 === 0) {
      resultado.push(`${array[i]} é par`)
    } else {
      resultado.push(`${array[i]} é ímpar`)
    }
  }
  return resultado
}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
  const permitidos = pessoas.filter(pessoas => {
  return pessoas.altura >= 1.5 && pessoas.idade > 14 && pessoas.idade < 60 
  })
  return permitidos
}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  const naoPermitidos = pessoas.filter(pessoas => {
  return pessoas.altura < 1.5 || pessoas.idade <= 14 || pessoas.idade > 60 
  })
  return naoPermitidos
}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

  
}
