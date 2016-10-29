/*
  ROBOT WARS
 */

function Gun () {
  this.damage = 10;
}

function Flamethrower () {
  this.damage = 400;
}

function Bubbles () {
  this.damage = 10000;
}

function Robot () {
  this.baseDamage = Math.floor(Math.random() * 10);
  this.life = 100;
  this.weapon = null;
}
Robot.prototype.attack = function (target) {
  this.totalDamage = this.baseDamage + this.weapon.damage;
  target.life -= this.totalDamage;
}

function AerialDrone () {
  this.type = "Drone";
  this.attackType = "Aerial";
}
AerialDrone.prototype = new Robot();

function NinjaDrone () {
  this.baseDamage += 10;
}
NinjaDrone.prototype = new AerialDrone();

function Raptor () {
  this.baseDamage += 20;
}
Raptor.prototype = new AerialDrone();

function GroundRobot () {
  this.attackType = "Earth Bound";
}
GroundRobot.prototype = new Robot();

function TankRobot () {
  this.type = "Tank";
  this.baseDamage += 5;
}
TankRobot.prototype = new GroundRobot();

function Hulk () {
  this.baseDamage += 145;
}
Hulk.prototype = new TankRobot();

function BigFoot () {
  this.baseDamage += 15;
}
BigFoot.prototype = new TankRobot();

function Dragon () {
  this.type = "FireBreather";
  this.baseDamage += 200;
}
Dragon.prototype = new GroundRobot();

var raptor = new Raptor();
raptor.weapon = new Bubbles();
console.log("raptor", raptor.life);

var smaug = new Dragon();
smaug.weapon = new Flamethrower();
smaug.attack(raptor);
console.log("raptor", raptor.life);

function Battleground () {

}

console.log("smaug", smaug);