"use strict";
//main CatBot Function

var CatBotFight = (function (catbotSelected) {

  catbotSelected = {};

  catbotSelected.CatBotType = function() {
    this.name = "";
    this.baseDamage = Math.floor(Math.random() * 100);
    this.life = 1000;

    this.toString = function() {
      return this.name;
    };
  };

  catbotSelected.CatBotType.DroneCat = function() {
    this.type = "Drone";
   };
  catbotSelected.CatBotType.DroneCat.prototype = new catbotSelected.CatBotType();

  catbotSelected.CatBotType.LandCat = function() {
    this.type = "Land";
  };
   catbotSelected.CatBotType.LandCat.prototype = new catbotSelected.CatBotType();

catbotSelected.CatBotType.SleeperCat = function() {
  this.type = "Sleeper";
};
   catbotSelected.CatBotType.SleeperCat.prototype = new catbotSelected.CatBotType();


 catbotSelected.NinjaCat = function() {
  this.baseDamage += 30;
  this.name = "NinjaCat";
  this.life += 80;
 };
 catbotSelected.NinjaCat.prototype = new catbotSelected.CatBotType.DroneCat();

 catbotSelected.FlyingCat = function() {
  this.baseDamage += 10;
  this.name = "Flying Cat"
  this.life += 200;
 };
 catbotSelected.FlyingCat.prototype = new catbotSelected.CatBotType.DroneCat();

catbotSelected.FatCat = function(){
  this.baseDamage += 12;
  this.name = "FatCat";
  this.life += 150;
};
 catbotSelected.FatCat.prototype = new catbotSelected.CatBotType.LandCat();


catbotSelected.SquishyCat = function(){
  this.baseDamage += 15;
  this.name = "SquishyCat";
  this.life += 250;
};
catbotSelected.SquishyCat.prototype = new catbotSelected.CatBotType.LandCat();

catbotSelected.LazyCat = function(){
  this.baseDamage += 2;
  this.name = "LazyCat";
  this.life += 400;
};
catbotSelected.LazyCat.prototype = new catbotSelected.CatBotType.SleeperCat();

catbotSelected.StealthyCat = function(){
  this.baseDamage += 20;
  this.name = "StealthyCat";
  this.life += 300;
};
catbotSelected.StealthyCat.prototype = new catbotSelected.CatBotType.SleeperCat();

return catbotSelected;
})(CatBotFight || {});

// function catBot () {
//   this.type = null;
//   this.health = Math.floor((Math.random() * 100) + 200);
//   this.baseDamage = Math.floor((Math.random() * 10) + 5);
//   this.weapon = null;
//   console.log(this);
// }

// function DroneCat () {
//   this.type = "Drone";
//   this.property = "air";
// }
// DroneCat.prototype = new CatBot();

// function LandCat() {
//     this.type = "land";
//     this.property = "outside";
//     this.attackType = "scratch";
// }
// LandCat.prototype = new CatBot();

// function SleeperCat(){
//     this.type = "land";
//     this.property = "inside";
//     this.attackType = "sleep";
// }
// SleeperCat.prototype = new CatBot();

// function NinjaCat(){
//   this.baseDamage += 30;
//   this.damgage = damageConfig(60, 110);
// }
// NinjaCat.prototype = new DroneCat();

// function FlyingCat(){
//   this.baseDamage += 10;
//   this.damgage = damageConfig(70, 100);
// }
// FlyingCat.prototype = new DroneCat();

// function FatCat(){
//   this.baseDamage += 12;
//   this.health += 2;
//   this.damgage = damageConfig(50, 80);
// }
// FatCat.prototype = new LandCat();

// function SquishyCat(){
//   this.baseDamage += 15;
//   this.health += 3;
//   this.damgage = damageConfig(70, 110);
// }
// SquishyCat.prototype = new LandCat();

// function LazyCat(){
//   this.baseDamage += 2;
//   this.health += 7;
//   this.damgage = damageConfig(60, 100);
// }
// LazyCat.prototype = new SleeperCat();

// function StealthyCat(){
//   this.baseDamage += 20;
//   this.health += 5;
//   this.damgage = damageConfig(50, 90);
// }
// StealthyCat.prototype = new SleeperCat();


