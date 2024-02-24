/*O que são variáveis? 
São usadas para armazenar dados temporariamente na memória durante a execução de um programa,
elas são como recipientes nomeados para os quais é possível atribuir valores e depois recuperá-los durante a execução do programa. 
As variáveis em JavaScript podem armazenar diversos tipos de dados, como números, strings, booleanos, objetos, arrays e assim por diante. */


let tipoTexto = "2";
let tipoNumber = 2;
let tipoBoolTexto = "true";
let tipoBool = true;


//var, let e const: var já não é mais utilizado e o padrão de mercado no Javascript é somente usar let e const
//var: tem escopo de função, o que significa que suas variáveis são acessíveis em toda a função em que são declaradas e isso pode levar a bugs difíceis de rastrear e entender
//padrão de variável: escolher um nome que tenha a ver com que ela vai gravar, sempre iniciar com letra minuscula e camel-case em caso de mais de uma palavra.


let nome = 'Jenniffer Lino'
let idade = 27
console.log(nome, idade)

console.log('=========== Constante ===========')

const meuNome = "Jenniffer Lino"
console.log(meuNome)
meuNome = "Jenniffer Ferreira"
console.log(meuNome)


//Operadores aritméticos 

//Adição (+):
let soma = 5 + 3; // soma é igual a 8

//Subtração (-):
let diferenca = 10 - 4; // diferenca é igual a 6

//Multiplicação (*):
let produto = 2 * 6; // produto é igual a 12

//Divisão (/):
let quociente = 20 / 5; // quociente é igual a 4

//Módulo (%) (também conhecido como operador de resto, retorna o resto da divisão):
let resto = 10 % 3; // resto é igual a 1



//Conversão de valores e entrada de dados

let entradaUsuario = prompt();
console.log(entradaUsuario)

let entradaUsuarioInt = parseInt(entradaUsuario); //também é possível utilizar o 'Number' ao invés do 'parseInt()'
console.log(entradaUsuarioInt)