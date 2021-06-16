/*##################################################### 
##### BlackJack feito por Anderson Heidrich Leite #####
#####           em 13 de junho de 2021.           #####
#####################################################*/

console.log("Bem-vindo(a) ao jogo de Blackjack!")

if(confirm("Quer iniciar uma nova rodada?")) {

   let c1Jogador = comprarCarta();
   let c2Jogador = comprarCarta();
   let c1Computador = comprarCarta();
   let c2Computador = comprarCarta();
   let pontuacaoJogador = c1Jogador.valor + c2Jogador.valor
   let pontuacaoComputador = c1Computador.valor + c2Computador.valor
   
      console.log("Usuário - Cartas: "+ c1Jogador.texto + " e " + c2Jogador.texto +". Pontuação: "+ pontuacaoJogador +".")
      console.log("Computador - Cartas: "+ c1Computador.texto + " e " + c2Computador.texto +". Pontuação: "+ pontuacaoComputador +".")
       
      if(pontuacaoJogador === pontuacaoComputador) {
         console.log("Empate!")
      }
       
      else if(pontuacaoJogador > pontuacaoComputador) {
         console.log("O usuário venceu!")
      }

      else {
         console.log("O computador venceu!")
      }
      
   }

else {
        
   console.log("O jogo acabou.")
         
}