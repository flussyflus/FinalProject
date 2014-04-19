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
	
	public function editUserRecord($a,$d,$f,$g,$h,$i,$j,$k,$l){
		$data = array(
			'email'=> $d ,
			'type'=> $f ,
			'firstname'=> $g ,
			'lastname'=> $h ,
			'address'=> $i ,
			'date_employed'=> $j ,
			'dob'=> $k ,
			'gender'=> $l
			);
		$this->db->where('id',$a);
		$this->db->update('users',$data);
		if($this->db->affected_rows() == 1){
                return "<p>added Sucessfully</p>";
            } else {
                return "<p>Error Editting</p>";
            }
	}
	

}