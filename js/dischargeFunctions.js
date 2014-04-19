(function(window){
	$(document).on('click','#dischargeData',function(){
		//loads menu for the admittances tab
		var content='<ul class="nav nav-pills nav-stacked"><li><a class="btn btn-lg" id="viewDischarges" data-toggle="tab">View Discharges</a></li><li><a class="btn btn-lg" id="dischargePatient" data-toggle="tab">Discharge Patient</a></li></ul>';
		$("#menuItems").html(content);
		$("#headInfo").html("");
		$("#midInfo").html("");
		$("#mainInfo").html("");
	});
	
	$(document).on('click','#viewDischarges',function(){
	//load search options and heading for viewing admittance
	var content ="<div class='col-xs-3'><select id='selectAdmitID' class='form-control'><option selected ='selected' value ='all'>AdmitID</option></select></div>";
		content+="<div class='col-xs-3'><select id='selectDischargeDate' class='form-control'><option selected ='selected' value ='all'>Discharge Date</option></select></div>";
		content+="<div class='col-xs-3'><select id='selectReason' class='form-control'><option selected ='selected' value ='all'>Reason for Discharge</option><option value ='discharge'>Discharge</option><option value ='death'>Death</option><option value ='walkout'>Walkout</option></select></div>";
		content+="<div class='col-md-2'><button class='btn btn-primary btn-danger' id='getDischarges'>Get Discharges</button></div>";
		$("#headInfo").html("<h2>View Discharges</h2><hr>");
		$("#midInfo").html(content);
		$("#mainInfo").html("");
		
		$.get("/finalproject/discharge_Con/getUniqueAdmittances",function(data){
			var c="";
			for(i=0;i<data.length;i++){
				c+='<option id="'+data[i].admitID+'" value="'+data[i].admitID+'">'+data[i].admitID+'</option>';
			}
			$("#selectAdmitID").append(c);
		},"json");
		
		$.get("/finalproject/discharge_Con/getUniqueDischargeDates",function(data){
			var c="";
			for(i=0;i<data.length;i++){
				c+='<option id="'+data[i].dischargeDate+'" value="'+data[i].dischargeDate+'">'+data[i].dischargeDate+'</option>';
			}
			$("#selectDischargeDate").append(c);
		},"json");
	});
	
	$(document).on('click','#getDischarges',function(){
		//loads table of discharges from the search filters
		var sel = document.getElementById('selectAdmitID');
		var selected = sel.options[sel.selectedIndex];
		var param1 = selected.getAttribute('value');
		sel = document.getElementById('selectDischargeDate');
		selected = sel.options[sel.selectedIndex];
		var param2 = selected.getAttribute('value');
		sel = document.getElementById('selectReason');
		selected = sel.options[sel.selectedIndex];
		var param3 = selected.getAttribute('value');
		var content ="<hr><div class='pre-scrollable'><table id='mytable' class='table table-striped table-bordered'><thead><tr><th>Discharge ID</th><th>Admittance ID</th><th>Discharge Date</th><th>Reason for Discharge</th></tr><thead><tbody id='tableBody'></tbody></table></div>";
		$("#mainInfo").html(content);
		var c="";
		$.get("/finalproject/discharge_Con/getDischargeTable",{admitID:param1,dischargeDate:param2,reason:param3},function(data){
			for(i=0;i<data.length;i++){
				c+='<tr><td>' + data[i].dischargeID + '</td><td>' + data[i].admitID + '</td><td>'+data[i].dischargeDate+'</td><td>' + data[i].reason + '</td></tr>';
			}
			$("#tableBody").append(c);
		},"json");
	});
	
	$(document).on('click','#dischargePatient',function(){
		//loads search options for discharging patient on
		//loads beds sub menu to screen
		$("#midInfo").html("");
		var content ="<div class='col-xs-2 col-xs-offset-1'><select id='selectDBedID' class='form-control'><option selected ='selected' value ='all'>Bed ID</option></select></div>";
		 content +="<div class='col-xs-2'><select id='selectPatientID' class='form-control'><option value='all'>Patient ID</option></select></div>";
		 content +="<div class='col-xs-2'><select id='selectRoomID' class='form-control'><option value='all'>Room ID</option></select></div>";
		 content +="<div class='col-xs-2'><select id='selectWardID' class='form-control'><option value='all'>Ward ID</option></select></div>";
		content+="<div class='col-md-2'><button class='btn btn-primary btn-danger' id='getDischargeBeds'>Get Beds</button></div>";
		$("#headInfo").html("<h2>Admit Patient on Bed</h2><hr>");
		$("#midInfo").html(content);
		$("#mainInfo").html("");
		var d="";
		$.get("/finalproject/discharge_Con/getUniqueBeds",function(data){
				
			for(i=0;i<data.length;i++){
				d+='<option id="'+data[i].bedID+'" value="'+data[i].bedID+'">'+data[i].bedID+'</option>';
			}		
			$("#selectDBedID").append(d);
		},"json");
		
		$.get("/finalproject/discharge_Con/getUniquePatients",function(data){
			var d="";	
			for(i=0;i<data.length;i++){
				d+='<option id="'+data[i].patientID+'" value="'+data[i].patientID+'">'+data[i].patientID+'</option>';
			}		
			$("#selectPatientID").append(d);
		},"json");
		
		$.get("/finalproject/discharge_Con/getUniqueRooms",function(data){
			var d="";	
			for(i=0;i<data.length;i++){
				d+='<option id="'+data[i].roomID+'" value="'+data[i].roomID+'">'+data[i].roomID+'</option>';
			}		
			$("#selectRoomID").append(d);
		},"json");
		
		$.get("/finalproject/discharge_Con/getUniqueWards",function(data){
			var d="";	
			for(i=0;i<data.length;i++){
				d+='<option id="'+data[i].wardID+'" value="'+data[i].wardID+'">'+data[i].wardID+'</option>';
			}		
			$("#selectWardID").append(d);
		},"json");
	});
	
	$(document).on('click','#getDischargeBeds',function(){
		var sel = document.getElementById('selectDBedID');
		var selected = sel.options[sel.selectedIndex];
		var param1 = selected.getAttribute('value');
		sel = document.getElementById('selectPatientID');
		selected = sel.options[sel.selectedIndex];
		var param2 = selected.getAttribute('value');
		sel = document.getElementById('selectRoomID');
		selected = sel.options[sel.selectedIndex];
		var param3 = selected.getAttribute('value');
		sel = document.getElementById('selectWardID');
		selected = sel.options[sel.selectedIndex];
		var param4 = selected.getAttribute('value');
		var content ="<hr><div class='pre-scrollable'><table id='mytable' class='table table-striped table-bordered'><thead><tr><th>Bed ID</th><th>Room ID</th><th>Ward ID</th><th>Patient ID</th><th></th></tr><thead><tbody id='tableBody'></tbody></table></div>";
		$("#mainInfo").html(content);
		var c="";
		$.get("/finalproject/discharge_Con/getDischargeBedsTable",{bedID:param1,patientID:param2,roomID:param3,wardID:param4},function(data){
			for(i=0;i<data.length;i++){
				c+='<tr><td>' + data[i].bedID + '</td><td>' + data[i].roomID + '</td><td>'+data[i].wardID+'</td><td>' + data[i].patientID + '</td><td class="col-md-1"><button class="btn btn-primary btn-danger" id="dischargeFromBed" name="'+data[i].bedID+'">Discharge</button></td></tr>';
			}
			$("#tableBody").append(c);
		},"json");
	});
	
	$(document).on('click','#dischargeFromBed',function(){
		//functionality for discharge patient form a bed
		//all it does is supposed to update the beds table of that bed
		//to dirty and remove the patient ID
		var c=$(this).attr('name');
		$.post("/finalproject/discharge_Con/dischargeFromBed",{bedID:c});
	});
	
}(this));