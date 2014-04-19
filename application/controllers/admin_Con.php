<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Admin_Con extends CI_Controller{
	
	public function load_Homepage(){
		$this->load->view('header');
		$this->load->view('admin_view');
		$this->load->view('footer');
	}
	
	public function getUniqueDates(){
		$this->load->model('model_admin');
		$this->load->model('model_users');
		$t = $this->model_users->getType($this->session->userdata('email'));
        if ($this->session->userdata('is_logged_in')){
            $s = $this->model_admin->getUniqueDates();
            echo "$s";
        } else {
            redirect('/main/restricted');
        }
	}
	
	public function getUniqueUsers(){
		$this->load->model('model_admin');
		$this->load->model('model_users');
		$t = $this->model_users->getType($this->session->userdata('email'));
        if ($this->session->userdata('is_logged_in')){
            $s = $this->model_admin->getUniqueUsers();
            echo "$s";
        } else {
            redirect('/main/restricted');
        }
	}
	
	public function getuniqueTypes(){
		$this->load->model('model_admin');
		$this->load->model('model_users');
		$t = $this->model_users->getType($this->session->userdata('email'));
        if ($this->session->userdata('is_logged_in')){
            $s = $this->model_admin->getUniqueTypes();
            echo "$s";
        } else {
            redirect('/main/restricted');
        }
	}
	
	public function getuniqueBeds(){
		$this->load->model('model_admin');
		$this->load->model('model_users');
		$t = $this->model_users->getType($this->session->userdata('email'));
        if ($this->session->userdata('is_logged_in')){
            $s = $this->model_admin->getUniqueBeds();
            echo "$s";
        } else {
            redirect('/main/restricted');
        }
	}
	
	public function getuniqueRooms(){
		$this->load->model('model_admin');
		$this->load->model('model_users');
		$t = $this->model_users->getType($this->session->userdata('email'));
        if ($this->session->userdata('is_logged_in')){
            $s = $this->model_admin->getUniqueRooms();
            echo "$s";
        } else {
            redirect('/main/restricted');
        }
	}
	
	public function getuniqueAvailabilities(){
		$this->load->model('model_admin');
		$this->load->model('model_users');
		$t = $this->model_users->getType($this->session->userdata('email'));
        if ($this->session->userdata('is_logged_in')){
            $s = $this->model_admin->getUniqueAvailabilities();
            echo "$s";
        } else {
            redirect('/main/restricted');
        }
	}
	
	public function getuniqueWards(){
		$this->load->model('model_admin');
		$this->load->model('model_users');
		$t = $this->model_users->getType($this->session->userdata('email'));
        if ($this->session->userdata('is_logged_in')){
            $s = $this->model_admin->getUniqueWards();
            echo "$s";
        } else {
            redirect('/main/restricted');
        }
	}
	
	public function getLogsTable(){
		$this->load->model('model_admin');
		$this->load->model('model_users');
		$t = $this->model_users->getType($this->session->userdata('email'));
        if ($this->session->userdata('is_logged_in')){
			$d = $this->input->get('date');
			$u = $this->input->get('user');
			$s = $this->model_admin->getLogsTable($u,$d);
            echo "$s";
        } else {
            redirect('/main/restricted');
        }
	}
	
	public function getUsersTable(){
		$this->load->model('model_admin');
		$this->load->model('model_users');
		$t = $this->model_users->getType($this->session->userdata('email'));
        if ($this->session->userdata('is_logged_in')){
			$d = $this->input->get('type');
			$u = $this->input->get('user');
			$s = $this->model_admin->getUsersTable($u,$d);
            echo "$s";
        } else {
            redirect('/main/restricted');
        }
	}
	
	public function getBedsTable(){
		$this->load->model('model_admin');
		$this->load->model('model_users');
		$t = $this->model_users->getType($this->session->userdata('email'));
        if ($this->session->userdata('is_logged_in')){
			$u = $this->input->get('bedID');
			$v= $this->input->get('roomID');
			$w = $this->input->get('wardID');
			$x = $this->input->get('availability');
			$s = $this->model_admin->getBedsTable($u,$v,$w,$x);
            echo "$s";
        } else {
            redirect('/main/restricted');
        }
	}
	
	public function delete_User(){
		$this->load->model('model_admin');
		$this->load->model('model_users');
		$t = $this->model_users->getType($this->session->userdata('email'));
        if ($this->session->userdata('is_logged_in')){
			$d = $this->input->post('id');
			$s = $this->model_admin->deleteUser($d);
			$this->model_users->setLog($this->session->userdata('email'),$t,getDate(),'user '.$d.' deleted');
            echo "$s";
        } else {
            redirect('/main/restricted');
        }
	}
	
	public function deleteBed(){
		$this->load->model('model_admin');
		$this->load->model('model_users');
		$t = $this->model_users->getType($this->session->userdata('email'));
        if ($this->session->userdata('is_logged_in')){
			$d = $this->input->post('bedID');
			$s = $this->model_admin->deleteBed($d);
			$this->model_users->setLog($this->session->userdata('email'),$t,getDate(),'Bed '.$d.' deleted');
           
            echo "$s";
        } else {
            redirect('/main/restricted');
        }
	}
	
	public function addUserRecord(){
		$this->load->model('model_admin');
		$this->load->model('model_users');
		$t = $this->model_users->getType($this->session->userdata('email'));
        if ($this->session->userdata('is_logged_in')){
			$d = $this->input->post('email');
			$e = $this->input->post('password');
			$f = $this->input->post('type');
			$g = $this->input->post('firstname');
			$h = $this->input->post('lastname');
			$i = $this->input->post('address');
			$j = $this->input->post('date_employed');
			$k = $this->input->post('dob');
			$l = $this->input->post('gender');
			$s = $this->model_admin->addUserRecord($d,$e,$f);
            echo "$s";
        } else {
            redirect('/main/restricted');
        }
	}
	
	
	
}