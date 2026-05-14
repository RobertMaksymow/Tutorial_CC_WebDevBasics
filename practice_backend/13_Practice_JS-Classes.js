/*
You are a college student and you want to stream a movie over one of the campus’s Wi-Fi networks. Based on the number of users, some networks won’t have the data to stream a movie.

The following Network class is provided to help you track how much total data and how many users each network has:

class Network {
  constructor(data, users) {
    this.data = data;
    this.users = users;
  }
}

The properties of the Network class are:

data: Total units of data supplied by the network
users: Total number of users currently on the network
On average, each user deducts 5 units from the network’s total data. To watch a movie, you must connect to a network that has at least 10 remaining units of data.

Add a method movieTime() to the Network class that returns true if there is enough data available to watch a movie, false if there isn’t.

Example:
const library = new Network(50, 9) 
library.movieTime() // returns false
*/

class Network {
  constructor(data, users) {
    this.data = data;
    this.users = users;
  }
  // Insert code below
  movieTime() {
    const maxUsers = this.data / 5;
    const isEmptyEnough = maxUsers - this.users >= 2 ? true : false;
    return isEmptyEnough;
  }
}

const library = new Network(50, 9);
const libraryTrue = new Network(50, 8);
library.movieTime(); // returns false
libraryTrue.movieTime(); // returns true

console.log(library.movieTime());
console.log(libraryTrue.movieTime());

/*
A video game consists of two players floating using 100 helium balloons. The players shoot pellets at each other’s balloons and after 10 minutes the player with the most balloons left wins.

Write a game function balloonAttack that takes two Player instances, calculates the balloons left for each player after 10 minutes (using the other player’s hitsPerMinute property), and returns the name of the winner. If the result is a tie, return the string 'Tie'.

You can test your balloonAttack function by creating two instances of the Player class to use as arguments for your function like below:

const p1 = new Player('p1', 5);
const p2 = new Player('p2', 2);

balloonAttack(p1, p2);

Feel free to use the status() method to output each player’s balloon count at any given time.
*/

class Player {
  constructor(name, hitsPerMinute) {
    this.name = name;
    this.hitsPerMinute = hitsPerMinute;
    this.balloonCount = 100;
  }

  status() {
    console.log(`Player: ${this.name} -- Balloons Left: ${this.balloonCount}`);
  }
}

// Write function below
const p1 = new Player("p1", 5);
const p2 = new Player("p2", 2);

function balloonAttack(player1, player2) {
  player1.status();
  player2.status();
  const timeInMinutes = 10;
  let p1TotalDamageGiven = player1.hitsPerMinute * timeInMinutes;
  let p2TotalDamageGiven = player2.hitsPerMinute * timeInMinutes;

  player1.balloonCount = player1.balloonCount - p2TotalDamageGiven;
  player2.balloonCount = player2.balloonCount - p1TotalDamageGiven;

  console.log(p1TotalDamageGiven, player1.hitsPerminute, player1.balloonCount);
  console.log(p2TotalDamageGiven, player2.hitsPerminute, player2.balloonCount);

  if (player1.balloonCount > player2.balloonCount) {
    return `${player1.name} wins!`;
  } else if (player1.balloonCount < player2.balloonCount) {
    return `${player2.name} wins`;
  } else {
    return "Tie";
  }
}

console.log(balloonAttack(p1, p2));
