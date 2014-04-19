(function(window){
	$(document).on('click','#admittanceData',function(){
		//loads menu for the admittances tab
		var content='<ul class="nav nav-pills nav-stacked"><li><a class="btn btn-lg" id="viewAdmittances" data-toggle="tab">View Admittances</a></li><li><a class="btn btn-lg" id="admitPatient" data-toggle="tab">Admit Patient</a></li></ul>';
		$("#menuItems").html(content);
		$("#headInfo").html("");
		$("#midInfo").html("");
		$("#mainInfo").html("");
	});
	
	

	$(document).on('click','#viewAdmittances',function(){
	//load search options and heading for viewing admittance
	var content ="<div class='col-xs-3'><select id='selectPatientID' class='form-control'><option selected ='selected' value ='all'>PatientID</option></select></div>";
		content+="<div class='col-xs-3'><select id='selectBedID' class='form-control'><option selected ='selected' value ='all'>BedID</option></select></div>";
		content+="<div class='col-xs-3'><select id='selectAdmitDates' class='form-control'><option selected ='selected' value ='all'>Admittance Date</option></select></div>";
		content+="<div class='col-md-2'><button class='btn btn-primary btn-danger' id='getAdmittances'>Get Admittances</button></div>";
		$("#headInfo").html("<h2>view Admittances</h2><hr>");
		$("#midInfo").html(content);
		$("#mainInfo").html("");
		
		$.get("/finalproject/admittance_Con/getUniquePatients",function(data){
			var c="";	
			for(i=0;i<data.length;i++){
				c+='<option id="'+data[i].patientID+'" value="'+data[i].patientID+'">'+data[i].patientID+'</option>';
			}		
			$("#selectPatientID").append(c);
		},"json");

		$.get("/finalproject/admittance_Con/getUniqueBeds",function(data){
			var d="";	
			for(i=0;i<data.length;i++){
				d+='<option id="'+data[i].bedID+'" value="'+data[i].bedID+'">'+data[i].bedID+'</option>';
			}		
			$("#selectBedID").append(d);
		},"json");

		$.get("/finalproject/admittance_Con/getUniqueAdmitDates",function(data){
			var e="";	
			for(i=0;i<data.length;i++){
				e+='<option id="'+data[i].admit_date+'" value="'+data[i].admit_date+'">'+data[i].admit_date+'</option>';
			}		
			$("#selectAdmitDates").append(e);
		},"json");

	});
	
	
	
	$(document).on('click','#getAdmittances',function(){
		//loads table of admittances to the screen
		var sel = document.getElementById('selectPatientID');
		var selected = sel.options[sel.selectedIndex];
		var param1 = selected.getAttribute('value');
		sel = document.getElementById('selectBedID');
		selected = sel.options[sel.selectedIndex];
		var param2 = selected.getAttribute('value');
		sel = document.getElementById('selectAdmitDates');
		selected = sel.options[sel.selectedIndex];
		var param3 = selected.getAttribute('value');
		var content ="<hr><div class='pre-scrollable'><table id='mytable' class='table table-striped table-bordered'><thead><tr><th>Admittance ID</th><th>Bed ID</th><th>Admittance Date</th><th>PatientAdmitted</th></tr><thead><tbody id='tableBody'></tbody></table></div>";
		$("#mainInfo").html(content);
		var c="";
		$.get("/finalproject/admittance_Con/getAdmitTable",{patientID:param1,bedID:param2,admit_date:param3},function(data){
			for(i=0;i<data.length;i++){
				c+='<tr><td>' + data[i].admitID + '</td><td>' + data[i].bedID + '</td><td>'+data[i].admit_date+'</td><td>' + data[i].patientID + '</td></tr>';
			}
			$("#tableBody").append(c);
		},"json");
	});

	$(document).on('click','#admitPatient',function(){
		//loads search options for beds to admit on
		//loads beds sub menu to screen
		$("#midInfo").html("");
		var content ="<div class='col-xs-10'><select id='selectWardType' class='form-control'><option selected ='selected' value =''> Select Ward Type</option><option value ='all'>All Wards</option><option value ='medical'>Medical Wards</option><option value ='surgical'>Surgical Wards</option></select></div>";
		content+="<div class='col-md-2'><button class='btn btn-primary btn-danger' id='getAdmitBeds'>Get Beds</button></div>";
		$("#headInfo").html("<h2>Admit Patient on Bed</h2><hr>");
		$("#midInfo").html(content);
		$("#mainInfo").html("");
	});
	
	$(document).on('click','#getAdmitBeds',function(){
		//loads table of beds according to search filters
		var content ="<hr><div class='pre-scrollable'><table id='mytable' class='table table-striped table-bordered'><thead><tr><th>Bed</th><th>Room</th><th>Ward</th><th></th></tr><thead><tbody id='tableBody'></tbody></table></div>";
		$("#mainInfo").html(content);
		var sel = document.getElementById('selectWardType');
		var selected = sel.options[sel.selectedIndex];
		var param1 = selected.getAttribute('value');
		var c="";
		$.get("/finalproject/admittance_Con/getWardsByType",{wardType:param1},function(data){
			for(i=0;i<data.length;i++){
				$.get('/finalproject/admittance_Con/getVacantBeds',{wardID:data[i].wardID},function(data2){
					for(j=0;j<data2.length;j++){
						c+='<tr><td>' + data2[j].bedID + '</td>' + '<td>' + data2[j].roomID + '</td>'+'<td>'+data2[j].wardID+'</td><td class="col-md-1"><button class="btn btn-primary btn-danger" id="admitPatientOnBed" data-toggle="modal" data-target="#admitPatientModal" name="'+data2[j].bedID+'">Admit To this bed</button></td></tr>';
					}
				$("#tableBody").append(c);
				},"json");
			}
			
		},"json");
	});
	
	$(document).on('click','#admitPatientOnBed',function(){
		var content='<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';
		content+='<h2 class="modal-title" id="admitModalBedID">Admit Patient onto Bed</h2>';
		$("#admitModalHeader").html(content);
		var content2='<form method="post" action="/finalproject/admittance_Con/admitPatient">';
		content2+='<div class="form-group"><label>Bed ID</label><input type="text" class="form-control" name="admitFormBedID" value="'+$(this).attr('name')+'" placeholder="Bed ID" readonly></div>';
		content2+='<div class="form-group"><label>PatientID</label><input type="text" class="form-control" name="admitFormPatientID" placeholder="Patient ID" required></div>';
		content2+='<div class="form-group"><label>Patient First Name</label><input type="text" class="form-control" name="admitFormPatientFirstName" placeholder="Patient First Name" required></div>';
		content2+='<div class="form-group"><label>Patient Last Name</label><input type="text" class="form-control" name="admitFormPatientLastName" placeholder="Patient Last Name" required></div>';
		content2+='<div><button class="btn btn-lg btn-primary col-md-offset-6" data-dismiss="modal">Cancel</button><button class="btn btn-lg btn-primary col-md-offset-1" type="submit" id="addUserRec">Admit Patient</button></div>';

		content2+='</form>';
		$("#admitModalBody").html(content2);
	});
}(this));