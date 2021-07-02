~~~javascript
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let xNumero = []
  for (let i = 0; i < arrayDeNumeros.length; i++) {
    if (numeroEscolhido === arrayDeNumeros[i]) {
      xNumero.push(arrayDeNumeros[i])
    } 
  }

    if (xNumero[0] === numeroEscolhido) {
      return `O número ${numeroEscolhido} aparece ${xNumero.length}x`
    } else {
      return "Número não encontrado"
    }
}
~~~