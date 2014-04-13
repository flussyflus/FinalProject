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
	
	public function getUniqueRooms(){
		$this->db->distinct();
		$this->db->select('roomID');
		$query = $this->db->get('beds');
		if($query->num_rows() >0){
			return json_encode($query->result());
		}
		else{
			return false;
		}
	}
	
	public function getUniqueWards(){
		$this->db->distinct();
		$this->db->select('wardID');
		$query = $this->db->get('beds');
		if($query->num_rows() >0){
			return json_encode($query->result());
		}
		else{
			return false;
		}
	}
	
	public function getUniqueAvailabilities(){
		$this->db->distinct();
		$this->db->select('availability');
		$query = $this->db->get('beds');
		if($query->num_rows() >0){
			return json_encode($query->result());
		}
		else{
			return false;
		}
	}
	
	public function getUniqueBeds(){
		$this->db->distinct();
		$this->db->select('bedID');
		$query = $this->db->get('beds');
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
	
	public function getBedsTable($u,$v,$w,$x){
		if($u!="all"){
			$this->db->where('bedID',$u);
		}
		if($v!="all"){
			$this->db->where('roomID',$v);
		}
		if($w!="all"){
			$this->db->where('wardID',$w);
		}
		if($x!="all"){
			$this->db->where('availability',$x);
		}
		$query = $this->db->get('beds');
		if($query->num_rows() >0){
			return json_encode($query->result());
		}
		else{
			return false;
		}
	}
	
	public function deleteUser($d){
		$this->db->where('id',$d);
		$this->db->delete('users');
		if($this->db->affected_rows() >= 0){
                return "<p>Deleted Sucessfully</p>";
            } else {
                return "<p>Error Deleting</p>";
            }
	}
	
	public function deleteBed($d){
		$this->db->where('bedID',$d);
		$this->db->delete('beds');
		if($this->db->affected_rows() >= 0){
                return "<p>Deleted Sucessfully</p>";
            } else {
                return "<p>Error Deleting</p>";
            }
	}
	
	public function addUserRecord($d,$e,$f,$g,$h,$i,$j,$k,$l){
		$data = array(
			'email'=> $d ,
			'password'=> $e ,
			'type'=> $f ,
			'firstname'=> $g ,
			'lastname'=> $h ,
			'address'=> $i ,
			'date_employed'=> $j ,
			'dob'=> $k ,
			'gender'=> $l
			);
		$this->db->insert('users',$data);			
		if($this->db->affected_rows() == 1){
                return "<p>added Sucessfully</p>";
            } else {
                return "<p>Error Adding</p>";
            }
	}
}