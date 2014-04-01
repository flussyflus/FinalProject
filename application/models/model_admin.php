<?php

class Model_admin extends CI_Model{

	public function getUniqueDates(){
		$this->db->distinct();
		$this->db->select('date');
		$query = $this->db->get('logs');
		if($query->num_rows() >0){
			return json_encode($query->result());
		}
		else{
			return false;
		}
	}
	
	public function getUniqueUsers(){
		$this->db->distinct();
		$this->db->select('email');
		$query = $this->db->get('users');
		if($query->num_rows() >0){
			return json_encode($query->result());
		}
		else{
			return false;
		}
	}
	
	public function getUniqueTypes(){
		$this->db->distinct();
		$this->db->select('type');
		$query = $this->db->get('users');
		if($query->num_rows() >0){
			return json_encode($query->result());
		}
		else{
			return false;
		}
	}

	public function getLogsTable($u,$d){
		if($u!="all"){
			$this->db->where('email',$u);
		}
		if($d!="all"){
			$this->db->where('date',$d);
		}
		$query = $this->db->get('logs');
		if($query->num_rows() >0){
			return json_encode($query->result());
		}
		else{
			return false;
		}
	}
	
	public function getUsersTable($u,$d){
		if($u!="all"){
			$this->db->where('email',$u);
		}
		if($d!="all"){
			$this->db->where('type',$d);
		}
		$query = $this->db->get('users');
		if($query->num_rows() >0){
			return json_encode($query->result());
		}
		else{
			return false;
		}
	}
}