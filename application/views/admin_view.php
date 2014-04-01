
	<title>Admin Page</title>
</head>
<body style="background-color:#c0c0c0;">
	<div class="row" style="background-color:#ee2c2c;">
	<div class="col-lg-6 col-lg-offset-3" >
		<h1>Bed/Ward Cleaning and Admittance</h1>
	</div>
	</div>
	
	<div class="row">
		<div class="col-md-7 col-md-offset-3"">
			<ul class="nav nav-pills">
				<li><a href="" id="profileButton" data-toggle="tab">My Profile</a></li>
				<li class="active"><a href="" id="logsData" data-toggle="tab">Logs</a></li>
				<li><a href="" id="usersData" data-toggle="tab">Users</a></li>	
				<li><a href="" id="admittanceData" data-toggle="tab">Admittances</a></li>
				<li><a href="" id="DischargeData" data-toggle="tab">Discharges</a></li>
				<li><a href="" id="bedsData" data-toggle="tab">Beds</a></li>				
				<li><a href='<?php echo base_url()."main/logout"?>'>Logout</a></li>
			</ul>
		</div>
	</div>
	
	<div class="container" style="background-color:;">
		<div class="jumbotron" style="background-color:white;box-shadow:0 0 30px #000">
			<div class="row" id="headInfo">
			</div>
			<div class="row" id="mainInfo">	
			</div>			
		</div>
	</div>
		
	
		<script src="<?php echo base_url();?>js/vendor/jquery-1.10.1.min.js"></script>
		<script src="<?php echo base_url();?>js/vendor/bootstrap.min.js"></script>
		<script src="<?php echo base_url();?>js/cleanerFunctions.js"></script>
		<script src="<?php echo base_url();?>js/adminFunctions.js"></script>
	</body>