<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Main extends CI_Controller {

	public function index()
	{
		$this->login();
	}
	
	public function login(){
		$this->load->view('login');
	}
	
	public function members(){
		if($this->session->userdata('is_logged_in')){
			$this->load->model('model_users');
			$t = $this->model_users->getType($this->session->userdata('email'));
			if($t == 'cleaner'){
				redirect('cleaners_Con/load_Homepage');
			}
			else if($t=='nurse'){
				redirect('triage_Con/load_Homepage');
			}
			else if($t=='bureau'){
				redirect('bureau_Con/load_Homepage');
			}
			else{
				redirect('main/login');
			}
		}
		else{
			redirect('main/restricted');
		}		
	}
	
	public function restricted(){
		$this->load->view('restricted');
	}
	
	public function logins_validation(){
		
		$this->load->library('form_validation');
		
		$this->form_validation->set_rules('email','Email','required|trim|xss_clean|callback_validate_credentials');
		$this->form_validation->set_rules('password','Password','required|md5|trim');
		
		if($this->form_validation->run()){
			$data = array(
						'email' => $this->input->post('email'),
						'is_logged_in' => 1
					);
		
			$this->session->set_userdata($data);
			redirect('main/members');
		}
		else{
			$this->load->view('login');
		}
	}
	
	public function validate_credentials(){
		$this->load->model('model_users');
		
		if($this->model_users->can_log_in()){
			return true;
		}
		else{
			$this->load->library('form_validation');
			$this->form_validation->set_message('validate_credentails','Incorrect username/password');
			return false;
		}	
	}
	
	public function logout(){
		$this->session->sess_destroy();
		redirect('main/login');
	}
	
}

