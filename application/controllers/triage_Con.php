<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Triage_Con extends CI_Controller{

	public function load_Homepage(){
		$this->load->view('header');
		$this->load->view('triage_view');
		$this->load->view('footer');
	}
}