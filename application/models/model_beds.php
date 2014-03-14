<?php

class Model_beds extends CI_Model{

	public function getDirtyBeds(){
		$this->db->where('availability','dirty');
		$query=$this->db->get('beds');
		if($query->num_rows()>0){
			return json_encode($query->result());
		}else{
			return false;
		}	
	}
	
	public function getOccupiedBeds(){
		$this->db->where('availability','occupied');
		$query=$this->db->get('beds');
		if($query->num_rows()>0){
			return json_encode($query->result());
		}else{
			return false;
		}	
	}
	
	public function getVacantBeds(){
		$this->db->where('availability','vacant');
		$query=$this->db->get('beds');
		if($query->num_rows()>0){
			return json_encode($query->result());
		}else{
			return false;
		}	
	}

	public function getMedWards(){
		$this->db->where('type','medical');
		$query=$this->db->get('wards');
		if($query->num_rows()>0){
			return json_encode($query->result());
		}else{
			return false;
		}
	}
	
	public function getSurgWards(){
		$this->db->where('type','surgical');
		$query=$this->db->get('wards');
		if($query->num_rows()>0){
			return json_encode($query->result());
		}else{
			return false;
		}
	}
	
	public function getWardDirtyBeds($u){
		$this->db->where('wardID',$u);
		$this->db->where('availability','dirty');
		$query = $this->db->get('beds');
				if($query->num_rows()>0){
			return json_encode($query->result());
		}else{
			return false;
		}
	}
	
	public function getWardOccupiedBeds($u){
		$this->db->where('wardID',$u);
		$this->db->where('availability','occupied');
		$query = $this->db->get('beds');
				if($query->num_rows()>0){
			return json_encode($query->result());
		}else{
			return false;
		}
	}
	
	public function getWardVacantBeds($u){
		$this->db->where('wardID',$u);
		$this->db->where('availability','vacant');
		$query = $this->db->get('beds');
				if($query->num_rows()>0){
			return json_encode($query->result());
		}else{
			return false;
		}
	}


}