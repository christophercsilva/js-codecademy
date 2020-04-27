let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;
const runnerAge = 19;

registeredEarly ? raceNumber += 1000 : raceNumber; 

if (runnerAge > 18) {
  if (registeredEarly) {
    console.log(`You will race at 09:30 am, your race number is ${raceNumber}.`);
  } else {
    console.log(`You will race at 11:00 am, your race number is ${raceNumber}.`); 
  }
} else if (runnerAge < 18) {
  console.log(`You will race at 12:30 pm, your race number is ${raceNumber}.`);
} else {
  console.log(`Sorry, you can not run!, your race number is ${raceNumber}.`);
}