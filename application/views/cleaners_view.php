
	<title>cleaners Page</title>
</head>
<body style="background-color:#c0c0c0;">
	<div class="row" style="background-color:#ee2c2c;">
	<div class="col-lg-6 col-lg-offset-3" >
		<h1>Bed/Ward Cleaning and Admittance</h1>
	</div>
	</div>
	
	<div class="row">
		<div class="col-md-3 col-md-offset-4"">
			<ul class="nav nav-pills">
				<li><a href="" id="profileButton" data-toggle="tab">My Profile</a></li>
				<li class="active"><a href="" id="dirtyBedsData" data-toggle="tab">Dirty beds</a></li>				
				<li><a href='<?php echo base_url()."main/logout"?>'>Logout</a></li>
			</ul>
		</div>
	</div>
	
	<div class="container col-md-12" style="background-color:;">
		<div class="jumbotron boxStuff">
			<div class="row" id="headInfo">
			</div>
			<div class="row" id="mainInfo">	
			</div>			
		</div>
	</div>
	
		<script src="<?php echo base_url();?>js/vendor/jquery-1.10.1.min.js"></script>
		<script src="<?php echo base_url();?>js/vendor/bootstrap.min.js"></script>
		<script src="<?php echo base_url();?>js/cleanerFunctions.js"></script>
	</body>