const team = {
  _players: [
    { firstName: "John", lastName: "Doe", age: 20 },
    { firstName: "Mike", lastName: "Jordan", age: 22 },
    { firstName: "Adam", lastName: "Malysz", age: 18 },
  ],
  _games: [
    { opponent: "MU", teamPoints: 15, opponentPoints: 23 },
    { opponent: "USA", teamPoints: 14, opponentPoints: 09 },
    { opponent: "CU NT", teamPoints: 44, opponentPoints: 44 },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      LastName: newLastName,
      age: newAge,
    };
    return this._players.push(player);
  },
  addGame(newOpponent, newLastName, newAge) {
    let game = {
      opponent: newOpponent,
      teamPoints: newLastName,
      opponentPoints: newAge,
    };
    return this._games.push(game);
  },
};

console.log(team);
team.addPlayer("Bugs", "Bunny", 76);
team.addGame("MU", 50, 14);
console.log(team);
