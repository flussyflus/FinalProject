(function(window){
	
	$(document).ready(function(){
		//loads beds menu when page loads
		var content='<ul class="nav nav-pills nav-stacked"><li><a class="btn btn-lg" id="dirtyBedsButton" data-toggle="tab">All Wards</a></li><li><a class="btn btn-lg" id="dirtyMedicalBeds" data-toggle="tab">Medical Wards</a></li><li><a class="btn btn-lg" id="dirtySurgicalBeds" data-toggle="tab">Surgical Wards</a></li></ul>';
		var content2='<h2>Dirty Beds</h2>';
		$("#headInfo").html(content2);
		$("#menuItems").html(content);
	});
	
	$(document).on('click','#dirtyBedsData',function(){
		//loads beds menu when beds tab is clicked
		var content='<ul class="nav nav-pills nav-stacked"><li><a class="btn btn-lg" id="dirtyBedsButton" data-toggle="tab">All Wards</a></li><li><a class="btn btn-lg" id="dirtyMedicalBeds" data-toggle="tab">Medical Wards</a></li><li><a class="btn btn-lg" id="dirtySurgicalBeds" data-toggle="tab">Surgical Wards</a></li></ul>';
		var content2='<h2>Dirty Beds</h2>';
		$("#menuItems").html(content);
		$("#headInfo").html(content2);
		$("#mainInfo").html("");
	});
	
	$(document).on('click','#dirtyBedsButton',function(){
		//loads table of dirty beds from database to screen
		$("#mainInfo").html("");
		var content="<div class='pre-scrollable'><table id='mytable' class='table table-striped table-bordered'><thead><tr><th>Bed</th><th>Room</th><th>Ward</th><th>Availability</th></tr></thead><tbody id='tableBody'></tbody></table></div>"
		$("#mainInfo").html(content);
		var c=""
		$.get("/finalproject/beds_Con/load_Dirty_Beds",function(data){
			var i;
			for (i = 0; i < data.length; i++) {
				c += '<tr><td>' + data[i].bedID + '</td>' + '<td>' + data[i].roomID + '</td>'+'<td>'+data[i].wardID+'</td>' + '<td>' + data[i].availability + '</td><td class="col-md-1"><button class="btn btn-primary btn-danger" id="bedCleaned" name="'+data[i].bedID+'">Bed '+data[i].bedID+' cleaned</button></td></tr>';
			}
			$("#tableBody").append(c);
		},"json");
	});
	
	$(document).on('click','#dirtyMedicalBeds',function(){
		//loads table of dirty medical ward beds
			var content="<div class='pre-scrollable'><table id='mytable' class='table table-striped table-bordered'><thead><tr><th>Bed</th><th>Room</th><th>Ward</th><th>Availability</th></tr></thead><tbody id='tableBody'></tbody></table></div>"
			$("#mainInfo").html(content);
			var c="";
			$.get("/finalproject/beds_Con/find_Med_Wards",function(data){
				var i;
				for(i=0;i<data.length;i++){
					$.get("/finalproject/beds_Con/find_Ward_Dirty_Beds",{wardID:data[i].wardID},function(data2){
						var j;
						for (j = 0; j < data2.length; j++) {
							c += '<tr><td>' + data2[j].bedID + '</td>' + '<td>' + data2[j].roomID + '</td>'+'<td>'+data2[j].wardID+'</td>' + '<td>' + data2[j].availability + '</td><td class="col-md-1"><button class="btn btn-primary btn-danger" id="bedDCleaned" name="'+data2[j].bedID+'">Bed '+data2[j].bedID+' cleaned</button></td></tr>';
						}
						$("#tableBody").html(c);
					},"json");
				}
			},"json");
	});
	
	$(document).on('click','#dirtySurgicalBeds',function(){
		//loads table of dirty surgical beds to screen
		var content="<div class='pre-scrollable'><table id='mytable' class='table table-striped table-bordered'><thead><tr><th>Bed</th><th>Room</th><th>Ward</th><th>Availability</th></tr></thead><tbody id='tableBody'></tbody></table></div>"
		$("#mainInfo").html(content);
		var c="";
		$.get("/finalproject/beds_Con/find_Surg_Wards",function(data){
			var i;
			for(i=0;i<data.length;i++){
				$.get("/finalproject/beds_Con/find_Ward_Dirty_Beds",{wardID:data[i].wardID},function(data2){
					var j;
					for (j = 0; j < data2.length; j++) {
						c += '<tr><td>' + data2[j].bedID + '</td>' + '<td>' + data2[j].roomID + '</td>'+'<td>'+data2[j].wardID+'</td>' + '<td>' + data2[j].availability + '</td><td class="col-md-1"><button class="btn btn-primary btn-danger" id="bedSCleaned" name="'+data2[j].bedID+'">Bed '+data2[j].bedID+' cleaned</button></td></tr>';
					}
					$("#tableBody").html(c);
				},"json");
			}
		},"json");
	});
	
	$(document).on('click','#bedCleaned',function(){
	//function changes bed to vacant after individual has cleaned the bed
		bedNum = $(this).attr("name");
		$.post("/finalproject/beds_Con/cleaned_Bed",{bedID:bedNum});
		//loads table of dirty beds from database to screen
		$("#mainInfo").html("");
		var content="<div class='pre-scrollable'><table id='mytable' class='table table-striped table-bordered'><thead><tr><th>Bed</th><th>Room</th><th>Ward</th><th>Availability</th></tr></thead><tbody id='tableBody'></tbody></table></div>"
		$("#mainInfo").html(content);
		var c=""
		$.get("/finalproject/beds_Con/load_Dirty_Beds",function(data){
			var i;
			for (i = 0; i < data.length; i++) {
				c += '<tr><td>' + data[i].bedID + '</td>' + '<td>' + data[i].roomID + '</td>'+'<td>'+data[i].wardID+'</td>' + '<td>' + data[i].availability + '</td><td class="col-md-1"><button class="btn btn-primary btn-danger" id="bedCleaned" name="'+data[i].bedID+'">Bed '+data[i].bedID+' cleaned</button></td></tr>';
			}
			$("#tableBody").append(c);
		},"json");
		
	});
	
	$(document).on('click','#bedDCleaned',function(){
	//function changes bed to vacant after individual has cleaned the bed
		bedNum = $(this).attr("name");
		$.post("/finalproject/beds_Con/cleaned_Bed",{bedID:bedNum});
		//loads table of dirty medical ward beds
			var content="<div class='pre-scrollable'><table id='mytable' class='table table-striped table-bordered'><thead><tr><th>Bed</th><th>Room</th><th>Ward</th><th>Availability</th></tr></thead><tbody id='tableBody'></tbody></table></div>"
			$("#mainInfo").html(content);
			var c="";
			$.get("/finalproject/beds_Con/find_Med_Wards",function(data){
				var i;
				for(i=0;i<data.length;i++){
					$.get("/finalproject/beds_Con/find_Ward_Dirty_Beds",{wardID:data[i].wardID},function(data2){
						var j;
						for (j = 0; j < data2.length; j++) {
							c += '<tr><td>' + data2[j].bedID + '</td>' + '<td>' + data2[j].roomID + '</td>'+'<td>'+data2[j].wardID+'</td>' + '<td>' + data2[j].availability + '</td><td class="col-md-1"><button class="btn btn-primary btn-danger" id="bedDCleaned" name="'+data2[j].bedID+'">Bed '+data2[j].bedID+' cleaned</button></td></tr>';
						}
						$("#tableBody").html(c);
					},"json");
				}
			},"json");
		
	});
	
	$(document).on('click','#bedSCleaned',function(){
	//function changes bed to vacant after individual has cleaned the bed
		bedNum = $(this).attr("name");
		$.post("/finalproject/beds_Con/cleaned_Bed",{bedID:bedNum});
		//loads table of dirty surgical beds to screen
		var content="<div class='pre-scrollable'><table id='mytable' class='table table-striped table-bordered'><thead><tr><th>Bed</th><th>Room</th><th>Ward</th><th>Availability</th></tr></thead><tbody id='tableBody'></tbody></table></div>"
		$("#mainInfo").html(content);
		var c="";
		$.get("/finalproject/beds_Con/find_Surg_Wards",function(data){
			var i;
			for(i=0;i<data.length;i++){
				$.get("/finalproject/beds_Con/find_Ward_Dirty_Beds",{wardID:data[i].wardID},function(data2){
					var j;
					for (j = 0; j < data2.length; j++) {
						c += '<tr><td>' + data2[j].bedID + '</td>' + '<td>' + data2[j].roomID + '</td>'+'<td>'+data2[j].wardID+'</td>' + '<td>' + data2[j].availability + '</td><td class="col-md-1"><button class="btn btn-primary btn-danger" id="bedSCleaned" name="'+data2[j].bedID+'">Bed '+data2[j].bedID+' cleaned</button></td></tr>';
					}
					$("#tableBody").html(c);
				},"json");
			}
		},"json");
		
	});
}(this));

	