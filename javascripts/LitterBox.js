"use strict";

var CatBotFight = (function (LitterBox){

let selectedCatbot = null;
let selectedWeapon = null

let litterBox = function() {
	this.player1 = null;
	this.player2 = null;
	this.catbotAttackText = []; //battletext
	this.player1StartHealth = 0;
	this.player2StartHealth = 0;
};

$(document).ready(function() {

	const $player1Name = $('#robot1Name');
	const $player2Name = $('#robot2Name');
	const $catFightText = $('#catFightText');//combat

	//attack
	function attack() {
		litterBox.Player1.catbotType.totalDamage = litterBox.Player1.catbotType.baseDamage + litterBox.Player1.weaponType.damage + Math.floor(Math.random() * 500) + 25;
		litterBox.Player2.catbotType.totalDamage = litterBox.Player2.catbotType.baseDamage + litterBox.Player2.weaponType.damage + Math.floor(Math.random() * 500) + 25;
		
		litterBox.Player1.catbotType.life -= litterBox.Player2.catbotType.totalDamage;
  		litterBox.Player2.catbotType.life -= litterBox.Player1.catbotType.totalDamage;
		
		$playerText.append(`<div>${litterBox.Player1.playerName} hits for ${litterBox.Player1.catbotType.totalDamage} damage.</div>`);
  		$playerText.append(`<div>${litterBox.Player2.playerName} hits for ${litterBox.Player2.catbotType.totalDamage} damage.</div>`);

  		$('#player1Life').html(`${litterBox.Player1.catbotType.life}`);
  		$('#player2Life').html(`${litterBox.Player2.catbotType.life}`);
	
  		winner(litterBox);
	}

function winner(litterBox){
	console.log("litterBox", litterBox);
	if(litterBox.Player1.catbotType.life < 1){
		$catFightText.append(`<div><h1>${litterBox.Player1.playerName}'s  ${litterBox.Player2.catbotType.type} ${litterBox.Player2.catbotType.name} defeats ${litterBox.Player1.playerName}'s ${litterBox.Player1.catbotType.type} ${litterBox.Player1.catbotType.name} with a ${litterBox.Player2.weaponType.weapon}!</h1></div>`);
	}
	else if(LitterBox.Player2.catbotType.life < 1){
		$catFightText.append(`<div><h1>${litterBox.Player1.playerName}'s ${litterBox.Player1.catbotType.type} ${litterBox.Player1.catbotType.name} defeats ${litterBox.Player2.playerName}'s ${litterBox.Player2.catbotType.type} ${litterBox.Player2.catbotType.name} with a ${litterBox.Player1.weaponType.weapon}!</h1></div>`);
	}
}

setInterval (() => {
	$('#catFightText').children().first().fadeOut(1000).remove();
}, 3000);

//call attack
$(".attackButton").click(function(e) {
	attack();
});

function setupLitterBox() {
	$catFightText.text("");
$player1Name.text(litterBox.Player1.playerName);
$player2Name.text(litterBox.Player2.playerName);
$('#robot1Type').html(`${litterBox.Player1.catboxType.name}`);
$('#robot2Type').html(`${litterBox.Player2.catboxType.name}`);
$('#player1Life').html(`${litterBox.Player1.catboxType.life}`);
$('#player2Life').html(`${litterBox.Player2.catboxType.life}`);
}


$(document).on("click", ".robotList1", function(e) {
	let selectedCatbot = $(this).text();
	let player1Name = $("#player1Name").val();

	var selectedcatbot = new CatBotFight.litterBox[selectedCatbot]();

	CatBotFight.Player1 = new CatBotFight.Player(player1Name,selectedcatbot);
	$('#weaponList1').html(`${litterBox.Player1.catbotType.name} Selected
    		<div class="dropdown">
  				<button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" 	
  					data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    						Choose a Weapon
    				<span class="caret"></span>
  				</button>
  				<ul class="dropdown-menu" id="player1weapondropdown" aria-labelledby="dropdownMenu1">
    				<li><a href="#" class="weaponList1">Bubbles</a></li>
    				<li><a href="#" class="weaponList1">Glitter</a></li>
   				<li><a href="#" class="weaponList1">Fishbreath</a></li>
   				<li><a href="#" class="weaponList1">CatSpit</a></li>
  				</ul>
			</div><div id="weapon1Selected"></div>`);
			$(document).on("click", ".weaponList1", function(e){
				let selectedWeapon = $(this).text();
				litterBox.Player1.weaponType = new CatBotFight.Kit.WeaponType[selectedWeapon]();

				$('#weapon1Selected').html(`${litterBox.Player1.weaponType.weapon}`);				
			});
		});

			$(document).on("click", ".robotList2", function(e) {
    	let selectedCatbot = $(this).text();
    	let player2Name = $("#player2Name").val();
    
    	var selectedcatbot2 = new CatBotFight.CatHouse[selectedcatbot2]();
    	CatBotFight.Player2 = new CatBotFight.Player(player2Name,selectedcatbot2);


    	$('#weaponList2').html(`${litterBox.Player2.catBotType.name} Selected 
    		<div class="dropdown">
  				<button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" 	
  					data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    						Choose a Weapon
    				<span class="caret"></span>
  				</button>
  				<ul class="dropdown-menu" id="player2weapondropdown" aria-labelledby="dropdownMenu1">
    				<li><a href="#" class="weaponList2">Bubbles</a></li>
    				<li><a href="#" class="weaponList2">Glitter</a></li>
   					<li><a href="#" class="weaponList2">Fishbreath</a></li>
   					<li><a href="#" class="weaponList2">CatSpit</a></li>
  				</ul>
			</div><div id="weapon2Selected"></div>`);
			$(document).on("click", ".weaponList2", function(e){
				let selectedWeapon = $(this).text();
				litterBox.Player2.weaponType = new CatBotFight.Kit.WeaponType[selectedWeapon]();

				$('#weapon2Selected').html(`${litterBox.Player2.weaponType.weapon}`);				
			});

   	});

$('#fightButton').on('click' , function(){

		$('#player-setup').addClass('hide');
		$('#litterBox').removeClass('hide');
		setupLitterBox();

	});

  	
  	//reset button
	$('#resetButton').on('click' , function(){

		$('#litterBox').addClass('hide');
		$('#player-setup').removeClass('hide');

	});



});

return LitterBox;
})(CatBotFight || {});


// let $Player1 = new DroneCat();
// let $Player2 = new LandCat();
// let $attackButton = $("#attack");
// let $player1;
// let $player2;
// let player1;
// let player2;
// let $battleResults = $("#battle-results");
// let $battleDiv = $("#litterbox");
// let $createPlayers = null;

// $startgame.click(() => {

//   $player1 = $("#robotNameInput1").val();
//   $player2 = $("#robotNameInput2").val();
//   let $playerSelection1 = $("#playerName").val();
//   let $playerSelection2 = $("#playerName2").val();
    
//     if ($player1 !== "" && $player2 !== "" && $playerSelection1 !== false && $playerSelection2 !== false) {
//     $playerName.addClass("hidden") && $playerName2.addClass("hidden");   //hide player name inputs & animal selectors
//     $battleDiv.removeClass("hidden"); //reveals the battleground
//     player1 = Fighter1.createPlayers($textInput1, "Fighter1");//make the animal objects
//     player2 = Fighter2.createPlayers($textInput2, "Fighter2");//make the animal objects
//     $statUpdater = player1, player2, $player1, $player2;   //updates the inner html with the stats
//   } else {
//     $battleResults.html(`<h1>Please choose a player</h1>`);
//   }
// console.log(battleResults);

// });






// DroneCat.prototype.pounce = function (target) {
//       this.totalDamage = this.baseDamage + this.weapon.damage;
//       this.health -= this.totalDamage;
//     };

// LandCat.prototype.hiss = function (fishbreath) {
//       this.totalDamage = this.baseDamage + this.weapon.damage;
//       target.health -= this.totalDamage;
//     };
