// Switch Case
// Só é preferível usar ao invés do if quando for um caso que tiver muita comparação para fazer. Exemplo: vários ifs de igualdade. Desse modo o Switch Case entra deixando o código mais elegante.

let idade = Number(prompt('Insira sua idade'))

switch(idade){
  case 10:
    console.log('Você tem 15 anos')
    console.log('segunda linha')
    break; // O código só para de executar quando encontrar um break.

  case 15:
    console.log('Você tem 15 anos')
    console.log('segunda linha')
    break;

  default:
    console.log('default') // Default é como se fosse o else.
    break;
}