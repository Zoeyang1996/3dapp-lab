//JavaScript Gallery Generator
//XMLHttpRequest Object
$(document).ready(function () {
    var xmlHttp = new XMLHttpRequest();
    //var numberofColumns = 4;
    var htmlCode = "";
    var response;
    var send = "../hook.php";
    xmlHttp.open("GET", send, true);
    xmlHttp.send(null);

    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4) {
            // Response handler code
            response = xmlHttp.responseText.split("~");

            for (var i = 0; i < response.length; i++) {
                //provide a link to the image
                htmlCode += '<a href= "' + 'images' + response[i] + '">';
                htmlCode += '<img class="card-img-top img-thumbnail" src="images' + response[i] + '"/>';
                htmlCode += '</a>';


            }

            document.getElementById('gallery_coke').innerHTML = htmlCode;
            document.getElementById('gallery_sprite').innerHTML = htmlCode;
        }
    };

});
