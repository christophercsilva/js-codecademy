/* Certas ações nossas acontecem por condições, por exemplo, se estamos com sono, vamos dormir
    ou enquanto tivermos dinheiro, economizamos certa parte, ou quando estamos na academia, fazemos
    10 repetições de um determinado exercício. Na programação, podemos usar essas estruturas condicionais

    Além de estruturas condicionais, temos operadores lógicos, de comparação, operadores ternários e o switch case
*/

// Se
let bankBalance = 10;
let codeAcademyProPrice = 3000;

if (bankBalance >= codeAcademyProPrice) {
    console.log('I can buy!');
} else {
    console.log('I do not have money to buy :(');
}

/* Operadores de comparação
    Less than: <
    Greater than: >
    Less than or equal to: <=
    Greater than or equal to: >=
    Is equal to: ===
    Is NOT equal to: !==
*/

let mySalary = 0;
let iHaveSalary = mySalary > 0; // false

/* Operadores lógicos
    the and operator (&&)
    the or operator (||)
    the not operator, otherwise known as the bang operator (!)
*/
if (mySalary === 0 && iHaveSalary === false) {
    console.log('Preciso encontrar um trabalho.');
} else {
    console.log('Tudo certo');
}

/* Truthy and Falsy
    Às vezes precisamos saber se a variável existe e não precisamos necessariamente
    coomprar a um valor específico, para isso, usamos o Truthy and Falsy

    falsy seriam valores como 0, string vazias, undefined e NaN
    truthy são valores diferentes do falsy
*/
let numberOfApples = 0;

if (numberOfApples){
   console.log('Podemos comer!');
} else {
   console.log('Não tem maças para comer! :/');
}

/* Switch
    Quando temos muitas condições para uma só variável, podemos usar o Switch
*/
let athleteFinalPosition = 'fourth place';

switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}
