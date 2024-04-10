for(let contador = 0; contador < 5; contador++); // o contador ++ sempre irá acrescentar 1 na contagem de acordo com o valor que eu defini, 
//ou seja fará a soma e o -- fará a diminuição.

// o FOR é importante pois no ajuda a deixar o código mais dinâmico.

// ===== EXEMPLO TABUADA =====

let tabuada = Number(prompt('Escolha a tabuada que deseja:'))

for(let contador =0; contador <= 100; contador++){
  console.log(tabuada + " x " + contador + " = " + tabuada*contador)
}