<?php

class Model_profiles extends CI_Model{
	
	public function getProfile($t){
		$this->db->where('email',$t);
		$query = $this->db->get('users');
		if($query->num_rows()==1){
			return json_encode($query->result());
		}else{
			return false;
		}	
	}

}