<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Cleaner_Con extends CI_Controller{

	public function load_Homepage(){
		$this->load->view('header');
		$this->load->view('cleaners_view');
		$this->load->view('footer');
	}

	public function load_Dirty_Beds(){
		$this->load->model('model_cleaners');
		$this->load->model('model_users');
		$t = $this->model_users->getType($this->session->userdata('email'));
		if($this->session->userdata('is_logged_in') && $t=='cleaner'){
			$data=$this->model_cleaners->getDirtyBeds();
			echo "$data";
		}else{
			redirect('/main/restricted');
		}
	}
}