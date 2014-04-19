<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Administration_Con extends CI_Controller{
	
	public function load_Homepage(){
		$this->load->view('header');
		$this->load->view('administration_view');
		$this->load->view('footer');
	}

}