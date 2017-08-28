$(document).ready(function () {
	
	$("#stream-list .container .stream-row:last-child").fadeIn(4000);
	
	$("#add-stream-button").on("click", function (){
		
		if($("#stream-name-input").val().trim() !== "" && $("#stream-name-input").val() != null){
			
			var username = $("#stream-name-input").val();
			var requestUserURL = "https://wind-bow.glitch.me/twitch-api/users/";
			requestUserURL += username;
			requestUserURL += "?callback=?";
			
			$.getJSON(requestUserURL, function (data1) {
				
				if(data1.hasOwnProperty("error")){
					
					$("#error-message").html("User not found");
					
				}else{
					
					var isStreaming = false;
					var gameName = "";
					
					var requestStreamURL = "https://wind-bow.glitch.me/twitch-api/streams/";
					requestStreamURL += username;
					requestStreamURL += "?callback=?";
					
					$.getJSON(requestStreamURL, function (data2) {
						
						if(data2["stream"] != null){
							isStreaming = true;
							gameName = data2["stream"]["game"];
							console.log(gameName);
						}
						
						var html = "<div class='row row-centered'>";
						
						html += "<div class='col-xs-3 col-center picture-container'>";
						
						html += "<a href='https://twitch.tv/'" + username + "target='_blank'>";
						
						html += "<img src=" + data1["logo"] + " alt='user's profile picture'>"; 
						
						console.log("Logo " + data1["logo"]);
						
						html += "</a>";
						
						html += "</div>";
						
						html += "<div class='col-xs-6 col-center info-container'>";
						
						html += "<span id='stream-name'>" + data1["display_name"] + "</span>";
						
						html += "<br>";
						
						html += "<br>";
						
						html += "<span id='online-status' " 
						
						if(isStreaming){
							html += "class='online'>";
							html += gameName;
							console.log("Inside isStreaming if statement");
						}else{
							html += "class='offline'>";
							html += "Offline";
							console.log("In else statement");
						}
						
						html += "</span>";
						
						html += "</div>"; 
						
						html += "<div class='col-xs-3 col-center remove-container'>";
						
						html += "<span class='remove'>X</span>";
						
						html += "</div>";
						
						html += "</div>";
						
						console.log(html);
						
						$("#stream-list .container").append(html);
						
						$("#stream-list .container .stream-row:last-child").fadeIn(4000);
						
					});
					/*
					var html = "<div class='row row-centered'>";
					
					html += "<div class='col-xs-3 col-center picture-container'>";
					
					html += "<a href='https://twitch.tv/'" + username + "target='_blank'>";
					
					html += "<img src=" + data["logo"] + "alt='user's profile picture'>"; 
					
					html += "</a>";
					
					html += "</div>";
					
					html += "<div class='col-xs-6 col-center info-container'>";
					
					html += "<span id='stream-name'>" + data["display_name"] + "</span>";
					
					html += "<br>";
					
					html += "<br>";
					
					html += "<span id='online-status' " 
					
					if(isStreaming){
						html += "class='online'>";
						html += gameName;
						console.log("Inside isStreaming is statement");
					}else{
						html += "class='offline'>";
						html += "Offline";
						console.log("In else statement");
					}
					
					html += "</span>";
					
					html += "</div>"; 
					
					html += "<div class='col-xs-3 col-center remove-container'>";
					
					html += "<span class='remove'>X</span>";
					
					html += "</div>";
					
					html += "</div>";
					
					console.log(html);
					
					$("#stream-list .container").append(html);
					
					$("#stream-list .container .stream-row:last-child").fadeIn(4000);
					
					*/
					
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