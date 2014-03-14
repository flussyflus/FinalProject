<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Beds_Con extends CI_Controller{
	public function load_Dirty_Beds(){
			$this->load->model('model_beds');
			$this->load->model('model_users');
			$t = $this->model_users->getType($this->session->userdata('email'));
			if($this->session->userdata('is_logged_in')){
				$data=$this->model_beds->getDirtyBeds();
				echo "$data";
			}else{
				redirect('/main/restricted');
			}
		}
		
	public function load_Occupied_Beds(){
			$this->load->model('model_beds');
			$this->load->model('model_users');
			$t = $this->model_users->getType($this->session->userdata('email'));
			if($this->session->userdata('is_logged_in')){
				$data=$this->model_beds->getOccupiedBeds();
				echo "$data";
			}else{
				redirect('/main/restricted');
			}
		}
		
	public function load_Vacant_Beds(){
			$this->load->model('model_beds');
			$this->load->model('model_users');
			$t = $this->model_users->getType($this->session->userdata('email'));
			if($this->session->userdata('is_logged_in')){
				$data=$this->model_beds->getVacantBeds();
				echo "$data";
			}else{
				redirect('/main/restricted');
			}
		}
		
		public function find_Med_Wards(){
			$this->load->model('model_beds');
			$this->load->model('model_users');
			$t = $this->model_users->getType($this->session->userdata('email'));
			if($this->session->userdata('is_logged_in')){
				$data=$this->model_beds->getMedWards();
				echo "$data";
			}else{
				redirect('/main/restricted/');
			}
		}
		
		public function find_Surg_Wards(){
			$this->load->model('model_beds');
			$this->load->model('model_users');
			$t = $this->model_users->getType($this->session->userdata('email'));
			if($this->session->userdata('is_logged_in')){
				$data=$this->model_beds->getSurgWards();
				echo "$data";
			}else{
				redirect('/main/restricted/');
			}
		}
		
		public function find_Ward_dirty_beds(){
			$this->load->model('model_beds');
			$this->load->model('model_users');
			$t = $this->model_users->getType($this->session->userdata('email'));
			if($this->session->userdata('is_logged_in')){
				$u = $this->input->get('wardID');
				$data=$this->model_beds->getWardDirtyBeds($u);
				echo "$data";
			}else{
				redirect('/main/restricted/');
			}
		}
		
		public function find_Ward_Occupied_Beds(){
			$this->load->model('model_beds');
			$this->load->model('model_users');
			$t = $this->model_users->getType($this->session->userdata('email'));
			if($this->session->userdata('is_logged_in')){
				$u = $this->input->get('wardID');
				$data=$this->model_beds->getWardOccupiedBeds($u);
				echo "$data";
			}else{
				redirect('/main/restricted/');
			}
		}
		
		public function find_Ward_Vacant_Beds(){
			$this->load->model('model_beds');
			$this->load->model('model_users');
			$t = $this->model_users->getType($this->session->userdata('email'));
			if($this->session->userdata('is_logged_in')){
				$u = $this->input->get('wardID');
				$data=$this->model_beds->getWardVacantBeds($u);
				echo "$data";
			}else{
				redirect('/main/restricted/');
			}
		}
		
}