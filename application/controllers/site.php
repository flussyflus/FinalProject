<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Site extends CI_Controller {

	public function index()
	{
		echo "hi internet ";
		$this->addStuff();
	}
	
	public function hello(){
		echo "something else";
	}
	
	public function addStuff(){
		$this->load->model("math");
		echo $this->math->add();
	}
}