$(document).ready(function () {
	
	
	$("#add-stream-button").on("click", function (){
		
		if($("#stream-name").val().trim() !== "" && $("#stream-name").val() != null){
			
			var username = $("#stream-name").val();
			var requestUserURL = "https://wind-bow.glitch.me/twitch-api/users/";
			requestUserURL += username;
			requestUserURL += "?callback=?";
			
			$.getJSON(requestUserURL, function (data) {
				
				if(data.hasOwnProperty("error")){
					
					$("#error-message").html("User not found");
					
				}else{
					
					
					
					
				}
				
			});
			
			//$(".modal").modal("hide");
			
		}else{
			$("#error-message").html("Please enter a username");
		}
		
	});
	
	$("button.close").on("click", function () {
		$("#error-message").html("");
	})
	
})