<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Nurse_Con extends CI_Controller{

	public function load_Homepage(){
		$this->load->view('nurses_view');
		$this->load->view('footer');
	}

}