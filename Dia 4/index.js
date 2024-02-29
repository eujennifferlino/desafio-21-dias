//A condição precisa sempre ter um valor booleado, ou seja, verdadeiro ou falso.
// O condicional sempre será definido no if
let condição = true;

if(condição) {
  console.log('caiu no if')
}else{
  console.log('caiu no else')
}

// Nem sempre o if precisa vir acompanhado do else, pois se a condição for sempre verdadeira teremos apenas o que queremos que aconteça.
// Para saber se algo é verdadeiro ou falso de forma mais dinâmica, vamos usar os operadores de comparação. Exemplo: == (igual), != (diferente).
// Também temos operadores de ordem, exemplo: > (maior que), < (menor que). Também é possível usar >= (maior que ou igual), <= (menor que ou igual).
// Para garantir que o código ficará mais estável, o padrão é usar 3 iguais pois faz a comparação do valor e do tipo. Exemplo: ===, !== (compara se é diferente o valor e o tipo).

let idade = Number(prompt('Insira sua idade'))
let nome = (prompt('Insira seu nome'))

if(idade <= 10) {
  console.log('Você tem 10 anos ou menos')
}else{
  console.log('Você tem mais do que 10 anos')
}

// OBS: Uma variável só pode ser aproveitada caso esteja dentro do escopo onde foi criada ou abaixo dela.

// Operadores E/OU - &&/||
if(idade === 28 || nome === "Jenniffer"){
  console.log("Seu nome é Jenniffer e você tem 28 anos")
}else if(idade === 28 && nome === 'Jenniffer'){
  console.log("Você tem 28 anos OU o seu nome é Jenniffer.")
}else{
  console.log('Seu nome não é Jenniffer e você não tem 28 anos.')
}
