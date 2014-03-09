(function(window){
	$(document).ready(function){
		
		$("#dirtyBedsButton").click(function(){
			var content="";
			
			$.get("/finalproject/cleaner_Con/getDirtyBeds",function(data){
				var i;
				content = "<h2 class='text-center'>Logs </h2><div class='pre-scrollable tblHeight'><table id='mytable' class='table table-striped table-bordered'><thead><tr><th>Username</th><th>Computer Id</th><th>Session Time(min)</th></tr></thead><tbody>";
				for (i = 0; i < data.length; i++) {
					content += '<tr><td>' + data[i].email + '</td>' + '<td>' + data[i].id + '</td>' + '<td>' + data[i].type + '</td></tr>';
				}
				$("mainInfo").html(content);
			},"json");
		});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	}
}(this));