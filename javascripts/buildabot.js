//function 1
function CatBot () {
  this.type = null;
  this.health = 100;
  this.baseDamage = Math.floor(Math.random() * 10);
  this.weapon = null;
}
console.log("Catbot", CatBot);

CatBot.prototype = new CatBot();
    //function 1
    CatBot.prototype.pounce = function (target) {
      this.totalDamage = this.baseDamage + this.weapon.damage;
      target.life -= this.totalDamage;
    }

CatBot.prototype.hiss = function (fishbreath) {
      this.totalDamage = this.baseDamage + this.weapon.damage;
      target.life -= this.totalDamage;
    }


      function AerialCat () {
        this.type = "Fit";
        this.attackType = "Aerial";
      }

AerialCat.prototype = new CatBot();

      function NinjaCat () {
        this.type = "Fit";
        this.baseDamage += 30;
        this.attackType = "Aerial"
      }
console.log("NinjaCat", NinjaCat);

          NinjaCat.prototype = new AerialCat();
console.log("AerialCat", AerialCat);
      function stealthyCat () {
        this.baseDamage += 60;
      }

          StealthyCat.prototype = new AerialCat();

      function StealthyCat () {
        this.type = "Fit"
        this.attackType = "take a nap";
      }
console.log("StealthyCat", stealthyCat);

//function 3
// GroundCat.prototype = new CatBot();

      function FatCat () {
        this.type = "Chubby";
        this.baseDamage += 5;
      }
        //function4
        // FatCat.prototype = new GroundCat();

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
        //function 5
        //SquishyCat.prototype = new GroundCat();

//function 6
//var ScratchyCat = new ScratchyCat();

//function7
//ScratchyCat.weapon = new LongNails();
//console.log("ScratchyCat", ScratchyCat.life);

//function10

var fishbreath = this.baseDamage += 10 + this.weaponDamage;

var SmellyCat = new CatBot();
  this.type = "Stinky";
  this.baseDamage += 400;
  this.weapon = fishbreath;


var GroundCat = new CatBot();
  this.type = "GroundCat";
  this.baseDamage += 600;
  //this.weapon = glitter;
  this.weaponDamage += 200;

var AerialCat = new CatBot();
  this.type = "AerialCat";
  this.baseDamage += 700;
  //this.weapon += glitter;
  this.weaponDamage += 200;

//function8


//function9  
//SmellyCat.attack(ScratchyCat);
//console.log("ScratchyCat", ScratchyCat.life);

function LitterBox () {

}

console.log("SmellyCat", SmellyCat);
console.log("GroundCat", GroundCat);
console.log("AerialCat", AerialCat);
// console.log("SmellyCat", SmellyCat);