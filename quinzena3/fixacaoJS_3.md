```
function calculaNota(ex, p1, p2) {
  let nota1 = ex * 16.7
  let nota2 = p1 * 33.33
  let nota3 = p2 * 50
  let media = (nota1 + nota2 + nota3) / 100
  if(media >= 9) {
    return "A"
  } else if(media < 9 && media >= 7.5) {
    return "B"
  } else if(media < 7.5 && media >= 6) {
    return "C"
  } else {
    return "D"
  }
}
```