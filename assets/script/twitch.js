$(document).ready(function () {
	
	var streamArray = [];
	
	$("#add-stream-button").on("click", function (){
		
		if($("#stream-name-input").val().trim() !== "" && $("#stream-name-input").val() != null){
			
			var username = $("#stream-name-input").val();
			
			for(var x = 0; x < streamArray.length; x++){
				if(username === streamArray[x]){
					$("#error-message").html("Channel has already been entered");
					return;
				}
			}
			
			var requestUserURL = "https://wind-bow.glitch.me/twitch-api/users/";
			requestUserURL += username;
			requestUserURL += "?callback=?";
			
			$.getJSON(requestUserURL, function (data1) {
				
				if(data1.hasOwnProperty("error")){
					
					$("#error-message").html("User not found");
					
				}else{
					
					streamArray.push(username);
					
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
						
						html += "<span class='stream-name'>" + data1["display_name"] + "</span>";
						
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
				}
				
			});
			
		}else{
			$("#error-message").html("Please enter a username");
		}
		
	});
	
	$("button.close").on("click", function () {
		$("#error-message").html("");
	});
	
	$(document).on("click", ".remove", function () {
		$(this).parent().parent().fadeOut(1000, function () {
			$(this).remove();
		});
	});
	
	$("#online-button").click(function () {
		$("#stream-list .container").find(".offline").each(function(i){
			if(i == $("#online-status.offline").length - 1){
				$(this).parent().parent().fadeOut(1000, function () {
					$("#stream-list .container").find(".online").each(function () {
						$(this).parent().parent().fadeIn(1000);
					})
				});
			}
			else{
				$(this).parent().parent().fadeOut(1000);
			}
		});
	});
	
	$("#offline-button").click(function () {
		$("#stream-list .container").find(".online").each(function(i){
			if(i == $("#online-status.online").length - 1){
				$(this).parent().parent().fadeOut(1000, function () {
					$("#stream-list").find(".offline").each(function () {
						$(this).parent().parent().fadeIn(1000);
					})
				});
			}else{
				$(this).parent().parent().fadeOut(1000);
			}	
		});
	});
	
	$("#all-button").click(function () {
		$("#stream-list .container").find("div").fadeIn(1000);
	});
	
})