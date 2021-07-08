function shortUrl(){

	var input = document.querySelector("#url");
	var output = document.querySelector("textarea");
	var message = document.querySelector(".txt");
	var loader = document.querySelector(".loading");

	output.value = "";
	loader.style.display = "block";

	if(input.value =="" || input.value ==" ")
	{
		loader.style.display = "none";
		message.innerHTML = "<u>Error!</u><br>Url is Empty";
	} else{
		validate(input, loader, message, output);
	}
}


function validate(input, loader, message, output) {
    var pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    if (pattern.test(input.value)) {

		var url = "https://api.shrtco.de/v2/shorten?url="+input.value;
		$.getJSON({url: url, success: function(data){
			var short_link = data.result.full_short_link;

			loader.style.display = "none";
			output.value = short_link;
			output.select();
			document.execCommand("copy");
			message.innerHTML = "<u>Congratulation!</u><br>Your Short Link is<br>Copied to Clipboard.";
		}});

    } else{
		loader.style.display = "none";
    	message.innerHTML = "<u>Error!</u><br>Url is Not Valid";
    } 
}