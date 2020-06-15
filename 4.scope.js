// Variáveis globais podem ser acessadas dentro de outros escopos
// Váriaveis de escopo, só podem ser acessadas dentro daquele escopo

/*
Escopo é a ideia na programação de que algumas variáveis ​​são acessíveis / inacessíveis de outras partes do programa.
Blocos são instruções que existem dentro de chaves {}.
O escopo global refere-se ao contexto no qual as variáveis ​​são acessíveis a todas as partes do programa.
Variáveis ​​globais são variáveis ​​que existem no escopo global.
O escopo do bloco refere-se ao contexto no qual as variáveis ​​acessíveis apenas dentro do bloco em que estão definidas.
Variáveis ​​locais são variáveis ​​que existem no escopo do bloco.
Espaço para nome global é o espaço em nosso código que contém informações com escopo global.
A poluição do escopo é quando existem muitas variáveis ​​em um espaço para nome ou nomes de variáveis ​​são reutilizados.
*/


const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars);