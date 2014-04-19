<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Admittance_Con extends CI_Controller{
	
	public function getUniquePatients(){
		$this->load->model('model_admittance');
		$this->load->model('model_users');
		$t = $this->model_users->getType($this->session->userdata('email'));
        if ($this->session->userdata('is_logged_in')&&$t!='cleaner'){
            $s = $this->model_admittance->getUniquePatients();
            echo "$s";
        } else {
            redirect('/main/restricted');
        }
	}
	
	public function getUniqueDischargePatients(){
		$this->load->model('model_admittance');
		$this->load->model('model_users');
		$t = $this->model_users->getType($this->session->userdata('email'));
        if ($this->session->userdata('is_logged_in')&&$t!='cleaner'){
            $s = $this->model_admittance->getUniqueDischargePatients();
            echo "$s";
        } else {
            redirect('/main/restricted');
        }
	}
	
	public function getUniqueAdmittances(){
		$this->load->model('model_admittance');
		$this->load->model('model_users');
		$t = $this->model_users->getType($this->session->userdata('email'));
        if ($this->session->userdata('is_logged_in')&&$t!='cleaner'){
            $s = $this->model_admittance->getUniqueAdmittances();
            echo "$s";
        } else {
            redirect('/main/restricted');
        }
	}
	
	public function getUniqueBeds(){
		$this->load->model('model_admittance');
		$this->load->model('model_users');
		$t = $this->model_users->getType($this->session->userdata('email'));
        if ($this->session->userdata('is_logged_in')&&$t!='cleaner'){
            $s = $this->model_admittance->getUniqueBeds();
            echo "$s";
        } else {
            redirect('/main/restricted');
        }
	}
	
	public function getUniqueAdmitDates(){
		$this->load->model('model_admittance');
		$this->load->model('model_users');
		$t = $this->model_users->getType($this->session->userdata('email'));
        if ($this->session->userdata('is_logged_in')&&$t!='cleaner'){
            $s = $this->model_admittance->getUniqueAdmitDates();
            echo "$s";
        } else {
            redirect('/main/restricted');
        }
	}
	
	public function getAdmitTable(){
		$this->load->model('model_admittance');
		$this->load->model('model_users');
		$t = $this->model_users->getType($this->session->userdata('email'));
        if ($this->session->userdata('is_logged_in')&&$t!='cleaner'){
            $a=$this->input->get('patientID');
            $b=$this->input->get('bedID');
            $c=$this->input->get('admit_date');
			$s = $this->model_admittance->getAdmitTable($a,$b,$c);
            echo "$s";
        } else {
            redirect('/main/restricted');
        }
	}
	
	public function admitPatient(){
		$this->load->model('model_admittance');
		$this->load->model('model_users');
		$t = $this->model_users->getType($this->session->userdata('email'));
        if ($this->session->userdata('is_logged_in')&&$t!='cleaner'){
			$id=$_POST["admitFormBedID"];
            $a=$_POST["admitFormPatientID"];
            $b=$_POST['admitFormPatientFirstName'];
            $c=$_POST['admitFormPatientLastName'];
			$g =$this->model_admittance->addPatient($a,$b,$c);
			$s = $this->model_admittance->admitPatient($id,$a,$b,$c);
            redirect('/finalproject/triage_Con/load_Homepage');
        } else {
            redirect('/main/restricted');
        }
	}
	
	public function getWardsByType(){
		$this->load->model('model_admittance');
		$this->load->model('model_users');
		$t = $this->model_users->getType($this->session->userdata('email'));
        if ($this->session->userdata('is_logged_in')&&$t!='cleaner'){
			$d=$this->input->get('wardType');
			$s = $this->model_admittance->getWardsByType($d);
			echo "$s";
		} else {
            redirect('/main/restricted');
        }
	}	
	
	public function getVacantBeds(){
		$this->load->model('model_admittance');
		$this->load->model('model_users');
		$t = $this->model_users->getType($this->session->userdata('email'));
        if ($this->session->userdata('is_logged_in')&&$t!='cleaner'){
			$d=$this->input->get('wardID');
			$s = $this->model_admittance->getVacantBeds($d);
			echo "$s";
		} else {
            redirect('/main/restricted');
        }
	}	
}