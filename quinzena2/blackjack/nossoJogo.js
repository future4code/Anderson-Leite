console.log("Bem-vindo(a) ao jogo de Blackjack!")

if(confirm("Quer iniciar uma nova rodada?")) {

   const carta1 = comprarCarta();
   const carta2 = comprarCarta();
   const carta3 = comprarCarta();
   const carta4 = comprarCarta();
            
      console.log("Usuário - Cartas: "+ carta1.texto + " e " + carta2.texto +". Pontuação: "+ (carta1.valor + carta2.valor) +".")
      console.log("Computador - Cartas: "+ carta3.texto + " e " + carta4.texto +". Pontuação: "+ (carta3.valor + carta4.valor) +".")
       
      if((carta1.valor + carta2.valor) === (carta3.valor + carta4.valor)) {
         console.log("Empate!")
      }
       
      else if((carta1.valor + carta2.valor) >= (carta3.valor + carta4.valor)) {
         console.log("O usuário venceu!")
      }

      else {
         console.log("O computador venceu!")
      }
       
       
       
}

else {
        
   console.log("O jogo acabou.")
         
}