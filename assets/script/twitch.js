$(document).ready(function () {
	
	
	$("#add-stream-button").on("click", function (){
		
		if($("#stream-name").val().trim() !== "" && $("#stream-name").val() != null){
			
			var username = $("#stream-name").val();
			var requestURL = "https://wind-bow.glitch.me/twitch-api/users/";
			requestURL += username;
			requestURL += "?callback=?";
			
			$.getJSON(requestURL, function (data) {
				
			});
			
		}else{
			$("#error-message").html("Please enter a username");
		}
		
	});
	
	$("button.close").on("click", function () {
		$("#error-message").html("");
	})
	
})