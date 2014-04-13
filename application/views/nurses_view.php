
	<title>Nurses Page</title>
</head>
<body style="background-color:#c0c0c0;">
	<div class="row" style="background-color:#ee2c2c;">
		<h1 class="col-lg-offset-3">Bed/Ward Cleaning and Admittance</h1>
	</div>
				
		<div class=" jumbotron" style="background-color:white;">
			<div class="row">
				<div>
					<ul class="nav nav-tabs nav-justified">
						<li><a id="profileButton" data-toggle="tab">My Profile</a></li>
						<li class="active"><a id="dirtyBedsData" data-toggle="tab">Beds</a></li>				
						<li><a id="admits" data-toggle="tab">Admittances/discharges</a></li>				
						<li><a href='<?php echo base_url()."main/logout"?>'>Logout</a></li>
					</ul>
				</div>
			</div><br>
			<div class="row" id="headInfo">
			</div>
			<div class="row" id="midInfo">
			</div>
			<div class="row container col-lg-offset-1" id="mainInfo">	
			</div>			
		</div>
	
	
		<script src="<?php echo base_url();?>js/vendor/jquery-1.10.1.min.js"></script>
		<script src="<?php echo base_url();?>js/vendor/bootstrap.min.js"></script>
		<script src="<?php echo base_url();?>js/cleanerFunctions.js"></script>
	</body>