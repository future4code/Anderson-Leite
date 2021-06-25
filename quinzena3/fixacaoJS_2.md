```
function calculaPrecoTotal(quantidade) {
  let macas = 1.30
  if(quantidade >= 12) {
    macas = 1.00
    return quantidade * macas
  }
  return quantidade * macas
}
```