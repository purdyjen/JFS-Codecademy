/*
From Codecademy's Learn JavaScript course, Objects Unit:
https://www.codecademy.com/learn/introduction-to-javascript
*/

const team = {
    _players: 
      [
        {
          firstName: "John", 
          lastName: "Smith", 
          age: 24
        }, 
        {
          firstName: "Jim", 
          lastName: "Jones", 
          age: 21
        }, 
        {
          firstName: "James", 
          lastName: "Brown", 
          age: 23
        }
      ],
    _games: 
      [
        {
          opponent: "Raiders", 
          teamPoints: 15, 
          opponentPoints: 25
        }, 
        {
          opponent: "Hornets", 
          teamPoints: 34, 
          opponentPoints: 17
        }, 
        {
          opponent: "Pirates", 
          teamPoints: 42, 
          opponentPoints: 42
        }
      ],
    get team() {
        return this._players;
      },
    get games() {
        return this._games;
      },
    addPlayer(newFirstName, newLastName, newAge) {
        this._players.push(
          {
            firstName: newFirstName, 
            lastName: newLastName, 
            age: newAge
          }
        );
      },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        this._games.push(
          {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints
          }
        );
      }
  };
  
  team.addPlayer("Bugs", "Bunny", 76);
  console.log(team.team);
  
  team.addGame("Titans", 100, 98);
  console.log(team.games);