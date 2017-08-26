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
					
					var html = "<div class='stream'>";
					
					html += "<div class='img-container'>";
					
					html += "<a href='https://www.twitch.tv/" + $("#stream-name").val().trim() + "' target='_blank'>"; 
					
					html += "<img src='" + data["logo"] + "' alt='user's profile picture'>";
					
					html += "</a>";
					
					html += "</div>";
					
					html += "</div>";
					
					$("#stream-list").append(html);
					
					$(".modal").modal("hide");
				}
				
			});
			
		}else{
			$("#error-message").html("Please enter a username");
		}
		
	});
	
	$("button.close").on("click", function () {
		$("#error-message").html("");
	})
	
})