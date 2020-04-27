// referência a temperatura kelvin
const kelvin = 0;

// celsius é o resultado de kelvin menos 273
let celsius = kelvin - 273;

// formula para converter para fahrenheit
// arredondando para baixo o resultado
let fahrenheit = Math.floor(celsius * (9/5) + 32);

let newton = Math.floor(celsius * (33/10));

console.log(`The temperature is ${fahrenheit} degress Fahrenheit.`);