<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Discharge_Con extends CI_Controller{
	
	public function getUniqueAdmittances(){
		$this->load->model('model_discharge');
		$this->load->model('model_users');
		$t = $this->model_users->getType($this->session->userdata('email'));
        if ($this->session->userdata('is_logged_in')&&$t!='cleaner'){
            $s = $this->model_discharge->getUniqueAdmittances();
            echo "$s";
        } else {
            redirect('/main/restricted');
        }
	}
	
		public function getUniqueDischargeDates(){
		$this->load->model('model_discharge');
		$this->load->model('model_users');
		$t = $this->model_users->getType($this->session->userdata('email'));
        if ($this->session->userdata('is_logged_in')&&$t!='cleaner'){
            $s = $this->model_discharge->getUniqueDischargeDates();
            echo "$s";
        } else {
            redirect('/main/restricted');
        }
	}

	public function getDischargeTable(){
		$this->load->model('model_discharge');
		$this->load->model('model_users');
		$t = $this->model_users->getType($this->session->userdata('email'));
        if ($this->session->userdata('is_logged_in')&&$t!='cleaner'){
            $a=$this->input->get('admitID');
            $b=$this->input->get('dischargeDate');
            $c=$this->input->get('reason');
			$s = $this->model_discharge->getDischargeTable($a,$b,$c);
            echo "$s";
        } else {
            redirect('/main/restricted');
        }
	}
	
	public function getUniqueBeds(){
		$this->load->model('model_discharge');
		$this->load->model('model_users');
		$t = $this->model_users->getType($this->session->userdata('email'));
        if ($this->session->userdata('is_logged_in')&&$t!='cleaner'){
            $s = $this->model_discharge->getUniqueBeds();
            echo "$s";
        } else {
            redirect('/main/restricted');
        }
	}
	
	public function getUniquePatients(){
		$this->load->model('model_discharge');
		$this->load->model('model_users');
		$t = $this->model_users->getType($this->session->userdata('email'));
        if ($this->session->userdata('is_logged_in')&&$t!='cleaner'){
            $s = $this->model_discharge->getUniquePatients();
            echo "$s";
        } else {
            redirect('/main/restricted');
        }
	}
	
	public function getUniqueRooms(){
		$this->load->model('model_discharge');
		$this->load->model('model_users');
		$t = $this->model_users->getType($this->session->userdata('email'));
        if ($this->session->userdata('is_logged_in')&&$t!='cleaner'){
            $s = $this->model_discharge->getUniqueRooms();
            echo "$s";
        } else {
            redirect('/main/restricted');
        }
	}
	
	public function getUniqueWards(){
		$this->load->model('model_discharge');
		$this->load->model('model_users');
		$t = $this->model_users->getType($this->session->userdata('email'));
        if ($this->session->userdata('is_logged_in')&&$t!='cleaner'){
            $s = $this->model_discharge->getUniqueWards();
            echo "$s";
        } else {
            redirect('/main/restricted');
        }
	}
	
	public function getDischargeBedsTable(){
		$this->load->model('model_discharge');
		$this->load->model('model_users');
		$t = $this->model_users->getType($this->session->userdata('email'));
        if ($this->session->userdata('is_logged_in')&&$t!='cleaner'){
            $a=$this->input->get('bedID');
            $b=$this->input->get('patientID');
            $c=$this->input->get('roomID');
            $d=$this->input->get('wardID');
			$s = $this->model_discharge->getDischargeBedsTable($a,$b,$c,$d);
            echo "$s";
        } else {
            redirect('/main/restricted');
        }
	}
	
	public function dischargeFromBed(){
		$this->load->model('model_discharge');
		$this->load->model('model_users');
		$t = $this->model_users->getType($this->session->userdata('email'));
        if ($this->session->userdata('is_logged_in')&&$t!='cleaner'){
            $a=$this->input->post('bedID');
			$s = $this->model_discharge->dischargeFromBed($a);
            echo "$s";
        } else {
            redirect('/main/restricted');
        }
	}
}