<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Bureau_Con extends CI_Controller{

	public function load_Homepage(){
		$this->load->view('bureau_view');
		$this->load->view('footer');
	}

}