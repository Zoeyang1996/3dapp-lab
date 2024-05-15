//JavaScript Gallery Generator
//XMLHttpRequest Object
$(document).ready(function() {
var xmlHttp = new XMLHttpRequest ();
//var numberofColumns = 4;
var htmlCode = "";
var response;
    var send = "scripts/hook.php";
    xmlHttp.open("GET", send, true);
    xmlHttp.send(null);

    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState == 4) {
            // Response handler code
            response = xmlHttp.responseText.split("~");
			htmlCode += '<tr>';
			for (var i=0;i<response.length;i++) {
				htmlCode += '<td id="gallery_cell">';
				htmlCode += '<a href="' + 'images/' + response[i] +'">';
				htmlCode += '<img src="images/' + response[i] + '" id="image_thumbnail"/>';
				htmlCode += '</a>';
				htmlCode += '</td>';
				if(((i+1)%numberOfColumns) == 0) {
					htmlCode += '</tr><tr>';
				}
			}
			htmlCode += '</tr>';
			document.getElementById('gallery').innerHTML = htmlCode;
        }
    }

} );