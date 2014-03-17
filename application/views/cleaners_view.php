
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
				<li><a href="#profileTab" data-toggle="tab">My Profile</a></li>
				<li class="active"><a href="#dirtyBedsData" data-toggle="tab">Dirty beds</a></li>				
				<li><a href='<?php echo base_url()."main/logout"?>'>Logout</a></li>
			</ul>
		</div>
	</div>
	
	<div class="container" style="background-color:;">
		<div class="jumbotron" style="background-color:white;box-shadow:0 0 30px #000">
			<div class="row tab-content">
				<!--Tabbed content for dirty beds tab-->
				<div id="dirtyBedsData" class="tab-pane fade in active col-md-12">
					<div class='row'>
						<h2>Dirty beds</h2>
					</div>
					<hr>
					<div class='row'>
						<ul class='nav nav-pills'>
							<li>
								<a class='btn btn-lg' id="dirtyBedsButton" data-toggle='tab'>All Wards</a>
							</li>
							<li>
								<a class='btn btn-lg' id='dirtyMedicalBeds' data-toggle='tab'>Medical Wards</a>
							</li>
							<li>
								<a class='btn btn-lg' id="dirtySurgicalBeds" data-toggle='tab'>Surgical Wards</a>
							</li>
						</ul>
						<hr>
					</div>
					<div class="row" id="mainInfo">
					
					</div>
				</div>
				
				<!-- Tabbed content for profile information tab-->
				<div id="profileTab" class="tab-pane fade col-md-12">
					<div class="row">
						<h2> Profile Informtion</h2>
					</div>
					<div class="row" id="mainInfo">
					
					</div>
				</div>
			
			</div>
		</div>
	</div>