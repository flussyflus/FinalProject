
	<title>Admin Page</title>
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
						<li class="active"><a href="" id="logsData" data-toggle="tab">Logs</a></li>
						<li><a href="" id="usersData" data-toggle="tab">Users</a></li>	
						<li><a href="" id="admittanceData" data-toggle="tab">Admittances</a></li>
						<li><a href="" id="dischargeData" data-toggle="tab">Discharges</a></li>
						<li><a href="" id="bedsData" data-toggle="tab">Beds</a></li>				
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
	<!--
	<div class="modal fade" id="addUserModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				  <div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
							<h2 class="modal-title" id="registerModalLabel" style="font-family:Arial Black;color:#0099FF;text-align:center;">Add User Record</h2>
						</div>
						<div class="modal-body">
							<form>
								<div class="form-group">
									<label>E-mail Address</label>
									<input type="email" id="regEmail" name="regEmail" class="form-control" placeholder="Email Address" required>
								</div>
						
						<div class="form-group">
										<label>Password</label><input type="password" id="regPassword" name="regPassword" class="form-control password" placeholder="Password" required>
									</div><div class="form-group">
										<label>Confirm Password</label><input type="password" id="password-confirm" class="form-control password" placeholder="Confirm Password" required>
									</div><div class="form-group"><label>User Type</label><br>
										<select id="selectTypeReg" class="form-control"><option selected="selected" id="cleaner" value="cleaner">Cleaner</option>
											<option id="administrator" value="administrator">Administrator</option><option id="administration" value="administration">Administration</option>
											<option id="triage" value="triage">Triage Nurse</option></select></div><div class="form-group">
										<label>First Name</label><input type="text" name="regFirst_name" id="regFirst_name" class="form-control" placeholder="First Name" required>
									</div><div class="form-group">
										<label>Last Name</label><input type="text" name="regLast_name" id="regLast_name" class="form-control" placeholder="Last Name" required>
									</div><div class="form-group">
										<label>Address</label>
										<input type="text" id="regAddress" name="regAddress" class="form-control" placeholder="Address" required>
									</div>
									<div class="form-group">
										<label>Date of Birth</label>
										<input type="text" id="regDob" name="regDob" class="form-control" placeholder="Date of Birth" required>
									</div>
									<div class="form-group"><label>Date of Employment</label>
										<input type="text" id="regDoe" name="regDoe" class="form-control" placeholder="Date of Employment" required>
									</div><div class="form-group"><label>Gender</label><br>
										<select id="selectGenderReg" class="form-control">
											<option id="M" value="M">Male</option>
											<option id="F" value="F">Female</option>
										</select>
									</div>
									<button class="btn btn-lg btn-primary btn-block" type="submit" id="addUserRec">Register!</button>
									 <div class="alert alert-danger" id="password-confirm-failed" style="display:none;">
					                     <a href="#" class="alert-link">
					                        Passwords don't match!
					                     </a></div></form>
							</div>
						</div>Modal Body
					</div><!-- /.modal-content 
				  </div><!-- /.modal-dialog 
				</div> <!--/.modal -->
	
		
		<div class="modal fade" id="admitPatientModal">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header" id="admitModalHeader"></div>
					<div class="modal-body" id="admitModalBody"></div>
				</div>
			</div>
		</div>
		
		<div class="modal fade" id="addBedModal">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header" id="addBedModalHeader"></div>
					<div class="modal-body" id="addBedModalBody"></div>
				</div>
			</div>
		</div>
		
		<div class="modal fade" id="addUserModal">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header" id="addUserModalHeader"></div>
					<div class="modal-body" id="addUserModalBody"></div>
				</div>
			</div>
		</div>
		
		<script src="<?php echo base_url();?>js/vendor/jquery-1.10.1.min.js"></script>
		<script src="<?php echo base_url();?>js/vendor/bootstrap.min.js"></script>
		<script src="<?php echo base_url();?>js/adminFunctions.js"></script>
		<script src="<?php echo base_url();?>js/profileFunctions.js"></script>
		<script src="<?php echo base_url();?>js/bedsFunctions.js"></script>
		<script src="<?php echo base_url();?>js/admitFunctions.js"></script>
		<script src="<?php echo base_url();?>js/dischargeFunctions.js"></script>
	</body>