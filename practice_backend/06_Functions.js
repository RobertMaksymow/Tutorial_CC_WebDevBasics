// Write your function here:
function canIVote(age) {
  return age >= 18 ? true : false;
}

// Uncomment the line below when you're ready to try out your function
console.log(canIVote(19)); // Should print true

// We encourage you to add more function calls of your own to test your code!
console.log(canIVote(15));
console.log(canIVote(18));

// Write your function here:
function agreeOrDisagree(string1, string2) {
  return string1 === string2 ? "You agree!" : "You disagree!";
}

// Uncomment the line below when you're ready to try out your function
console.log(agreeOrDisagree("yep", "yep"));
// Should print 'You agree!'

// We encourage you to add more function call of your own to test your code!
console.log(agreeOrDisagree("yep", "yyp"));

// Write your function here:
function lifePhase(age) {
  if (age >= 0 && age <= 3) {
    return "baby";
  } else if (age > 3 && age <= 12) {
    return "child";
  } else if (age > 12 && age <= 19) {
    return "teen";
  } else if (age > 19 && age <= 64) {
    return "adult";
  } else if (age > 64 && age <= 140) {
    return "senior citizen";
  } else {
    return "This is not a valid age";
  }
}

console.log(lifePhase(5)); //should print 'child'
console.log(lifePhase(155)); //should print 'child'
console.log(lifePhase(-5)); //should print 'child'

// Write your function here:

function finalGrade(number1, number2, number3) {
  const isNumberInvalid = (number) => {
    return number < 0 || number > 100 ? true : false;
  };
  const calculateAverage = (number1, number2, number3) => {
    if (
      !isNumberInvalid(number1) &&
      !isNumberInvalid(number2) &&
      !isNumberInvalid(number3)
    ) {
      return (number1 + number2 + number3) / 3;
    } else {
      return "Error: invalid grade.";
    }
  };

  const average = calculateAverage(number1, number2, number3);

  if (average >= 0 && average <= 59) {
    console.log("average", average);
    return "F";
  } else if (average >= 60 && average <= 69) {
    console.log("average", average);
    return "D";
  } else if (average >= 70 && average <= 79) {
    console.log("average", average);
    return "C";
  } else if (average >= 80 && average <= 89) {
    console.log("average", average);
    return "B";
  } else if (average >= 90 && average <= 100) {
    console.log("average", average);
    return "A";
  } else {
    return "You have entered an invalid grade.";
  }
}

// Uncomment the line below when you're ready to try out your function
console.log(finalGrade(99, 92, 95)); // Should print 'A'

// We encourage you to add more function calls of your own to test your code!
console.log(finalGrade(15, 32, 67));
console.log(finalGrade(-10, 92, 95)); // Should print 'A'
console.log(finalGrade(99, 0, 95)); // Should print 'A'
console.log(finalGrade(99, 92, 140)); // Should print 'A'

// Write your function here:
function reportingForDuty(rank, lastName) {
  return `${rank} ${lastName} reporting for duty!`;
}

// Uncomment the line below when you're ready to try out your function
console.log(reportingForDuty("Private", "Fido")); // Should return 'Private Fido reporting for duty!'

// We encourage you to add more function calls of your own to test your code!

const rollTheDice = () => {
  // Math.random() gives us a random number from 0 up to, but not including, 1
  // We multiplied that by 6 to get a number between 0 and up to, but not including, 6
  // But since we actually wanted numbers from 1 to 6, inclusive, we added 1
  let die1 = Math.floor(Math.random() * 6 + 1);
  let die2 = Math.floor(Math.random() * 6 + 1);
  console.log(die1, die2);
  return die1 + die2;
};

rollTheDice();

// Write your function here:
function calculateWeight(earthWeight, planet) {
  if (typeof earthWeight === "number" && typeof planet === "string") {
    switch (planet) {
      case "Mercury":
        return earthWeight * 0.378;
      case "Venus":
        return earthWeight * 0.907;
      case "Mars":
        return earthWeight * 0.377;
      case "Jupiter":
        return earthWeight * 2.36;
      case "Saturn":
        return earthWeight * 0.916;
      default:
        return "Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.";
    }
  } else {
    return "Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.";
  }
}

// Uncomment the line below when you're ready to try out your function
console.log(calculateWeight(100, "Jupiter")); // Should print 236
console.log(calculateWeight("100", "Mars")); // Should print 236
console.log(calculateWeight(50, 200)); // Should print 236

// We encourage you to add more function calls of your own to test your code!

// Write your function here:
function truthyOrFalsy(arg) {
  return arg ? true : false;
}

// Uncomment the line below when you're ready to try out your function
console.log(truthyOrFalsy(0)); // Should print false

// We encourage you to add more function calls of your own to test your code!

// Write your function here:
function numImaginaryFriends(number) {
  return Math.ceil(number * 0.25);
}

// Uncomment the lines below when you're ready to try out your function
console.log(numImaginaryFriends(20)); // Should print 5
console.log(numImaginaryFriends(10)); // Should print 3 (2.5 rounded up!)

// We encourage you to add more function calls of your own to test your code!

// Write your function here:
function sillySentence(adjective, verb, noun) {
  return `I am so ${adjective} because I ${verb} coding! Time to write some more awesome ${noun}!`;
}

// Uncomment the line below when you're ready to try out your function
console.log(sillySentence("excited", "love", "functions"));

// We encourage you to add more function calls of your own to test your code!

// Write your function here:
function howOld(age, year) {
  const currentYear = 2026;
  if (year > currentYear) {
    return `You will be ${year - currentYear + age} in the year ${year}`;
  } else if (year < currentYear - age) {
    return `The year ${year} was ${
      currentYear - age - year
    } years before you were born`;
  } else if (year < currentYear && year > currentYear - age) {
    return `You were ${year - (currentYear - age)} in the year ${year}`;
  }
}

// Once your function is written, write function calls to test your code!
console.log(howOld(41, 2030));

const whatRelation = (percentSharedDNA) => {
  if (percentSharedDNA === 100) {
    return "You are likely identical twins.";
  }
  if (percentSharedDNA >= 35) {
    return "You are likely parent and child or full siblings.";
  }
  if (percentSharedDNA >= 14 && percentSharedDNA <= 34) {
    return "You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.";
  }
  if (percentSharedDNA > 5) {
    return "You are likely 1st cousins.";
  }
  if (percentSharedDNA > 2) {
    return "You are likely 2nd cousins.";
  }
  if (percentSharedDNA > 0) {
    return "You are likely 3rd cousins.";
  }
  return "You are likely not related.";
};

console.log(whatRelation(34));
// Should print 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'

console.log(whatRelation(3));
// Should print 'You are likely 2nd cousins.'
console.log(whatRelation(105));

// Write your function here:
function tipCalculator(quality, total) {
  switch (quality) {
    case "bad":
      return total * 0.05;
    case "ok":
      return total * 0.15;
    case "good":
      return total * 0.2;
    case "excellent":
      return total * 0.3;
    default:
      return total * 0.18;
  }
}

// Uncomment the line below when you're ready to try out your function
console.log(tipCalculator("good", 100)); //should return 20

// We encourage you to add more function calls of your own to test your code!

// Write your function here:
function toEmoticon(string) {
  switch (string) {
    case "shrug":
      return '|_{"}_|';
    case "smiley face":
      return ":)";
    case "frowny face":
      return ":(";
    case "winky face":
      return ";)";
    case "heart":
      return "<3";
    default:
      return "|_(* ~ *)_|";
  }
}

console.log(toEmoticon("whatever"));
// Should print  '|_(* ~ *)_|'
