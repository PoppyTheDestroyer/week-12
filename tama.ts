class digitalPal {
    public constructor(hungry, sleepy, bored) {
        hungry = false;
        sleepy = false;
        bored = false;
        age = 0;
        function feed() {
            if (this.hungry === true) {
                console.log("That was yummy!")
            } else { this.sleepy === true };
        };
        function sleep() {
            if (this.sleepy === true) {
                console.log("Zzzzzzzz");
                this.sleepy === false;
                this.bored === true;
                function increaseAge() {
                    this.age += 1;
                    console.log("Happy Birthday to me! I am " + this.age + " time units old!")
                }
                increaseAge()
            } else {
                console.log("No way! I'm not tired!")
            };
        };
        function play() {
            if (bored === true) {
                console.log("Yay! Let's play!");
                bored === false;
                hungry === true;
            } else {
                console.log("Not right now. Later?")
            }
        }
        feed();
        sleep();
        play()
    }


var dog = new digitalPal(true, false, false)
dog.outside = false;
dog.bark = function () {
    console.log("Woof! Woof!")
}
dog.goOutside = function () {
    if (outside === false) {
        console.log("Yay! I love the outdoors!");
        dog.outside === true;
        dog.bark();
    } else {
        console.log("We're already outside though...")
    };
}
dog.goInside = function () {
    if (dog.outside === true) {
        console.log("Do we have to? Fine...");
        dog.outside === false;
    } else {
        console.log("But I'm already inside...")
    }
}

var cat = new digitalPal(false, true, false)
cat.houseCondition = 100;
cat.meow = function () {
    console.log("Meow! Meow!")
}
cat.destroyFurniture = function () {
    if (houseCondition > 0) {
        cat.houseCondition -= 10;
        console.log("MUAHAHAHAHA! TAKE THAT, FURNITURE!");
        this.bored === false;
        this.sleepy === true;
    }
}
cat.buyNewFurniture = function () {
    houseCondition += 50;
    console.log("Are you sure about that?")
}
