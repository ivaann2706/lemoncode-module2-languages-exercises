console.log("*** Players Order ***");

console.log("Option 1");

const getPlayersOrder = (players, turns) => {
  for (let i = 0; i < turns; i++) {
    const [player, ...rest] = players;
    players = [...rest, player];
  }
  return players;
};

// Example
const orderIn2Turns = getPlayersOrder(["Ana", "Juan", "Pablo", "Lucia"], 2);
console.log(orderIn2Turns); // ["Pablo", "Lucia", "Ana", "Juan"]
const orderIn10Turns = getPlayersOrder(["Ana", "Juan", "Pablo", "Lucia"], 10);
console.log(orderIn10Turns); // ["Pablo", "Lucia", "Ana", "Juan"]

console.log("Option 2");

const getPlayersOrder2 = (players, turns) => {
  const player = turns >= players.length ? turns % players.length : turns;
  const newOrder = [...players.slice(player), ...players.slice(0, player)];
  return newOrder;
};

// Example
const order2In2Turns = getPlayersOrder2(["Ana", "Juan", "Pablo", "Lucia"], 2);
console.log(order2In2Turns); // ["Pablo", "Lucia", "Ana", "Juan"]
const order2In10Turns = getPlayersOrder2(["Ana", "Juan", "Pablo", "Lucia"], 10);
console.log(order2In10Turns); // ["Pablo", "Lucia", "Ana", "Juan"]
