function CatBot () {
  this.type = null;
  this.health = 100;
  this.baseDamage = Math.floor(Math.random() * 10);
  this.weapon = null;
}

Robot.prototype.pounce = function (target) {
  this.totalDamage = this.baseDamage + this.weapon.damage;
  target.life -= this.totalDamage;
}

Robot.protoype.kill = function (drain) {
	this.drainHealth = this.health - this.health;
	drain.life = this.drainHealth
}

function AerialCat () {
  this.type = "Fit";
  this.attackType = "Aerial";
}

AerialCat.prototype = new CatBot();

function NinjaCat () {
  this.baseDamage += 30;
}

NinjaCat.prototype = new AerialCat();

function stealthyCat () {
  this.baseDamage += 60;
}

StealthyCat.prototype = new AerialCat();

function StealthyCat () {
  this.attackType = "take a nap";
}

GroundCat.prototype = new CatBot();

function FatCat () {
  this.type = "Chubby";
  this.baseDamage += 5;
}

FatCat.prototype = new GroundCat();

function LazyCat () {
  this.baseDamage += 3;
}

LazyCat.prototype = new FatCat();

function SleepyCat () {
  this.baseDamage += 1;
}

SleepyCat.prototype = new FatCat();

function SquishyCat () {
  this.type = "Intelligant";
  this.baseDamage += 200;
}

SquishyCat.prototype = new GroundCat();

var ScratchyCat = new ScratchyCat();
ScratchyCat.weapon = new LongNails();
console.log("ScratchyCat", ScratchyCat.life);

var SmellyCat = new CatBot();
SmellyCat.weapon = new Fishbreath();
SmellyCat.attack(ScratchyCat);
console.log("ScratchyCat", ScratchyCat.life);

function LitterBox () {

}

console.log("SmellyCat", SmellyCat);