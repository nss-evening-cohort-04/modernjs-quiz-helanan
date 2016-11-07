//new jquery objects created to hold the new item button
//cached in variables

$(function() {
	var $newRobotButton = $('#newRobotButton');
	var $newRobotForm = $('#newRobotForm');
	var $textInput = $('input:text');

	$newRobotButton.show();  //when page loads the css hides new robot button and shows form
	$newRobotForm.hide();

	$('#showForm').on('click', function(){  //when user clicks new robot button (showform) new robot form is hidden and form shown
		$newRobotButton.hide();
		$newRobotForm.show();
	});

	$newRobotForm.on('submit', function(e) { //when form is submitted an anonymous function is called, and passed event object
		e.preventDefault(); // stop form from being submitted
		var newText = $textInput.val(); //text selector picks the input element with attribute of text and .val method gts the value user entered
		$('li:last').after('<li>' + newText + '</li>'); //value stored in variable new text
		$newRobotForm.hide(); //a new robot player is added to end of list using .after method
		$newRobotButton.show(); //form is then hidden, new button shown again and content of text input is emptied so user can add new entry
		$textInput.val('');
	});

});

$(function() {
  var robotName, robotType, healthStatus;

  $('ul').on(
    'click mouseover',
    ':not(#four)',
    {player: 'One'},
    function(e) {
      robotName = 'Name: ' + e.target.textContent + '<br />';
      robotType = 'Type: ' + e.data.status + '<br />';
      healthStatus = 'Health: ' + event.target.id;
      $('#notes').html(robotName + robotType + healthStatus);
    }
  );

});