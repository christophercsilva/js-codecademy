// Variáveis globais podem ser acessadas dentro de outros escopos
// Váriaveis de escopo, só podem ser acessadas dentro daquele escopo, fora não, mas dentro de um escopo dentro dele sim


const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars);