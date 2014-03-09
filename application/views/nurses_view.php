	<title>nurses Page</title>
</head>

<body>

	<div id="container">
		<h1>Nurses page</h1>
		<?php
		
			echo "<pre>";
			
			print_r($this->session->all_userdata());
			
			echo "</pre>";
		
		?>
		
		<a href='<?php echo base_url()."main/logout"?>'>Logout</a>
	</div>


