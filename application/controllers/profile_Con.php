<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Profile_Con extends CI_Controller{
	
	public function getUserProfileData(){
		$this->load->model('model_users');
		if($this->session->userdata('is_logged_in')){
			$u = $this->session->userdata('email');
			$s = $this->model_users->getProfileInfo($u);
			echo "$s";
        } else {
            redirect('/main/restricted');
        }
	}
		
	public function getMyProfile(){
		$this->load->model('model_profiles');
		$this->load->model('model_users');
		$t = $this->session->userdata('email');
		if($this->session->userdata('is_logged_in')){
			$data=$this->model_profiles->getProfile($t);
			echo "$data";
		}else{
			redirect('/main/restricted');
		}
	}
	
	public function editUserProfile(){
		
	}

}