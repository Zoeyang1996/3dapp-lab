// JavaScript Document
var counter = 0;
$(document).ready(function() {
	
	selectPage();
	selectModel();

	function selectPage() {

		$('#home').show();
		$('#about').hide();
		$('#models').hide();
		$('#interaction').hide();
		$('#cokeDescription').hide();
		$('#spriteDescription').hide(); 
		$('#pepperDescription').hide(); 


		$('#navHome').click(function(){
			$('#home').show();
			$('#about').hide();
			$('#models').hide();
			$('#interaction').hide();
			$('#cokeDescription').hide();
			$('#spriteDescription').hide(); 
			$('#pepperDescription').hide(); 	  
		});

		$('#navAbout').click(function(){
			$('#home').hide();
			$('#about').show();
			$('#models').hide();
			$('#interaction').hide();
			$('#cokeDescription').hide();
			$('#spriteDescription').hide(); 
			$('#pepperDescription').hide(); 	  
		});

		$('#navModels').click(function(){
			$('#home').hide();
			$('#about').hide();
			$('#models').show();
			$('#interaction').show(); 
			$('#cokeDescription').show();
			$('#spriteDescription').hide(); 
			$('#pepperDescription').hide(); 
		});
	}

	function selectModel() {

		$('#navCoke').click(function(){
			$('#coke').show();
			$('#sprite').hide();
			$('#pepper').hide();
			$('#interaction').show(); 
			$('#cokeDescription').show();
			$('#spriteDescription').hide(); 
			$('#pepperDescription').hide(); 
		});

		$('#navSprite').click(function(){
			$('#coke').hide();
			$('#sprite').show();
			$('#pepper').hide();
			$('#interaction').show(); 
			$('#cokeDescription').hide();
			$('#spriteDescription').show();
			$('#pepperDescription').hide();  	  	  
		});

		$('#navPepper').click(function(){
			$('#coke').hide();
			$('#sprite').hide();
			$('#pepper').show();
			$('#interaction').show(); 
			$('#cokeDescription').hide();
			$('#spriteDescription').hide(); 
			$('#pepperDescription').show(); 	   
		});
	}

});

function changeLook() {
	counter += 1;
	switch (counter) {
		case 1:
			document.getElementById('bodyColor').style.backgroundColor = 'black';
			document.getElementById('headerColor').style.background = 'linear-gradient(to right, red, grey)';
			document.getElementById('footerColor').style.background = 'linear-gradient(to right, red, grey)';
			break;
		case 2:
			document.getElementById('bodyColor').style.backgroundColor = 'red';
			document.getElementById('headerColor').style.background = 'linear-gradient(to right, black, red)';
			document.getElementById('footerColor').style.background = 'linear-gradient(to right, black, red)';
			break;
		case 3:
			document.getElementById('bodyColor').style.backgroundColor = 'white';
			document.getElementById('headerColor').style.background = 'linear-gradient(to right, red, black)';
			document.getElementById('footerColor').style.background = 'linear-gradient(to right, red, black)';
			break;
		case 4:
				document.getElementById('bodyColor').style.backgroundColor = 'grey';
				document.getElementById('headerColor').style.background = 'linear-gradient(to right, red, black)';
				document.getElementById('footerColor').style.background = 'linear-gradient(to right, red, black)';
				break;
	}
}

function changeBack() {
	document.getElementById('bodyColor').style.backgroundColor = 'lightgrey';
	document.getElementById('headerColor').style.background = 'linear-gradient(to right, black, red)';
	document.getElementById('footerColor').style.background = 'linear-gradient(to right, black, red)';
}

