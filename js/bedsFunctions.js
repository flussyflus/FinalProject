(function(window){
	$(document).on('click','#bedsData',function(){
		//loads beds nav pills to screen
		var content='<ul class="nav nav-pills nav-stacked"><li><a class="btn btn-lg" id="viewBeds" data-toggle="tab">View Beds</a></li><li><a class="btn btn-lg" id="addBed" data-toggle="tab">Add Bed</a></li></ul>';
		$("#menuItems").html(content);
		$("#headInfo").html("");
		$("#midInfo").html("");
		$("#mainInfo").html("");
	});

	$(document).on('click','#viewBeds',function(){
		//loads beds sub menu to screen
		$("#midInfo").html("");
		var content ="<div class='col-xs-2'><select id='selectBeds' class='form-control'><option selected ='selected' value ='all'>bedID</option></select></div>";
		content+="<div class='col-xs-2'><select id='selectRooms' class='form-control'><option selected ='selected' value ='all'>roomID</option></select></div>";
		content+="<div class='col-xs-2'><select id='selectWards' class='form-control'><option selected ='selected' value ='all'>wardID</option></select></div>";
		content+="<div class='col-xs-3'><select id='selectAvail' class='form-control'><option selected ='selected' value ='all'>Availability</option></select></div>";
		content+="<div class='col-md-2'><button class='btn btn-primary btn-danger' id='getBeds'>Get Beds</button></div>";
		$("#headInfo").html("<h2>View Beds</h2><hr>");
		
		$("#midInfo").html(content);
		$("#mainInfo").html("");
		$.get("/finalproject/admin_Con/getUniqueBeds",function(data){
			var c="";	
			for(i=0;i<data.length;i++){
				c+='<option id="'+data[i].bedID+'" value="'+data[i].bedID+'">'+data[i].bedID+'</option>';
			}		
			$("#selectBeds").append(c);
		},"json");
		var d="";
		$.get("/finalproject/admin_Con/getUniqueRooms",function(data){
			for(i=0;i<data.length;i++){
				d+='<option id="'+data[i].roomID+'" value="'+data[i].roomID+'">'+data[i].roomID+'</option>';
			}		
			$("#selectRooms").append(d);		
		},"json");
		
		
		var e="";
		$.get("/finalproject/admin_Con/getUniqueWards",function(data){
		for(i=0;i<data.length;i++){
			e+='<option id="'+data[i].wardID+'" value="'+data[i].wardID+'">'+data[i].wardID+'</option>';
		}		
		$("#selectWards").append(e);
		},"json");
		
		
		var f="";
		$.get("/finalproject/admin_Con/getUniqueAvailabilities",function(data){
		for(i=0;i<data.length;i++){
			f+='<option id="'+data[i].availability+'" value="'+data[i].availability+'">'+data[i].availability+'</option>';
		}		
		$("#selectAvail").append(f);
		},"json");
	});
	
	$(document).on('click','#addBed',function(){
		//functionality for adding a bed to the database
		var content="<form class='form-horizontal'>";
		content+="<div class='form-group'><label>Room: </label><select></select></div>";
		content+="<div class='form-group'><label>Ward: </label><select></select></div>";
		content+="<div class='form-group'><label>: </label><select></select></div>";
		$("#headInfo").html("<h2>Add a bed</h2><hr>");
		$("#midInfo").html('');
		$("#mainInfo").html(content);
	});
	
	
	$(document).on('click','#getBeds',function(){
		//loads the beds table to the screen
		loadBeds();
	});
	
	$(document).on('click','#deleteBed',function(){
		//delete a bed
		bedID = $(this).attr("name");
		$.post("/finalproject/admin_Con/deleteBed",{bedID:bedID});
		loadBeds();
	});
	
	//add edit bed functionality
	
}(this));

	function loadBeds(){
		var sel = document.getElementById('selectBeds');
		var selected = sel.options[sel.selectedIndex];
		var param1 = selected.getAttribute('value');
		sel = document.getElementById('selectRooms');
		selected = sel.options[sel.selectedIndex];
		var param2 = selected.getAttribute('value');
		sel = document.getElementById('selectWards');
		selected = sel.options[sel.selectedIndex];
		var param3 = selected.getAttribute('value');
		sel = document.getElementById('selectAvail');
		selected = sel.options[sel.selectedIndex];
		var param4 = selected.getAttribute('value');
		var content ="<hr><div class='pre-scrollable'><table id='mytable' class='table table-striped table-bordered'><thead><tr><th>Bed</th><th>Room</th><th>Ward</th><th>Availability</th><th></th><th></th></tr><thead><tbody id='tableBody'></tbody></table></div>";
		$("#mainInfo").html(content);
		var c="";
		$.get("/finalproject/admin_Con/getBedsTable",{bedID:param1,roomID:param2,wardID:param3,availability:param4},function(data){
			for(i=0;i<data.length;i++){
				c+='<tr><td>' + data[i].bedID + '</td>' + '<td>' + data[i].roomID + '</td>'+'<td>'+data[i].wardID+'</td>' + '<td>' + data[i].availability + '</td><td class="col-md-1"><button class="btn btn-primary btn-danger" id="editBed" name="'+data[i].bedID+'">Edit Bed</button></td><td class="col-md-1"><button class="btn btn-primary btn-danger" id="deleteBed" name="'+data[i].bedID+'">Delete Bed</button></td></tr>';
			}
			$("#tableBody").html(c);
		},"json");
	}