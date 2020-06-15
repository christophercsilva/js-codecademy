/* Como atleta experiente, uma de suas atividades favoritas é correr maratonas.
Você usa um serviço chamado Dias de treinamento que envia uma mensagem para o evento em que
você se inscreveu e os dias que restam para treinar.

Como você também codifica, o Training Days solicitou que você os ajudasse a resolver um problema:
O programa atualmente usa o escopo errado para suas variáveis.
Eles sabem que isso pode ser problemático à medida que o serviço evolui.
Neste projeto, você tornará os Dias de treinamento mais fáceis de manter e
menos propensos a erros, corrigindo escopos variáveis.
*/

// The scope of `random` is too loose 
const name = 'Nala';

const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// The scope of `days` is too tight 
const getTrainingDays = event => {
  let days;
  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }

  return days;
};

// The scope of `name` is too tight 
const logEvent = (name, event) => {
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 


logEvent(name, event);
logTime(name, days);

const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';

logEvent(name2, event2);
logTime(name2, days2);