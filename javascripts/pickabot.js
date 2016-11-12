"use strict";

var CatBotFight = (function (players){

	players.Player = function(name, catbotType, weaponType) {
		this.playerName = name || "CatBot";
		this.catbotType = catbotType;
		this.weaponType = weaponType;
	};

	players.Player1 = {};


	players.Player2 = {};

	return players;
})(CatBotFight || {});


// let $startgame = $('#startgame');
// let $textInput1 = $('#robotNameInput1');
// let $textInput2 = $('#robotNameInput2');
// let $playerOutput = $('#output');
// let $playerName = $('#playerName');
// let $playerName2 = $('playerName2');

// $(function() {
//   var textInput1, textInput2, playerName, playerName2;

// //   $('#startgame').on(
//     'click mouseover',
//     ':not(#four)',
//     {status: 'important'},
//     function(e) {
//       playerName = 'Item: ' + e.target.textContent + '<br />';
//       itemStatus = 'Status: ' + e.data.status + '<br />';
//       eventType = 'Event: ' + e.type;
//       $('#notes').html(listItem + itemStatus + eventType);
//     }
//   );

// });


// $textInput1.on("keydown", function() {
// 	$("robotNameInput1").text append("<b>" + $textInput1 + "</b>")
// 	console.log("hiii")
// });

// DroneCat.weapon = new Glitter();
// DroneCat.attack(LandCat);

// LandCat.attack(DroneCat);

// console.log("DroneCat", DroneCat);

// function attack() {
//       this.totalDamage = this.baseDamage + this.weapon.damage;
//       this.health -= this.totalDamage;
//       console.log("attack", attack);
//     };



// $startgame.on("click", function() {
// 	var userSelection1 = $('#select1').val();
// 	if (userSelection1 === "Ninja") {
// 		var Fighter1 = new NinjaCat();
// 	};

// 	if (userSelection1 === "Flying") {
// 		var Fighter1 = new FlyingCat();
// 	};

// 	if (userSelection1 === "Fat") {
// 		var Fighter1 = new FatCat();
// 	};

// 	if (userSelection1 === "Squishy") {
// 		var Fighter1 = new SquishyCat();
// 	};

// 	if (userSelection1 === "Lazy") {
// 		var Fighter1 = new LazyCat();
// 	};

// 	if (userSelection1 === "Stealthy") {
// 		var Fighter1 = new StealthyCat();
// 	}

// });


// $startgame.on("click", function() {
// 	var userSelection2 = $('#select2').val();
// 	console.log("userSelection2: ",userSelection2);
// 	if (userSelection2 === "Ninja") {
// 		var Fighter2 = new NinjaCat();
// 	};

// 	if (userSelection2 === "Flying") {
// 		var Fighter2 = new FlyingCat();
// 	};

// 	if (userSelection2 === "Fat") {
// 		var Fighter2 = new FatCat();
// 	};

// 	if (userSelection2 === "Squishy") {
// 		var Fighter2 = new SquishyCat();
// 	};

// 	if (userSelection2 === "Lazy") {
// 		var Fighter2 = new LazyCat();
// 	};

// 	if (userSelection2 === "Stealthy") {
// 		var Fighter2 = new StealthyCat();
// 	}
// });

// $attackButton.click(function() {
//   LandCat.damageConfig(player1, $player1) && DroneCat.damageConfig(player2, $player2);
//   LandCat.statUpdater(player1, player2, $player1, $player2) && DroneCat.statUpdater(player2, $player2);   //updates the inner html with the stats
// });



// $(function() {
//   var $playerName = $('#playerName').text( "Player1: " );
//   $('div').append('<p>' + $playerName  + '</p>');
// });

// $(function() {
//   var $playerName2 = $('#playerName2').text( "Player2: " );
//   $('playerName2').append('<p>' + $playerName2  + '</p>');
// });

// $( "#playerName" ).html( "Player1: " + );
// $( "#playerName2" ).html( "Player2: " + event.target.userSelection2 );
// });





	
	// console.log("Fighter1", Fighter1);
	// $textInput1.val()

	