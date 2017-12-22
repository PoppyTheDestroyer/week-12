var weather = require("weather-js");
var inquirer = require("inquirer");

function userSearch(name, location) {
    this.name = name;
    this.location = location;
    this.date = Date.now()

    this.getWeather = function () {
        weather.find({ search: this.location, degreeType: "F" }, function (err, result) {
            if (err) console.log(err);

            console.log(JSON.stringify(result, null, 2));
        });
    };
};

var jason = new userSearch("Jason", "Houston, TX")
jason.getWeather();

module.exports = userSearch;

/*var newWeather = function() {
    inquirer
    .prompt([
        {
            message: "User: ",
            name: "user"
        },
        {
            message: "Location: ",
            name: "location"
        }
    ])
    .then(function(inquirerResponse) {
        console.log(inquirerResponse.user, inquirerResponse.location)
        var newSearch = new userSearch(inquirerResponse.user, inquirerResponse.location);
        newSearch.getWeather();
        console.log(newSearch.getWeather())
    })
};

newWeather();
*/