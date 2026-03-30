const getSleepHours = (day) => {
  switch (day) {
    case "monday":
      return 8;
      break;
    case "tuesday":
      return 8;
      break;
    case "wednsday":
      return 8;
      break;
    case "thursday":
      return 8;
      break;
    case "friday":
      return 8;
      break;
    case "saturday":
      return 8;
      break;
    case "sunday":
      return 8;
      break;
    default:
      console.log(`Sorry, incorrect day: ${day}.`);
      return 0;
  }
};

const getActualSleepHours = () => {
  const getMonday = getSleepHours("monday");
  const getTuesday = getSleepHours("tuesday");
  const getWendsday = getSleepHours("wednsday");
  const getThursday = getSleepHours("thursday");
  const getFriday = getSleepHours("friday");
  const getSaturday = getSleepHours("saturday");
  const getSunday = getSleepHours("sunday");
  const totalSum =
    getMonday +
    getTuesday +
    getWendsday +
    getThursday +
    getFriday +
    getSaturday +
    getSunday;
  return totalSum;
};

const getIdealSleepHours = (idealHoursPerNight = 8) => {
  return idealHoursPerNight * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(9.5);
  const difference = actualSleepHours - idealSleepHours;

  if (actualSleepHours === idealSleepHours) {
    console.log("You've got the perfect amount of sleep. Well done!");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      `You've slept longer than needed. Lucky you! You've oversleep by ${difference} hours`,
    );
  } else {
    console.log(
      `You should get more sleep! You're under by ${difference} hours`,
    );
  }
};

calculateSleepDebt();

// Enhance by adding array of days and loop instead calling each day separetly
