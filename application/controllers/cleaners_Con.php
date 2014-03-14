<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Cleaners_Con extends CI_Controller{

	public function load_Homepage(){
		$this->load->view('header');
		$this->load->view('cleaners_view');
		$this->load->view('footer');
	}
}