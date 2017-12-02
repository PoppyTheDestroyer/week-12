function programmer(name, title, age, fave) {
    this.name = name;
    this.title = title;
    this.age = age;
    this.fave = fave;
    this.printInfo = function() {
        console.log("Name: " + name + "\nJob Title: " + title + "\nAge: " + age + "\nFavorite Programming Language: " + fave + "\n");
    }
}

var jason = new programmer("Jason Saenz", "Head Genius in Charge", 36, "JS");
var dale = new programmer("Dale Meadows", "English Teacher", 33, "English")

jason.printInfo();
dale.printInfo();