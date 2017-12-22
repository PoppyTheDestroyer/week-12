function character(name, profession, gender, age, strength, hitPoints) {
  this.name = name;
  this.profession = profession;
  this.gender = gender;
  this.age = age;
  this.strength = strength;
  this.hitPoints = hitPoints;
  this.printStats = function() {
    console.log(
      "Name: " + this.name,
      "\nProfession: " + this.profession,
      "\nGender: " + this.gender,
      "\nAge: " + this.age,
      "\nStrength: " + this.strength,
      "\nHit Points: " + this.hitPoints + "\n"
    );
  };
}

var jason = new character(
  "Jason",
  "Professional at being Awesome",
  "male",
  36,
  100,
  100
);
var daniel = new character("Daniel", "Amateur Knitter", "male", 45, 5, 5);

jason.printStats();
daniel.printStats();

function isAlive(name) {
  if (name.hitPoints > 0) {
    console.log(name.name + " is Alive.");
  } else {
    console.log(name.name + " is dead, dead, dead.");
  }
}

function attack(attacker, defender) {
  defender.hitPoints -= attacker.strength;
  console.log(
    attacker.name +
      " attacked " +
      defender.name +
      " for " +
      attacker.strength +
      " damage! " +
      defender.name +
      " now has " +
      defender.hitPoints +
      " hitpoints."
  );
}

function levelUp(name) {
  name.age += 1;
  name.strength += 5;
  name.hitPoints += 5;
  console.log(name.name + " leveled up!");
}

attack(daniel, jason);
isAlive(jason);
attack(jason, daniel);
isAlive(daniel);
levelUp(jason);
