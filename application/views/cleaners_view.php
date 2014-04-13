
	<title>cleaners Page</title>
</head>
<body style="background-color:#c0c0c0;">
	
	<div class="row">
		<h1 class="col-lg-offset-3">Bed/Ward Cleaning and Admittance</h1>
	</div>
	
	<div class="container">
		<nav class="navbar navbar-default" role="navigation">
			<div class="container-fluid">
				<ul class="nav navbar-nav navbar-left">
					<li><a id="profileButton" data-toggle="tab">My Profile</a></li>
					<li class="active"><a id="dirtyBedsData" data-toggle="tab">Dirty beds</a></li>				
				</ul>
				<ul class="nav navbar-nav navbar-right">
					<li class="navar-right"><a href='<?php echo base_url()."main/logout"?>'>Logout</a></li>
				</ul>
			</div><!-- /.container-fluid -->
		</nav>
	</div>
	<br>
	<div class="container">
		
		<div class="jumbotron col-md-2" id="menuItems" style="padding:0;">					
		</div>
		
		<div class="jumbotron col-md-9 col-md-offset-1" style="padding-top:10px;text-align:center;">
			<div class="row" id="headInfo"></div>
			<div class="row" id="midInfo"></div>
			<div class="row" id="mainInfo"></div>
		</div>
	</div>
	<!--<div class="container" style="background-color:green;">			
		<div class="jumbotron" style="background-color:white;">
			<!--		<ul class="nav nav- nav-justified">
						<li><a id="profileButton" data-toggle="tab">My Profile</a></li>
						<li class="active"><a id="dirtyBedsData" data-toggle="tab">Dirty beds</a></li>				
						<li><a href='<?php echo base_url()."main/logout"?>'>Logout</a></li>
					</ul>
			<div class="row" id="headInfo">
			</div>
			<div class="row" id="midInfo">
			</div>
			<div class="row container col-lg-offset-1" id="mainInfo">	
			</div>			
		</div>
	</div>-->
	
		<script src="<?php echo base_url();?>js/vendor/jquery-1.10.1.min.js"></script>
		<script src="<?php echo base_url();?>js/vendor/bootstrap.min.js"></script>
		<script src="<?php echo base_url();?>js/cleanerFunctions.js"></script>
	</body>