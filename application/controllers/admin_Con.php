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
}