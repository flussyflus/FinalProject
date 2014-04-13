<?php include 'header.php' ?>

	<title>Login Page</title>
	
</head>
<body style="padding:75px;background-image:url('<?php echo base_url();?>css/images/bedslogo.jpg')">
	<div class="container">
		<div class="jumbotron col-lg-8 col-lg-offset-2" style="background-color:#ee2c2c;">
				<h1 class="col-lg-offset-5">Login</h1><br>
				
				<?php
					$formAttributes = array('class'=>'form-horizontal');
					echo form_open('main/logins_validation',$formAttributes);
					echo validation_errors();
				?>
				<div class="form-group">
					<label for="email" class="col-sm-2 control-label">E-mail</label>
					<div class="col-sm-10">
						<?php $fieldAttributes=array('class'=>'form-control','name'=>'email');echo form_input($fieldAttributes);?>
					</div>
				</div>
				
				<div class="form-group">
					<label for="password" class="col-sm-2 control-label">Password</label>
					<div class="col-sm-10">
						<?php $fieldAttributes=array('class'=>'form-control','name'=>'password');echo form_password($fieldAttributes);?>
					</div>
				</div>
				
				<div class="form-group">
					<div class="col-sm-offset-2 col-sm-10">
						<?php $fieldAttributes=array('class'=>'form-control btn btn-primary','name'=>'login_submit', 'value'=>'Login');echo form_submit($fieldAttributes);?>
					</div>
				</div>
				<?php echo form_close();?>
		</div>
	</div>

</body>
	<footer>
		<div class="container col-md-12">
			<p>Copyright &copy; Christopher Flus & Crystal Gajraj 2014</p>
		</div>
	</footer>
</html>