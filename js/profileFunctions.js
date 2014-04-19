(function(window){
	
	$(document).on('click','#profileButton',function(){
		//loads menu on left hand side of screen
		var content='<ul class="nav nav-pills nav-stacked"><li><a class="btn btn-lg" id="editProfile" data-toggle="tab">View Profile</a></li></ul>';
		$("#menuItems").html(content);
		$("#headInfo").html("");
		$("#midInfo").html("");
		$("#mainInfo").html("");
	});

	$(document).on('click','#editProfile',function(){
		loadEditProfile();
	});
	
	
	$(document).on("submit","#editUserForm",function(){
		//saves whatever changes to the database from that user
		var id = $("#editUserId").attr('name');
		var email = $("#editUserEmail").val();
		var firstname = $("#editUserFirstname").val();
		var lastname = $("#editUserLastname").val();
		var type = $("#editUserType").attr('name');
		var address = $("#editUserAddress").val();
		var dob = $("#editUserDob").attr('name');
		var gender = $("#editUserGender").val();
		var date_employed = $("#editUserDate_employed").attr('name');
		$.post("/finalproject/profile_Con/editUserProfile",{id:id,email:email,firstname:firstname,lastname:lastname,type:type,address:address,dob:dob,gender:gender,date_employed:date_employed});
	});
}(this));

function loadEditProfile(){
		//content for the edit profile main page
		var content ="<h2>View Profile</h2><hr>";
		$("#headInfo").html(content);
		$("#midInfo").html("");
		$.get("/finalproject/profile_Con/getMyProfile",function(data){                                                                                               
			content = "<form class='form-horizontal' id='editUserForm'><div class='form-group'><label class='col-md-3 col-md-offset-2 control-label'>UserID: </label><div class='col-md-3' id='editUserId' name='"+data[0].id+"' style='text-align:left;'>"+data[0].id+"</div></div>";
			content+="<div class='form-group'><label class='col-md-3 col-md-offset-2 control-label'>E-mail Address:</label><div class='col-md-3'><input type='email' id='editUserEmail' name='email' class='form-control' placeholder='Email Address' value='"+data[0].email+"'></div></div>";
			content+="<div class='form-group'><label class='col-md-3 col-md-offset-2 control-label'>First Name:</label><div class='col-md-3'><input type='text' id='editUserFirstname' name='firstname' class='form-control' placeholder='First Name' value='"+data[0].firstname+"'></div></div>";
			content+="<div class='form-group'><label class='col-md-3 col-md-offset-2 control-label'>Last Name:</label><div class='col-md-3'><input type='text' id='editUserLastname' name='lastname' class='form-control' placeholder='Last name' value='"+data[0].lastname+"'></div></div>";
			content+="<div class='form-group'><label class='col-md-3 col-md-offset-2 control-label'>User Type:</label><div class='col-md-3'style='text-align:left' id='editUserType' name='"+data[0].type+"'>"+data[0].type+"</div></div>";
			content+="<div class='form-group'><label class='col-md-3 col-md-offset-2 control-label'>Address:</label><div class='col-md-3'><input type='text' id='editUserAddress' name='address' class='form-control' placeholder='Address' value='"+data[0].address+"'></div></div>";
			content+="<div class='form-group'><label class='col-md-3 col-md-offset-2 control-label'>Date of Birth:</label><div class='col-md-3'style='text-align:left' id='editUserDob' name='"+data[0].dob+"'>"+data[0].dob+"</div></div>";
			content+="<div class='form-group'><label class='col-md-3 col-md-offset-2 control-label'>Gender:</label><div class='col-md-3'><input type='text' id='editUserGender' name='gender' class='form-control' placeholder='Gender' value='"+data[0].gender+"'></div></div>";
			content+="<div class='form-group'><label class='col-md-3 col-md-offset-2 control-label'>Date of Employement:</label><div class='col-md-3'style='text-align:left' id='editUserDate_employed' name='"+data[0].date_employed+"'>"+data[0].date_employed+"</div></div>";
			content+="<div class='form-group'><button class='btn btn-lg btn-primary col-md-3 col-md-offset-2' id='cancelChanges'>Cancel</button><button class='btn btn-lg btn-primary col-md-3 col-md-offset-1' id='saveChanges'>Save Changes</button><div>";
			content+="</form>";
			$("#mainInfo").html(content);
		},"json");
	}