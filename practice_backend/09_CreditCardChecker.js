// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

// Add your functions below:
function validateCred(arr) {
  // console.log('arr length', arr.length)
  // console.log(arr);
  let droppedLastDigit = null;
  const reversedArrWithoutLastDigit = [];
  const tempArr = [];
  let sum = null;
  let totalSum = null;
  for (i = arr.length - 1; i >= 0; i--) {
    if (i === arr.length - 1) {
      droppedLastDigit = arr[i];
    } else {
      reversedArrWithoutLastDigit.push(arr[i]);
    }
  }
  // console.log("DLD", droppedLastDigit);
  // console.log("reversedArr", reversedArrWithoutLastDigit);

  for (i = 0; i < reversedArrWithoutLastDigit.length; i++) {
    if (i % 2 === 0) {
      let multiplyBy2 = reversedArrWithoutLastDigit[i] * 2;
      // console.log(reversedArrWithoutLastDigit[i])
      if (multiplyBy2 > 9) {
        tempArr.push(multiplyBy2 - 9);
      } else {
        tempArr.push(multiplyBy2);
      }
    } else {
      tempArr.push(reversedArrWithoutLastDigit[i]);
    }
  }
  // console.log("tempArr", tempArr);
  for (i = 0; i < tempArr.length; i++) {
    sum = sum + tempArr[i];
  }
  totalSum = sum + droppedLastDigit;

  // console.log(sum, totalSum, droppedLastDigit);

  const isValid = () => {
    // console.log("result", totalSum % 10 === 0 ? true : false);
    return totalSum % 10 === 0;
  };
  return isValid();
}

// validateCred(valid1);
// validateCred(valid2);
// validateCred(valid3);
// validateCred(invalid2);

function findInvalidCards(batchArr) {
  // console.log("BATCH", batchArr.length);
  const invalidCards = [];
  batchArr.map((arr) => {
    if (validateCred(arr) === false) {
      // console.log("is it valid", arr);
      invalidCards.push(arr);
    } else {
      // console.log("ELSE VALID", arr.length);
    }
  });
  // console.log("ONLY INVALID", invalidCards);
  return invalidCards;
}

function idInvalidCardCompanies(arr) {
  const invalidCardsArr = arr;
  const cardCompanies = {
    3: "Amex",
    4: "Visa",
    5: "Mastercard",
    6: "Discover",
  };
  const invalidCardsIssuers = [];
  let toBeReturned = [];
  for (i = 0; i < arr.length; i++) {
    // console.log("id invalid cards", invalidCardsArr[i][0]);
    for (const [key, value] of Object.entries(cardCompanies)) {
      // console.log(key, value, invalidCardsArr[i][0]);
      if (invalidCardsArr[i][0] === Number(key)) {
        // console.log("match", value);
        invalidCardsIssuers.push(value);
      }
    }
  }

  toBeReturned = invalidCardsIssuers.filter((item, index) => {
    return invalidCardsIssuers.indexOf(item) === index;
  });

  console.log(toBeReturned);

  return toBeReturned;
}

idInvalidCardCompanies(findInvalidCards(batch));
