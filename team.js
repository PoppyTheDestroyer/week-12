var inquirer = require("inquirer")
var starters = [];
var subs = [];
var team = [];
function player(name, position, offense, defense) {
    var rand = Math.floor(Math.random() * 2);
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;
    this.goodGame = function () {
        if (rand === 0) {
            this.offense += 1
        } else {
            this.defense += 1
        }
    }
    this.badGame = function () {
        if (rand === 0) {
            this.offense -= 1
        } else {
            this.defense -= 1
        }
    }
    this.printInfo = function () {
        console.log("Name: " + name + "\nPosition: " + position + "\nOffense: " + offense + "\nDefense: " + "\n")
    }
}
var createPlayer = function () {
    if (starters.length + subs.length < 8) {
        console.log("\nNew Player!\n")
        inquirer
            .prompt([
                {
                    message: "Enter Player Name",
                    name: "name"
                },
                {
                    message: "Enter Player Position",
                    name: "position"
                },
                {
                    message: "Select Offense Rating",
                    name: "offense",
                    validate: function (value) {
                        if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
                            return true;
                        }
                        return false;
                    }
                },
                {
                    message: "Select Defense Rating",
                    name: "defense",
                    validate: function (value) {
                        if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
                            return true;
                        }
                        return false;
                    }
                }
            ])
            .then(function (inquirerResponse) {
                var currentPlayer = new player(inquirerResponse.name, inquirerResponse.position, parseInt(inquirerResponse.offense), parseInt(inquirerResponse.defense));
                if (starters.length < 5) {
                    starters.push(currentPlayer);
                    team.push(currentPlayer);
                    console.log(currentPlayer.name + " has been added to the starting roster.")
                } else {
                    subs.push(currentPlayer);
                    team.push(currentPlayer);
                    console.log(currentPlayer.name + " has been added to the sub roster.")
                }
                createPlayer();
            })
    } else {
        for (i=0; i < team.length; i+=1) {
            team[i].printInfo();
        }
    }
}
createPlayer();

