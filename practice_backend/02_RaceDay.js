let raceNumber = Math.floor(Math.random() * 1000);
console.log(raceNumber);
const runnerAge = 19;
const isAdult = runnerAge > 18; // Clever
const isRegisteredEarly = false;

if (isAdult && isRegisteredEarly) {
  raceNumber += 1000;
}

if (isAdult && isRegisteredEarly) {
  console.log(
    `Hi, your race starts at 9.30am. Your number is #${raceNumber}. Good luck!`,
  );
} else if (runnerAge > 18 && !isRegisteredEarly) {
  console.log(
    `Hi, your race starts at 11.00am. Your number is #${raceNumber}. Good luck!`,
  );
} else if (runnerAge < 18) {
  console.log(
    `Hi, your race starts at 12.30pm. Your number is #${raceNumber}. Good luck!`,
  );
} else {
  console.log("Hi, go and see the registration desk uppon arrival. Thank you.");
}
