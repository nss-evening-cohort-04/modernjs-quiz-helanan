"use strict";

$(document).ready(function(){


function CatBot () {
  this.type = null;
  this.health = Math.floor((Math.random() * 100) + 100);
  this.damage = Math.floor((Math.random() * 10) + 5);
  this.weapon = null;
  console.log(this);
}

function DroneCat () {
  this.type = "Drone";
  this.property = "air";
}
DroneCat.prototype = new CatBot();

function LandCat() {
    this.type = "Land";
    this.property = "outside";
    this.attackType = "scratch";
}
LandCat.prototype = new CatBot();

function SleeperCat(){
    this.type = "land";
    this.property = "inside";
    this.attackType = "sleep";
}
SleeperCat.prototype = new CatBot();

function NinjaCat(){
  this.baseDamage += 30;
  this.damage += 10;
}
NinjaCat.prototype = new DroneCat();

function FlyingCat(){
  this.baseDamage += 10;
  this.damage += 40;
}
FlyingCat.prototype = new DroneCat();

function FatCat(){
  this.baseDamage += 12;
  this.health += 2;
  this.damage += 70;
}
FatCat.prototype = new LandCat();

function SquishyCat(){
  this.baseDamage += 15;
  this.health += 3;
  this.damage += 80;
}
SquishyCat.prototype = new LandCat();

function LazyCat(){
  this.baseDamage += 2;
  this.health += 7;
  this.damage += 67;
}
LazyCat.prototype = new SleeperCat();

function StealthyCat(){
  this.baseDamage += 20;
  this.health += 5;
  this.damage += 90;
}
StealthyCat.prototype = new SleeperCat();

let $startgame = $("#submitButton");
let player1 = new DroneCat();
let player2 = new LandCat();
console.log("player one", player1);
console.log("player two", player2);

 $startgame.on("click", function() {
 var userSelection1 = $('#select1').val();
 if (userSelection1 === "Ninja") {
   var Fighter1 = new NinjaCat();
 };

 if (userSelection1 === "Flying") {
   var Fighter1 = new FlyingCat();
 };

 if (userSelection1 === "Fat") {
   var Fighter1 = new FatCat();
 };

 if (userSelection1 === "Squishy") {
   var Fighter1 = new SquishyCat();
 };

 if (userSelection1 === "Lazy") {
   var Fighter1 = new LazyCat();
 };

 if (userSelection1 === "Stealthy") {
   var Fighter1 = new StealthyCat();
 }

});


$startgame.on("click", function() {
 var userSelection2 = $('#select2').val();
 console.log("userSelection2: ",userSelection2);
 if (userSelection2 === "Ninja") {
   var Fighter2 = new NinjaCat();
 };

 if (userSelection2 === "Flying") {
   var Fighter2 = new FlyingCat();
 };

 if (userSelection2 === "Fat") {
   var Fighter2 = new FatCat();
 };

 if (userSelection2 === "Squishy") {
   var Fighter2 = new SquishyCat();
 };

 if (userSelection2 === "Lazy") {
   var Fighter2 = new LazyCat();
 };

 if (userSelection2 === "Stealthy") {
   var Fighter2 = new StealthyCat();
 }
});

  let showSelection = $("#submitResult");  
  let outputDiv = $("#output");
  let submitBtn = $("#submitButton");
  let attackBtn = $("#attack");
  let select1 = $("#select1");
  let select2 = $("#select2");

var newPlayer1 = function newPlayer() {
  event.preventDefault();
  player1.name = $("#robotNameInput1").val();
  player2.name = $("#robotNameInput2").val();
  player1.catBotType = $("#select1").val();
  player2.catBotType = $("#select1").val();
  console.log('robot one', player1);
  console.log('robot two', player2);
let output = `<p>${player1.name} is the ${player1.catBotType} robot and starts with ${player1.health} health and ${player1.damage} damage.</p>`;
  output += `<p>${player2.name} is the ${player2.catBotType} robot and starts with ${player2.health} health and ${player2.damage} damage.</p>`;
  showSelection.append(output);
}

submitBtn.on("click", function(){
     console.log("submit", submitBtn);
  newPlayer1();
});
    
function attack () {
  player1.health -= player2.damage;
  player2.health -= player1.damage;

if (player1.health > 0 && player2.health > 0){
  let output = `<p>${player1.name}, the ${player1.type} robot, now has ${player1.health} health.</p>`;
    output += `<p>${player2.name}, the ${player2.type} robot, now has ${player2.health} health.</p>`;
    outputDiv.append(output);
} else if (player2.health < 0){
       let output = `<p>${player1.name} won the battle and defeated ${player2.name}.`;
       outputDiv.append(output);
     } else {
       let output = `<p>${player2.name} won the battle and defeated ${player1.name}.`;
       outputDiv.append(output);
       console.log("player2", player2);
     }
}

attackBtn.on("click", function(){
  attack();
  });

});

