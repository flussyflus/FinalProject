
	<title>Administration Page</title>
</head>
<body style="background-color:#c0c0c0;">
	
	<div class="row">
		<div class="col-lg-6 col-lg-offset-3" >
			<h1>Bed/Ward Cleaning and Admittance</h1>
		</div>
	</div>
	<div class="container">
		<nav class="navbar navbar-default" role="navigation">
			<div class="container-fluid">
				<ul class="nav navbar-nav navbar navbar-left">
						<li><a href="" id="profileButton" data-toggle="tab">My Profile</a></li>
						<li><a href="" id="admittanceData" data-toggle="tab">Admittances</a></li>				
						<li><a href="" id="dischargeData" data-toggle="tab">Discharges</a></li>				
				</ul>
				<ul class="nav navbar-nav navbar-right">
					<li><a href='<?php echo base_url()."main/logout"?>'>Logout</a></li>
				</ul>
			</div><!-- /.container-fluid -->
		</nav>
	</div>
	
	
	<div class="container">
		
		<div class="jumbotron col-md-2" id="menuItems" style="padding:0;">					
		</div>
		
		<div class="jumbotron col-md-9 col-md-offset-1" style="padding-top:10px;text-align:center;">
			<div class="row" id="headInfo"></div>
			<div class="row" id="midInfo"></div>
			<div class="row" id="mainInfo"></div>
		</div>
	</div>
	
	<div class="modal fade" id="admitPatientModal">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header" id="admitModalHeader"></div>
				<div class="modal-body" id="admitModalBody"></div>
			</div>
		</div>
	</div>
	
		<script src="<?php echo base_url();?>js/vendor/jquery-1.10.1.min.js"></script>
		<script src="<?php echo base_url();?>js/vendor/bootstrap.min.js"></script>
		<script src="<?php echo base_url();?>js/admitFunctions.js"></script>
		<script src="<?php echo base_url();?>js/dischargeFunctions.js"></script>
		<script src="<?php echo base_url();?>js/profileFunctions.js"></script>
	</body>