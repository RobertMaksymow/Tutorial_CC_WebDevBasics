const express = require("express");
const app = express();

//////////////////////////////////// EXAMPLES OF ROUTES CRUD
const buildingMaterials = {
  wood: ["plywood", "2x4s", "cedar shingles"],
  metal: ["steel girders", "wall studs", "rebar"],
};

app.get("/metals", (req, res, next) => {
  const arrayToSend = buildingMaterials.metal;
  res.send(arrayToSend);
});

////////////////////////////////////////
const battlefields = {
  fortSumter: {
    state: "SC",
  },
  manassas: {
    state: "VA",
  },
};

app.get("/battlefields/:name", (req, res, next) => {
  const battlefieldName = req.params.name;
  const battlefield = battlefields[battlefieldName];
  if (battlefield) {
    res.send(battlefield);
  } else {
    res.status(404).send();
  }
});

/////////////////////////////////////////
const currencies = {
  dinar: {
    countries: ["Algeria", "Bahrain", "Jordan", "Kuwait"],
    shilling: {
      countries: ["Tanzania", "Uganda", "Somalia", "Kenya"],
    },
  },
};

app.put("/currencies/:name/countries", (req, res, next) => {
  const currencyName = req.params.name;
  if (currencies.hasOwnProperty(currencyName)) {
    currencies[currencyName] = req.query;
    res.send(currencies[currencyName]);
  } else {
    res.status(404).send();
  }
});
///////////////////////////////////////////////////////
const soups = ["gazpacho", "borscht", "primordial", "avgolemono", "laksa"];

app.post("/soups", (req, res, next) => {
  if (req.query.name) {
    soups.push(req.query.name);
    res.status(201).send(req.query.name);
  } else {
    res.status(400).send();
  }
});
////////////////////////////////////////////////////////
const puddingFlavors = ["chocolate", "banana", "butterscotch", "pistachio"];

const findPuddingIndex = (name) => {
  return puddingFlavors.indexOf(name);
};

const deletePuddingAtIndex = (index) => {
  puddingFlavors.splice(index, 1);
};

// Your code here!
app.delete("/puddings/:flavor", (req, res, next) => {
  const index = findPuddingIndex(req.params.flavor);
  if (index !== -1) {
    deletePuddingAtIndex(index);
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});
/////////////////////////////////////////////////// ROUTER
const pastas = ["agnolotti", "cavatelli", "gemelli", "tortellini"];

app.get("/pastas", (req, res, next) => {
  res.send(pastas);
});

const sauceRouter = express.Router();
// Add your code here:
app.use("/sauces", sauceRouter);

const sauces = [
  "carbonara",
  "primavera",
  "bolognese",
  "puttanesca",
  "fra diavolo",
];

sauceRouter.get("/", (req, res, next) => {
  res.send(sauces);
});
////////////////////////////////////////////////// ROUTERS
const mountains = ["denali", "olympus", "kilimanjaro", "matterhorn"];
const mountainRanges = ["alps", "andes", "himalayas", "rockies"];

const mountainsRouter = express.Router();
const mountainRangesRouter = express.Router();

app.use("/mountains", mountainsRouter);
app.use("/mountain-ranges", mountainRangesRouter);

mountainsRouter.get("/", (req, res, next) => {
  res.send(mountains);
});

mountainRangesRouter.get("/", (req, res, next) => {
  res.send(mountainRanges);
});

// export app for use in main.js and for testing
module.exports = {
  app,
};
