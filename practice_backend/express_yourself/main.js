const { app } = require("./app.js");

// Designate which PORT the server will listen on
const PORT = process.env.PORT || 4001;

// listen on the designated PORT
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
