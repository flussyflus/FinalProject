(function(window){
	
	$(document).ready(function(){
		//loads beds menu when page loads
		var content='<div id="" class="col-md-12"><div class="row"><h2>Dirty beds</h2></div><hr><div class="row"><ul class="nav nav-pills"><li><a class="btn btn-lg" id="dirtyBedsButton" data-toggle="tab">All Wards</a></li><li><a class="btn btn-lg" id="dirtyMedicalBeds" data-toggle="tab">Medical Wards</a></li><li><a class="btn btn-lg" id="dirtySurgicalBeds" data-toggle="tab">Surgical Wards</a></li></ul><hr></div>';
		$("#headInfo").html(content);
	});
	
	$(document).on('click','#dirtyBedsData',function(){
		//loads beds menu when beds tab is clicked
		var content='<div id="dirtyBedsData" class="col-md-12"><div class="row"><h2>Dirty beds</h2></div><hr><div class="row"><ul class="nav nav-pills"><li><a class="btn btn-lg" id="dirtyBedsButton" data-toggle="tab">All Wards</a></li><li><a class="btn btn-lg" id="dirtyMedicalBeds" data-toggle="tab">Medical Wards</a></li><li><a class="btn btn-lg" id="dirtySurgicalBeds" data-toggle="tab">Surgical Wards</a></li></ul><hr></div>';
		$("#headInfo").html(content);
		$("#mainInfo").html("");
	});
	
	$(document).on('click','#dirtyBedsButton',function(){
		//loads table of dirty beds from database to screen
		var content="";$("#mainInfo").html("");
		$.get("/finalproject/beds_Con/load_Dirty_Beds",function(data){
			var i;
			content = "<div class='row'></div<div class='pre-scrollable tblHeight'><table id='mytable' class='table table-striped table-bordered'><thead><tr><th>Bed</th><th>Room</th><th>Ward</th><th>Availability</th></tr></thead><tbody>";
			for (i = 0; i < data.length; i++) {
				content += '<tr><td>' + data[i].bedID + '</td>' + '<td>' + data[i].roomID + '</td>'+'<td>'+data[i].wardID+'</td>' + '<td>' + data[i].availability + '</td><td><button id="bedCleaned" name="'+data[i].bedID+'">Bed '+data[i].bedID+' has been cleaned</button></td></tr>';
			}
			$("#mainInfo").html(content);
		},"json");
	});
	
	$(document).on('click','#occupiedBedsButton',function(){
		//loads table of occupied beds to screen
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
	
	$(document).on('click','#vacantBedsButton',function(){
		//loads table of vacant beds to screen
		var content="";$("#mainInfo").html("");
		$.get("/finalproject/beds_Con/load_Vacant_Beds",function(data){
			var i;
			content = "<div class='row'></div<div class='pre-scrollable tblHeight'><table id='mytable' class='table table-striped table-bordered'><thead><tr><th>Bed</th><th>Room</th><th>Ward</th><th>Availability</th></tr></thead><tbody>";
			for (i = 0; i < data.length; i++) {
				content += '<tr><td>' + data[i].bedID + '</td>' + '<td>' + data[i].roomID + '</td>'+'<td>'+data[i].wardID+'</td>' + '<td>' + data[i].availability + '</td></tr>';
			}
			$("#mainInfo").html(content);
		},"json");
	});
	
	$(document).on('click','#dirtyMedicalBeds',function(){
		//loads table of dirty medical ward beds
			var content="";$("#mainInfo").html("");
			$.get("/finalproject/beds_Con/find_Med_Wards",function(data){
			var i;
			content = "<div class='row'></div<div class='pre-scrollable tblHeight'><table id='mytable' class='table table-striped table-bordered'><thead><tr><th>Bed</th><th>Room</th><th>Ward</th><th>Availability</th></tr></thead><tbody>";
			for(i=0;i<data.length;i++){
				$.get("/finalproject/beds_Con/find_Ward_Dirty_Beds",{wardID:data[i].wardID},function(data2){
					var j;
					for (j = 0; j < data2.length; j++) {
						content += '<tr><td>' + data2[j].bedID + '</td>' + '<td>' + data2[j].roomID + '</td>'+'<td>'+data2[j].wardID+'</td>' + '<td>' + data2[j].availability + '</td><td><button id="bedCleaned" name="'+data2[j].bedID+'">Bed '+data2[j].bedID+' has been cleaned</button></td></tr>';
					}
					$("#mainInfo").html(content);
				},"json");
			}
			
		},"json");
	});
	
	$(document).on('click','#occupiedMedicalBeds',function(){
		//loads table of occupied medical ward beds
			var content="";$("#mainInfo").html("");
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
	
	$(document).on('click','#vacantMedicalBeds',function(){
		//loads table of vacant medical ward beds
			var content="";$("#mainInfo").html("");
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
	
	$(document).on('click','#dirtySurgicalBeds',function(){
		//loads table of dirty surgical beds to screen
		var content="";$("#mainInfo").html("");
		$.get("/finalproject/beds_Con/find_Surg_Wards",function(data){
			var i;
			content = "<div class='row'></div<div class='pre-scrollable tblHeight'><table id='mytable' class='table table-striped table-bordered'><thead><tr><th>Bed</th><th>Room</th><th>Ward</th><th>Availability</th></tr></thead><tbody>";
			for(i=0;i<data.length;i++){
				$.get("/finalproject/beds_Con/find_Ward_Dirty_Beds",{wardID:data[i].wardID},function(data2){
					var j;
					for (j = 0; j < data2.length; j++) {
						content += '<tr><td>' + data2[j].bedID + '</td>' + '<td>' + data2[j].roomID + '</td>'+'<td>'+data2[j].wardID+'</td>' + '<td>' + data2[j].availability + '</td><td><button id="bedCleaned" name="'+data2[j].bedID+'">Bed '+data2[j].bedID+' has been cleaned</button></td></tr>';
					}
					$("#mainInfo").html(content);
				},"json");
			}
			
		},"json");
	});
	
	$(document).on('click','#occupiedSurgicalBeds',function(){
		//loads table of occupied surgical beds to screen
		var content="";$("#mainInfo").html("");
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
	
	$(document).on('click','#vacantSurgicalBeds',function(){
		//loads table of vacant surgical beds to screen
		var content="";$("#mainInfo").html("");
		$.get("/finalproject/beds_Con/find_Surg_Wards",function(data){
			var i;
			content = "<div class='row'></div<div class='col-lg-10 pre-scrollable'><table id='mytable' class='table table-striped table-bordered col-md-10'><thead><tr><th>Bed</th><th>Room</th><th>Ward</th><th>Availability</th></tr></thead><tbody>";
			for(i=0;i<data.length;i++){
				$.get("/finalproject/beds_Con/find_Ward_Vacant_Beds",{wardID:data[i].wardID},function(data2){
					var j;
					for (j = 0; j < data2.length; j++) {
						content += '<tr><td>' + data2[j].bedID + '</td>' + '<td>' + data2[j].roomID + '</td>'+'<td>'+data2[j].wardID+'</td>' + '<td>' + data2[j].availability + '</td></tr>';
					}
					content+="</div>";
					$("#mainInfo").html(content);
				},"json");
			}
			
		},"json");
	});		
	
	$(document).on('click','#bedCleaned',function(){
	//function changes bed to vacant after individual has cleaned the bed
		bedNum = $(this).attr("name");
		$.post("/finalproject/beds_Con/cleaned_Bed",{bedID:bedNum});
		$.get("/finalproject/beds_Con/load_Dirty_Beds",function(data){
			var i;
			content = "<div class='row'></div<div class='pre-scrollable tblHeight'><table id='mytable' class='table table-striped table-bordered'><thead><tr><th>Bed</th><th>Room</th><th>Ward</th><th>Availability</th></tr></thead><tbody>";
			for (i = 0; i < data.length; i++) {
				content += '<tr><td>' + data[i].bedID + '</td>' + '<td>' + data[i].roomID + '</td>'+'<td>'+data[i].wardID+'</td>' + '<td>' + data[i].availability + '</td><td><button id="bedCleaned" name="'+data[i].bedID+'">Bed '+data[i].bedID+' has been cleaned</button></td></tr>';
			}
			$("#mainInfo").html(content);
		},"json");
	});
		
	$(document).on('click','#profileButton',function(){
		//brings up profile data for this particular user
		var content ="<h2>Profile Information</h2><hr>";
		$("#headInfo").html(content);
		$("#mainInfo").html("");
		$.get("/finalproject/profile_Con/getMyProfile",function(data){
			content = "<label>UserID: </label> "+data[0].id+"<br><label>Email: </label> "+data[0].email+"<br><label>First name: </label> "+data[0].firstname+"<br><label>Last Name: </label> "+data[0].lastname+"<br><label>User Type: </label> "+data[0].type+"<br><label>Address: </label> "+data[0].address+"<br><label>Date of Birth: </label> "+data[0].dob+"<br><label>gender: </label> "+data[0].gender+"<br><label>Date Employed: </label> "+data[0].date_employed;
			$("#mainInfo").html(content);
		},"json");
	});
}(this));