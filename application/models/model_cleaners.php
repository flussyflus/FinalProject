<?php

class Model_cleaners extends CI_Model{

	public function getDirtyBeds(){
		$this->db->where('availability','dirty');
		$query=$this->db->get('beds');
		if($query->num_rows()>0){
			return json_encode($query->result());
		}else{
			return false;
		}	
	}




}