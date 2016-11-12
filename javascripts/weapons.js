"use strict";

var CatBotFight = (function (weaponSelect){

weaponSelect.Kit = {};

weaponSelect.Kit.WeaponType = function(){
  this.weapon = "";
  this.damaage = 0;
};

weaponSelect.Kit.WeaponType.Bubbles = function() {
  this.weapon = "Bubbles";
  this.damage = 5;
};
weaponSelect.Kit.WeaponType.Bubbles.prototype = new weaponSelect.Kit.WeaponType();

weaponSelect.Kit.WeaponType.Glitter = function() {
  this.weapon = "Glitter";
  this.damage = 30;
};
weaponSelect.Kit.WeaponType.Glitter.prototype = new weaponSelect.Kit.WeaponType();

weaponSelect.Kit.WeaponType.Fishbreath = function() {
  this.weapon = "Fishbreath";
  this.damage = 50;
};
weaponSelect.Kit.WeaponType.Fishbreath.prototype = new weaponSelect.Kit.WeaponType();

weaponSelect.Kit.WeaponType.Catspit = function() {
  this.weapon = "Cat Spit";
  this.damage = 30;
};
weaponSelect.Kit.WeaponType.Catspit.prototype = new weaponSelect.Kit.WeaponType();


// function Weapon() {
// 	this.damage = 5;
// 	this.name = "";
// }

// function CloseRange() {
// 	this.type = "close range";
// }
// CloseRange.prototype = new Weapon();

// function LongRange() {
// 	this.type = "long range";
// }
// LongRange.prototype = new Weapon();

// function Bubbles() {
//   this.damage += 15;
//   this.name = "Bubbles";
// }
// Bubbles.prototype = new LongRange();

// function Glitter() {
//   this.damage += 10;
//   this.name = "Glitter";
// }
// Glitter.prototype = new CloseRange();

// function Fishbreath() {
//   this.damage += 40;
//   this.name = "Fishbreath";
// }
// Fishbreath.prototype = new LongRange();

// function Catspit() {
//   this.damage += 30;
//   this.name = "Catspit";
// }
// Catspit.prototype = new CloseRange();

// let catspit = new Catspit();
// console.log("catspit", catspit);

// let bubbles = new Bubbles();
// console.log("bubbles", bubbles);

// SleeperCat.weapon = new Glitter();
// LandCat.weapon = new Catspit();
// DroneCat.weapon = new Bubbles();


return weaponSelect;
})(CatBotFight || {});



