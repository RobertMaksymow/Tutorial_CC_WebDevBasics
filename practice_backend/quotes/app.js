const express = require("express");
const app = express();

const { quotes } = require("./data");
const { getRandomElement } = require("./utils");

app.use(express.static("public"));

app.get("/api/quotes/random", (req, res, next) => {
  const random = getRandomElement(quotes);
  console.log(random);
  if (random) {
    res.status(200).send({ quote: random });
  } else {
    res.status(404).send();
  }
});

app.get("/api/quotes", (req, res) => {
  const { person } = req.query;

  if (!person) {
    res.status(200).send({ quotes });
    return;
  }
  const matchingQuotes = quotes.filter((q) => q.person === person);
  res.status(200).send({ quotes: matchingQuotes });
});

app.post("/api/quotes", (req, res) => {
  const { quote, person } = req.query;

  if (!quote || !person) {
    res.status(400).send();
    return;
  }

  const newQuote = { quote, person };
  quotes.push(newQuote);

  res.status(201).send({ quote: newQuote });
});

// export app for use in main.js and for testing
module.exports = {
  app,
};
