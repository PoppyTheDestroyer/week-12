var newUserSearch = require("./new-user.js");
var getData = require("./get-data.js");
var fs = require("fs");

var WeatherAdmin = function() {
    this.getData = function() {
        fs.readFile("log.txt", "utf8", function(error, data){
            console.log(data);
        }); 
    };
    this.newUserSearch = function(name, location) {
        var logTxt = "\nName: " + newUserSearch.name + " Location: " + newUserSearch.location + " Date: " + newUserSearch.date;
        fs.appendFile("log.txt", logTxt);
        
            newUserSearch.getWeather();
    }
}

module.exports = WeatherAdmin;