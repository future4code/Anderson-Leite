/*##################################################### 
##### BlackJack feito por Anderson Heidrich Leite #####
#####            em 13 junho de 2021.             #####
#####################################################*/

console.log("Bem-vindo(a) ao jogo de Blackjack!")

if(confirm("Quer iniciar uma nova rodada?")) {

   // Compra as cartas

   let c1Jogador = comprarCarta()
   let c2Jogador = comprarCarta()
   let c1Computador = comprarCarta()
   let c2Computador = comprarCarta()
   
   // Verifica os Áses

   while(c1Jogador.valor === 11 && c2Jogador.valor === 11 || c1Computador.valor === 11 && c2Computador.valor === 11) {
      c1Jogador = comprarCarta()
      c2Jogador = comprarCarta()
      c1Computador = comprarCarta()
      c2Computador = comprarCarta()
   }
   
   // Arrays para armazenar as cartas

   let pontuacaoJogador = c1Jogador.valor + c2Jogador.valor
   let pontuacaoComputador = c1Computador.valor + c2Computador.valor
   let cartasJogador = []
   let cartasComputador = []
   cartasJogador.push(c1Jogador.texto, c2Jogador.texto)
   cartasComputador.push(c1Computador.texto, c2Computador.texto)
   
   // Permite a compra do usuário até 21 pontos

   while(pontuacaoJogador < 21) {

      if(confirm(`Suas cartas são ${cartasJogador}.\nA carta revelada do computador é ${c1Computador.texto}.\nDeseja comprar mais uma carta?`)) {
         novaCartaJogador = comprarCarta()
         cartasJogador.push(novaCartaJogador.texto)
         pontuacaoJogador += novaCartaJogador.valor
      } else {
         break
      }
   
   }

   // Permite a compra do computador até 21 pontos

   while(pontuacaoJogador <= 21 && pontuacaoComputador < pontuacaoJogador) {
      novaCartaComputador = comprarCarta()
      cartasComputador.push(novaCartaComputador.texto)
      pontuacaoComputador += novaCartaComputador.valor
   }
   
   // Verifica e anuncia o vencedor

   let resultado = ""
   
   if(pontuacaoJogador === pontuacaoComputador) {
      resultado = "Empate!"
   }
      
   else if(pontuacaoJogador > pontuacaoComputador && pontuacaoJogador <= 21 || pontuacaoComputador > 21) {
      resultado = "O usuário venceu!"
   }
   
   else {
      resultado = "O computador venceu!"
   }
   
   alert(
      `Suas cartas são ${cartasJogador}.\nSua pontuação é ${pontuacaoJogador}.\nAs cartas do computador são ${cartasComputador}.\nA pontuação do computador é ${pontuacaoComputador}.\n${resultado}`
   )
   
} else {
        
   alert("O jogo acabou. Atualize a página para jogar novamente.")
         
}