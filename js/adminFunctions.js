(function(window){
	$(window).load(function(){
		//loads the menu for the admin  logs page
		var content="";
		content="<h2>Search Logs</h2><hr><div class='col-xs-5'><select id='selectDates' class='form-control'><option selected ='selected' value ='all'>Choose Date to filter results</option>";
		
		$.get("/finalproject/admin_Con/getUniqueDates",function(data){
		for(i=0;i<data.length;i++){
			content+='<option id="'+data[i].date+'" value="'+data[i].date+'">'+data[i].date+'</option>';
		}		
		content += "</select></div>";
		$("#headInfo").html(content);
		},"json");
		
		content2="<div class='col-xs-5'><select id='selectUsers' class='form-control'><option selected ='selected' value ='all'>Choose User to filter results</option>";
		$.get("/finalproject/admin_Con/getUniqueUsers",function(data2){
		for(i=0;i<data2.length;i++){
			content2+='<option id="'+data2[i].email+'" value="'+data2[i].email+'">'+data2[i].email+'</option>';
		}		
		content2 += "</select></div><div class='col-xs-2'><button id='getLogs'>GetLogs</button><hr></div>";
		$("#headInfo").append(content2);
		},"json");
	});
	
	$(document).on('click','#logsData',function(){
		//loads the menu for the admin  logs page
		var content="";
		
		 content="<h2>Search Logs</h2><hr><div class='col-xs-5'><select id='selectDates' class='form-control IDmenu'><option selected ='selected' value ='all'>Choose Date to filter results</option>";
		
		$.get("/finalproject/admin_Con/getUniqueDates",function(data){
		for(i=0;i<data.length;i++){
			content+='<option id="'+data[i].date+'" value="'+data[i].date+'">'+data[i].date+'</option>';
		}		
		content += "</select></div>";
		$("#headInfo").html(content);
		},"json");
		
		content2="<div class='col-xs-5'><select id='selectUsers' class='form-control IDmenu'><option selected ='selected' value ='all'>Choose User to filter results</option>";
		$.get("/finalproject/admin_Con/getUniqueUsers",function(data2){
		for(i=0;i<data2.length;i++){
			content2+='<option id="'+data2[i].email+'" value="'+data2[i].email+'">'+data2[i].email+'</option>';
		}		
		content2 += "</select></div><div class='col-xs-2'><button id='getLogs'>GetLogs</button></div><hr>";
		$("#headInfo").append(content2);
		},"json");
		$("#mainInfo").html("");
	});
	
	$(document).on('click','#getLogs',function(){
		var sel = document.getElementById('selectDates');
		var  selected = sel.options[sel.selectedIndex];
		var param1 = selected.getAttribute('value');
		sel = document.getElementById('selectUsers');
		selected = sel.options[sel.selectedIndex];
		var param2 = selected.getAttribute('value');
		$.get("/finalproject/admin_Con/getLogsTable",{date:param1,user:param2},function(data){
			var content = "<hr><div class='row'></div<div class='pre-scrollable tblHeight'><table id='mytable' class='table table-striped table-bordered'><thead><tr><th>LogID</th><th>User</th><th>Date</th><th>Time</th><th>Action Performed</th></tr></thead><tbody>";
			for(i=0;i<data.length;i++){
				content+='<tr><td>' + data[i].logID + '</td>' + '<td>' + data[i].email + '</td>'+'<td>'+data[i].date+'</td>' + '<td>' + data[i].time + '</td><td>'+data[i].action+'</td></tr>';
			}
			content+="</table>"
			$("#mainInfo").html(content);
		},"json");	
	});
	
	$(document).on('click','#usersData',function(){
		var content='<div id="" class="col-md-12"><div class="row"><h2>Users</h2></div><hr><div class="row"><ul class="nav nav-pills"><li><a class="btn btn-lg" id="viewUsers" data-toggle="tab">view Users</a></li><li><a class="btn btn-lg" id="add User" data-toggle="tab">Add User</a></li><li><a class="btn btn-lg" id="deleteUser" data-toggle="tab">Delete User</a></li></ul><hr></div>';
		$("#headInfo").html(content);
		$("#mainInfo").html("");
	});
	
	$(document).on('click','#viewUsers',function(){
		var content ="<div class='col-xs-5'><select id='selectType' class='form-control IDmenu'><option selected ='selected' value ='all'>Choose UserType to filter results</option>";
		
		$.get("/finalproject/admin_Con/getUniqueTypes",function(data){
		for(i=0;i<data.length;i++){
			content+='<option id="'+data[i].type+'" value="'+data[i].type+'">'+data[i].type+'</option>';
		}		
		content += "</select></div>";
		$("#headInfo").append(content);
		},"json");
		
		content2="<div class='col-xs-5'><select id='selectUsers' class='form-control IDmenu'><option selected ='selected' value ='all'>Choose User to filter results</option>";
		$.get("/finalproject/admin_Con/getUniqueUsers",function(data2){
		for(i=0;i<data2.length;i++){
			content2+='<option id="'+data2[i].email+'" value="'+data2[i].email+'">'+data2[i].email+'</option>';
		}		
		content2 += "</select></div><div class='col-xs-2'><button id='getUsers'>GetUsers</button></div><hr>";
		$("#headInfo").append(content2);
		},"json");
		$("#mainInfo").html("");
	});
	
	$(document).on('click','#getUsers',function(){
		var sel = document.getElementById('selectType');
		var  selected = sel.options[sel.selectedIndex];
		var param1 = selected.getAttribute('value');
		sel = document.getElementById('selectUsers');
		selected = sel.options[sel.selectedIndex];
		var param2 = selected.getAttribute('value');
		$.get("/finalproject/admin_Con/getUsersTable",{type:param1,user:param2},function(data){
			var content = "<hr><div class='row'></div<div class='pre-scrollable tblHeight'><table id='mytable' class='table table-striped table-bordered'><thead><tr><th>UserID</th><th>Email</th><th>User Type</th><th>FirstName</th><th>Last Name</th><th>Address</th><th>date Of Birth</th><th>Gender</th><th>Date Employed</th></tr></thead><tbody>";
			for(i=0;i<data.length;i++){
				content+='<tr><td>' + data[i].id + '</td>' + '<td>' + data[i].email + '</td>'+'<td>'+data[i].type+'</td>' + '<td>' + data[i].firstname + '</td><td>'+data[i].lastname+'</td><td>'+data[i].address+'</td><td>'+data[i].dob+'</td><td>'+data[i].gender+'</td><td>'+data[i].date_employed+'</td></tr>';
			}
			content+="</table>"
			$("#mainInfo").html(content);
		},"json");	
	});
	
	// load adduser stuff-add to log table stuff
	//submit add user form
	//search for user to delete
	//delete user button function - add to log table stuff
	
	
	//view admittance stuffs
	//view discharges stuff
	//beds stuff, change any bed to it next successor availability
	
	
	//for the documentation
		//write a short essay on why administrato is important and why he is needed
		//reasons for the tables in the database
		//how the administrator page works
		//the set up on our cons,models and views
	
}(this));