(function(window){

	$(document).ready(function(){
		//functionality of the dirty beds button in the menu
		//prints out a table of all the beds which are dirty
		$("#dbtab").click(function(){
			$("#mainInfo").html("");
		});
		$("#obtab").click(function(){
			$("#mainInfo").html("");
		});
		$("#vbtab").click(function(){
			$("#mainInfo").html("");
		});
		$("#ptab").click(function(){
			$("#mainInfo").html("");
		});
		$("#dirtyBedsButton").click(function(){
			var content="";
			$.get("/finalproject/beds_Con/load_Dirty_Beds",function(data){
				var i;
				content = "<div class='row'></div<div class='pre-scrollable tblHeight'><table id='mytable' class='table table-striped table-bordered'><thead><tr><th>Bed</th><th>Room</th><th>Ward</th><th>Availability</th></tr></thead><tbody>";
				for (i = 0; i < data.length; i++) {
					content += '<tr><td>' + data[i].bedID + '</td>' + '<td>' + data[i].roomID + '</td>'+'<td>'+data[i].wardID+'</td>' + '<td>' + data[i].availability + '</td></tr>';
				}
				$("#mainInfo").html(content);
			},"json");
		});
		
		$("#occupiedBedsButton").click(function(){
			var content="";
			$.get("/finalproject/beds_Con/load_Occupied_Beds",function(data){
				var i;
				content = "<div class='row'></div<div class='pre-scrollable tblHeight'><table id='mytable' class='table table-striped table-bordered'><thead><tr><th>Bed</th><th>Room</th><th>Ward</th><th>Availability</th></tr></thead><tbody>";
				for (i = 0; i < data.length; i++) {
					content += '<tr><td>' + data[i].bedID + '</td>' + '<td>' + data[i].roomID + '</td>'+'<td>'+data[i].wardID+'</td>' + '<td>' + data[i].availability + '</td></tr>';
				}
				$("#mainInfo").html(content);
			},"json");
		});
		
		$("#vacantBedsButton").click(function(){
			var content="";
			$.get("/finalproject/beds_Con/load_Vacant_Beds",function(data){
				var i;
				content = "<div class='row'></div<div class='pre-scrollable tblHeight'><table id='mytable' class='table table-striped table-bordered'><thead><tr><th>Bed</th><th>Room</th><th>Ward</th><th>Availability</th></tr></thead><tbody>";
				for (i = 0; i < data.length; i++) {
					content += '<tr><td>' + data[i].bedID + '</td>' + '<td>' + data[i].roomID + '</td>'+'<td>'+data[i].wardID+'</td>' + '<td>' + data[i].availability + '</td></tr>';
				}
				$("#mainInfo").html(content);
			},"json");
		});
		
		$("#dirtyMedicalBeds").click(function(){
				var content=""
				$.get("/finalproject/beds_Con/find_Med_Wards",function(data){
				var i;
				content = "<div class='row'></div<div class='pre-scrollable tblHeight'><table id='mytable' class='table table-striped table-bordered'><thead><tr><th>Bed</th><th>Room</th><th>Ward</th><th>Availability</th></tr></thead><tbody>";
				for(i=0;i<data.length;i++){
					$.get("/finalproject/beds_Con/find_Ward_Dirty_Beds",{wardID:data[i].wardID},function(data2){
						var j;
						for (j = 0; j < data2.length; j++) {
							content += '<tr><td>' + data2[j].bedID + '</td>' + '<td>' + data2[j].roomID + '</td>'+'<td>'+data2[j].wardID+'</td>' + '<td>' + data2[j].availability + '</td></tr>';
						}
						$("#mainInfo").html(content);
					},"json");
				}
				
			},"json");
		});
		
		$("#occupiedMedicalBeds").click(function(){
				var content=""
				$.get("/finalproject/beds_Con/find_Med_Wards",function(data){
				var i;
				content = "<div class='row'></div<div class='pre-scrollable tblHeight'><table id='mytable' class='table table-striped table-bordered'><thead><tr><th>Bed</th><th>Room</th><th>Ward</th><th>Availability</th></tr></thead><tbody>";
				for(i=0;i<data.length;i++){
					$.get("/finalproject/beds_Con/find_Ward_Occupied_Beds",{wardID:data[i].wardID},function(data2){
						var j;
						for (j = 0; j < data2.length; j++) {
							content += '<tr><td>' + data2[j].bedID + '</td>' + '<td>' + data2[j].roomID + '</td>'+'<td>'+data2[j].wardID+'</td>' + '<td>' + data2[j].availability + '</td></tr>';
						}
						$("#mainInfo").html(content);
					},"json");
				}
				
			},"json");
		});
		
		$("#vacantMedicalBeds").click(function(){
				var content=""
				$.get("/finalproject/beds_Con/find_Med_Wards",function(data){
				var i;
				content = "<div class='row'></div<div class='pre-scrollable tblHeight'><table id='mytable' class='table table-striped table-bordered'><thead><tr><th>Bed</th><th>Room</th><th>Ward</th><th>Availability</th></tr></thead><tbody>";
				for(i=0;i<data.length;i++){
					$.get("/finalproject/beds_Con/find_Ward_Vacant_Beds",{wardID:data[i].wardID},function(data2){
						var j;
						for (j = 0; j < data2.length; j++) {
							content += '<tr><td>' + data2[j].bedID + '</td>' + '<td>' + data2[j].roomID + '</td>'+'<td>'+data2[j].wardID+'</td>' + '<td>' + data2[j].availability + '</td></tr>';
						}
						$("#mainInfo").html(content);
					},"json");
				}
				
			},"json");
		});
		
		$("#dirtySurgicalBeds").click(function(){
			var content="";
			$.get("/finalproject/beds_Con/find_Surg_Wards",function(data){
				var i;
				content = "<div class='row'></div<div class='pre-scrollable tblHeight'><table id='mytable' class='table table-striped table-bordered'><thead><tr><th>Bed</th><th>Room</th><th>Ward</th><th>Availability</th></tr></thead><tbody>";
				for(i=0;i<data.length;i++){
					$.get("/finalproject/beds_Con/find_Ward_Dirty_Beds",{wardID:data[i].wardID},function(data2){
						var j;
						for (j = 0; j < data2.length; j++) {
							content += '<tr><td>' + data2[j].bedID + '</td>' + '<td>' + data2[j].roomID + '</td>'+'<td>'+data2[j].wardID+'</td>' + '<td>' + data2[j].availability + '</td></tr>';
						}
						$("#mainInfo").html(content);
					},"json");
				}
				
			},"json");
		});
		
		$("#occupiedSurgicalBeds").click(function(){
			var content="";
			$.get("/finalproject/beds_Con/find_Surg_Wards",function(data){
				var i;
				content = "<div class='row'></div<div class='pre-scrollable tblHeight'><table id='mytable' class='table table-striped table-bordered'><thead><tr><th>Bed</th><th>Room</th><th>Ward</th><th>Availability</th></tr></thead><tbody>";
				for(i=0;i<data.length;i++){
					$.get("/finalproject/beds_Con/find_Ward_Occupied_Beds",{wardID:data[i].wardID},function(data2){
						var j;
						for (j = 0; j < data2.length; j++) {
							content += '<tr><td>' + data2[j].bedID + '</td>' + '<td>' + data2[j].roomID + '</td>'+'<td>'+data2[j].wardID+'</td>' + '<td>' + data2[j].availability + '</td></tr>';
						}
						$("#mainInfo").html(content);
					},"json");
				}
				
			},"json");
		});
		
		$("#vacantSurgicalBeds").click(function(){
			var content="";
			$.get("/finalproject/beds_Con/find_Surg_Wards",function(data){
				var i;
				content = "<div class='row'></div<div class='pre-scrollable tblHeight'><table id='mytable' class='table table-striped table-bordered'><thead><tr><th>Bed</th><th>Room</th><th>Ward</th><th>Availability</th></tr></thead><tbody>";
				for(i=0;i<data.length;i++){
					$.get("/finalproject/beds_Con/find_Ward_Vacant_Beds",{wardID:data[i].wardID},function(data2){
						var j;
						for (j = 0; j < data2.length; j++) {
							content += '<tr><td>' + data2[j].bedID + '</td>' + '<td>' + data2[j].roomID + '</td>'+'<td>'+data2[j].wardID+'</td>' + '<td>' + data2[j].availability + '</td></tr>';
						}
						$("#mainInfo").html(content);
					},"json");
				}
				
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