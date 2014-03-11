(function(window){

	$(document).ready(function(){
		//functionality of the dirty beds button in the menu
		//prints out a table of all the beds which are dirty
		$("#dirtyBedsButton").click(function(){
			var content="";
			$("#mainInfo").html(content);
			$.get("/finalproject/cleaner_Con/load_Dirty_Beds",function(data){
				var i;
				content = "<div class='row'><h2>Dirty beds</h2></div><div class='row'></div<div class='pre-scrollable tblHeight'><table id='mytable' class='table table-striped table-bordered'><thead><tr><th>Bed</th><th>Room</th><th>Ward</th><th>Availability</th></tr></thead><tbody>";
				for (i = 0; i < data.length; i++) {
					content += '<tr><td>' + data[i].bedID + '</td>' + '<td>' + data[i].roomID + '</td>'+'<td>'+data[i].wardID+'</td>' + '<td>' + data[i].availability + '</td></tr>';
				}
				$("#mainInfo").html(content);
			},"json");
		});
		
		//profile button functionality
		//pulls up all the current users data to the screen
		$("#profileButton").click(function(){
			var content="";
			$("#mainInfo").html(content);
			$.get("/finalproject/profile_Con/load_profile",function(data){
				var i;
				content="";
				for(i=0;i<data.length;i++){
					content+="thisisJon"
				}
			},"json");
		});
		
		
		
		
		
		
		
		
	});
}(this));