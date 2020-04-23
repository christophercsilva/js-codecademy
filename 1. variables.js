
/* 
   Variáveis
   As variáveis podem ser criadas através do let ou var, para criar uma constante, usa-se const
   Declarações de variáveis não podem começar com número ou serem palavras reservadas do JavaScript
   Variáveis são case sensitive, então myName é diferente de myname
   A diferença entre var e let, é que a var tem escopo global, enquanto o let tem escopo de bloco
*/
const planet = 'Earth';
var country = 'Brazil';
let state = 'São Paulo';
console.log('My planet is ', planet, ', I live in ', state, ' - ', country);

// Se não deixamos um valor a uma variavel, ela ficará como undefined
let mySalary;
console.log(mySalary); //undefined

/* Constantes
   A variáveis podem ter seus valores alterados, enquanto na constante não, o primeiro valor atribuído a constante 
   será o valor "permanente"
   Elas são declaradas através do const
*/
const ourGalaxy = 'Via Láctea';

// Operações matemáticas sobre variáveis
let mySalary = 0;
mySalary += 17800 // += seria mySalary = mySalary + 17800
mySalary -= 800;
mySalary *= 2;
mySalary /= 2;

/* Como incrementar ou decrementar variáveis
   Se você usar a++, incrementa o valor de a em mais um
   Já o a--, decrementa o valor de a em menos um
*/
let year = 2020;
year++;
year--;
console.log(year) // 2020

// É possível realizar interpolação de strings através do literal de modelo (template literals)
console.log(`My salary is ${mySalary}`);

// typeof -> É utilizado para descobrirmos o tipo de uma variável
console.log(typeof mySalary); // string
