(function(window){
	$(window).load(function(){
		//loads the menu for the admin  logs page
		var content='<ul class="nav nav-pills nav-stacked"><li class="active"><a class="btn btn-lg" id="" data-toggle="tab">Search Logs</a></li></ul>';
		$("#menuItems").html(content);
		$("#headInfo").html("");
		
		content="<div class='col-xs-5'><select id='selectDates' class='form-control IDmenu'><option selected ='selected' value ='all'>Choose Date to filter results</option></select></div>";
		content+="<div class='col-xs-5'><select id='selectUsers' class='form-control IDmenu'><option selected ='selected' value ='all'>Choose User to filter results</option></select></div><div class='col-xs-2'><button class='btn btn-primary btn-danger' id='getLogs'>GetLogs</button></div>";
		$("#midInfo").html(content);
		var c="";
		$.get("/finalproject/admin_Con/getUniqueDates",function(data){
		for(i=0;i<data.length;i++){
			c+='<option id="'+data[i].date+'" value="'+data[i].date+'">'+data[i].date+'</option>';
		}		
		$("#selectDates").append(c);
		},"json");
		
		var d="";
		$.get("/finalproject/admin_Con/getUniqueUsers",function(data2){
		for(i=0;i<data2.length;i++){
			d+='<option id="'+data2[i].email+'" value="'+data2[i].email+'">'+data2[i].email+'</option>';
		}		
		$("#selectUsers").append(d);
		},"json");
		$("#mainInfo").html("");
	});
	
	$(document).on('click','#logsData',function(){
		//loads the menu for the admin  logs page
		var content='<ul class="nav nav-pills nav-stacked"><li class="active"><a class="btn btn-lg" id="" data-toggle="tab">Search Logs</a></li></ul>';
		$("#menuItems").html(content);
		$("#headInfo").html("");
		
		content="<div class='col-xs-5'><select id='selectDates' class='form-control IDmenu'><option selected ='selected' value ='all'>Choose Date to filter results</option></select></div>";
		content+="<div class='col-xs-5'><select id='selectUsers' class='form-control IDmenu'><option selected ='selected' value ='all'>Choose User to filter results</option></select></div><div class='col-xs-2'><button class='btn btn-primary btn-danger' id='getLogs'>GetLogs</button></div>";
		$("#midInfo").html(content);
		var c="";
		$.get("/finalproject/admin_Con/getUniqueDates",function(data){
		for(i=0;i<data.length;i++){
			c+='<option id="'+data[i].date+'" value="'+data[i].date+'">'+data[i].date+'</option>';
		}		
		$("#selectDates").append(c);
		},"json");
		
		var d="";
		$.get("/finalproject/admin_Con/getUniqueUsers",function(data2){
		for(i=0;i<data2.length;i++){
			d+='<option id="'+data2[i].email+'" value="'+data2[i].email+'">'+data2[i].email+'</option>';
		}		
		$("#selectUsers").append(d);
		},"json");
		$("#mainInfo").html("");
	});
	
	$(document).on('click','#getLogs',function(){
		//loads Logs table to the screen
		var sel = document.getElementById('selectDates');
		var  selected = sel.options[sel.selectedIndex];
		var param1 = selected.getAttribute('value');
		sel = document.getElementById('selectUsers');
		selected = sel.options[sel.selectedIndex];
		var param2 = selected.getAttribute('value');
		var content="<br><div class='pre-scrollable'><table id='mytable' class='table table-striped table-bordered'><thead><tr><th>LogID</th><th>User</th><th>Date</th><th>Time</th><th>Action Performed</th></tr></thead><tbody id='tableBody'></tbody></table></div>";
		$("#mainInfo").html(content);
		var c="";
		$.get("/finalproject/admin_Con/getLogsTable",{date:param1,user:param2},function(data){
			for(i=0;i<data.length;i++){
				c+='<tr><td>' + data[i].logID + '</td>' + '<td>' + data[i].email + '</td>'+'<td>'+data[i].date+'</td>' + '<td>' + data[i].time + '</td><td>'+data[i].action+'</td></tr>';
			}
			$("#tableBody").html(c);
		},"json");	
	});
	
	$(document).on('click','#usersData',function(){
		//loads the users menu to the screen
		var content='<ul class="nav nav-pills nav-stacked"><li><a class="btn btn-lg" id="viewUsers" data-toggle="tab">view Users</a></li><li><a class="btn btn-lg" id="addUser" data-toggle="modal" data-target="#addUserModal">Add User</a></li></ul>';
		$("#menuItems").html(content);
		$("#midInfo").html("");
		$("#mainInfo").html("");
	});
	
	$(document).on('click','#viewUsers',function(){
		//loads the view users sub menu to the screen
		var content ="<div class='col-md-5'><select id='selectType' class='form-control'><option selected ='selected' value ='all'>Choose UserType to filter results</option></select></div>";
		content+="<div class='col-md-5'><select id='selectUsers' class='form-control IDmenu'><option selected ='selected' value ='all'>Choose User to filter results</option></select></div>";
		content+="<div class='col-md-2'><button class='btn btn-primary btn-danger' id='getUsers'>GetUsers</button></div>"
		$("#midInfo").html(content);
		var c="";
		$.get("/finalproject/admin_Con/getUniqueTypes",function(data){
		for(i=0;i<data.length;i++){
			c+='<option id="'+data[i].type+'" value="'+data[i].type+'">'+data[i].type+'</option>';
		}		
		content += "</select></div>";
		$("#selectType").append(c);
		},"json");
		var d="";
		$.get("/finalproject/admin_Con/getUniqueUsers",function(data2){
		for(i=0;i<data2.length;i++){
			d+='<option id="'+data2[i].email+'" value="'+data2[i].email+'">'+data2[i].email+'</option>';
		}		
		$("#selectUsers").append(d);
		},"json");
	});
	
	$(document).on('click','#getUsers',function(){
		//loads the users table to the screen
		var sel = document.getElementById('selectType');
		var  selected = sel.options[sel.selectedIndex];
		var param1 = selected.getAttribute('value');
		sel = document.getElementById('selectUsers');
		selected = sel.options[sel.selectedIndex];
		var param2 = selected.getAttribute('value');
		var content = "<br><div class='pre-scrollable'><table id='mytable' class='table table-striped table-bordered'><thead><tr><th>UserID</th><th>Email</th><th>User Type</th><th>FirstName</th><th>Last Name</th><th>Address</th><th>date Of Birth</th><th>Gender</th><th>Date Employed</th><th></th></tr></thead><tbody id='tableBody'></tbody></table></div>";
		$("#mainInfo").html(content);
		var c="";
		$.get("/finalproject/admin_Con/getUsersTable",{type:param1,user:param2},function(data){
			for(i=0;i<data.length;i++){
				c+='<tr><td>' + data[i].id + '</td>' + '<td>' + data[i].email + '</td>'+'<td>'+data[i].type+'</td>' + '<td>' + data[i].firstname + '</td><td>'+data[i].lastname+'</td><td>'+data[i].address+'</td><td>'+data[i].dob+'</td><td>'+data[i].gender+'</td><td>'+data[i].date_employed+'</td><td><a class="btn btn-danger" id="deleteUser" name="'+data[i].id+'" data-toggle="tab">Delete User</a></td></tr>';
			}
			
			$("#tableBody").html(c);
		},"json");	
	});
	
	$(document).on('click','#getBeds',function(){
		//loads the beds table to the screen
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
		var content ="<br><div class='pre-scrollable'><table id='mytable' class='table table-striped table-bordered'><thead><tr><th>Bed</th><th>Room</th><th>Ward</th><th>Availability</th></tr><tr></tr></thead><tbody id='tableBody'></tbody></table></div>";
		$("#mainInfo").html(content);
		var c="";
		$.get("/finalproject/admin_Con/getBedsTable",{bedID:param1,roomID:param2,wardID:param3,availability:param4},function(data){
			for(i=0;i<data.length;i++){
				c+='<tr><td>' + data[i].bedID + '</td>' + '<td>' + data[i].roomID + '</td>'+'<td>'+data[i].wardID+'</td>' + '<td>' + data[i].availability + '</td><td class="col-md-1"><button class="btn btn-primary btn-danger" id="deleteBed" name="'+data[i].bedID+'">Delete Bed</button></td></tr>';
			}
			$("#tableBody").html(c);
		},"json");
	});
	
	$("#addUserForm").submit(function(){
		//submits form for adding and adds the user to the database
		var email= $("#regEmail").val();
		var password=$("#regPassword").val();
		var type=document.getElementById('selectTypeReg');
		var selected = type.options[type.selectedIndex];
		type=selected.getAttribute('value');
		var fname=$("#regFirst_name").val();
		var lname=$("#regLast_name").val();
		var address=$("#regAddress").val();
		var dob=$("#regDob").val();
		var doe=$("#regDoe").val();
		var gender=document.getElementById('selectGenderReg');
		var selectedG = gender.options[gender.selectedIndex];
		gender=selectedG.getAttribute('value');
		$.post("/finalproject/admin_Con/addUserRecord",{
			email:email,
			password:password,
			type:type,
			firstname:fname,
			lastname:lname,
			address:address,
			date_employed:doe,
			dob:dob,
			gender:gender
			});
	});
	
	$(document).on('click','#deleteUser',function(){
	//delete user button function - add to log table stuff
		userNum = $(this).attr("name");
		console.log(userNum);
		$.post("/finalproject/admin_Con/delete_User",{id:userNum});
		var sel = document.getElementById('selectType');
		var  selected = sel.options[sel.selectedIndex];
		var param1 = selected.getAttribute('value');
		sel = document.getElementById('selectUsers');
		selected = sel.options[sel.selectedIndex];
		var param2 = selected.getAttribute('value');
		$.get("/finalproject/admin_Con/getUsersTable",{type:param1,user:param2},function(data){
			var content = "<div class='row'></div><div class='pre-scrollable'><table id='mytable' class='table table-striped table-bordered'><thead><tr><th>UserID</th><th>Email</th><th>User Type</th><th>FirstName</th><th>Last Name</th><th>Address</th><th>date Of Birth</th><th>Gender</th><th>Date Employed</th><th></th></tr></thead><tbody>";
			for(i=0;i<data.length;i++){
				content+='<tr><td>' + data[i].id + '</td>' + '<td>' + data[i].email + '</td>'+'<td>'+data[i].type+'</td>' + '<td>' + data[i].firstname + '</td><td>'+data[i].lastname+'</td><td>'+data[i].address+'</td><td>'+data[i].dob+'</td><td>'+data[i].gender+'</td><td>'+data[i].date_employed+'</td><td><a class="btn btn-danger" id="deleteUser" name="'+data[i].id+'" data-toggle="tab">Delete User</a></td></tr>';
			}
			content+="</table>"
			$("#mainInfo").html(content);
		},"json");	
	});
	
	
	$(document).on('click','#bedsData',function(){
		//loads beds nav pills to screen
		var content='<ul class="nav nav-pills nav-stacked"><li><a class="btn btn-lg" id="viewBeds" data-toggle="tab">View Beds</a></li><li><a class="btn btn-lg" id="addBed" data-toggle="tab">Add Bed</a></li></ul>';
		$("#menuItems").html(content);
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
		$("#midInfo").html(content);
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
	
	
	$(document).on('click','#deleteBed',function(){
		//delete a bed
		bedID = $(this).attr("name");
		$.post("/finalproject/admin_Con/deleteBed",{bedID:bedID});
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
		var content ="<div class='pre-scrollable'><table id='mytable' class='table table-striped table-bordered'><thead><tr><th>Bed</th><th>Room</th><th>Ward</th><th>Availability</th></tr><tr></tr></thead><tbody id='tableBody'></tbody></table></div>";
		$("#mainInfo").html(content);
		var c="";
		$.get("/finalproject/admin_Con/getBedsTable",{bedID:param1,roomID:param2,wardID:param3,availability:param4},function(data){
			for(i=0;i<data.length;i++){
				c+='<tr><td>' + data[i].bedID + '</td>' + '<td>' + data[i].roomID + '</td>'+'<td>'+data[i].wardID+'</td>' + '<td>' + data[i].availability + '</td><td class="col-md-1"><button class="btn btn-primary btn-danger" id="deleteBed" name="'+data[i].bedID+'">Delete Bed</button></td></tr>';
			}
			$("#tableBody").html(c);
		},"json");
	});
	
	//view admittance stuffs
	//view discharges stuff
	//beds stuff, change any bed to it next successor availability
	
	
	//for the documentation
		//write a short essay on why administrato is important and why he is needed
		//reasons for the tables in the database
		//how the administrator page works
		//the set up on our cons,models and views
	
}(this));