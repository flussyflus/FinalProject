<?php

class Model_discharge extends CI_Model{

	public function getUniqueAdmittances(){
		$this->db->distinct();
		$this->db->select('admitID');
		$query = $this->db->get('discharges');
		if($query->num_rows() >0){
			return json_encode($query->result());
		}
		else{
			return false;
		}
	}
	
	public function getUniqueDischargeDates(){
		$this->db->distinct();
		$this->db->select('dischargeDate');
		$query = $this->db->get('discharges');
		if($query->num_rows() >0){
			return json_encode($query->result());
		}
		else{
			return false;
		}
	}
	
	public function getDischargeTable($a,$b,$c){
		if($a!="all"){
			$this->db->where('admitID',$a);
		}
		if($b!="all"){
			$this->db->where('dischargeDate',$b);
		}
		if($c!="all"){
			$this->db->where('reason',$c);
		}
		$query = $this->db->get('discharges');
		if($query->num_rows() >0){
			return json_encode($query->result());
		}
		else{
			return false;
		}
	}
	
		public function getUniqueBeds(){
		$this->db->distinct();
		$this->db->where('availability','occupied');
		$this->db->select('bedID');
		$query = $this->db->get('beds');
		if($query->num_rows() >0){
			return json_encode($query->result());
		}
		else{
			return false;
		}
	}
	
	public function getUniquePatients(){
		$this->db->distinct();
		$this->db->select('patientID');
		$query = $this->db->get('beds');
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
	
	public function getDischargeBedsTable($a,$b,$c,$d){
		if($a!="all"){
			$this->db->where('bedID',$a);
		}
		if($b!="all"){
			$this->db->where('patientID',$b);
		}
		if($c!="all"){
			$this->db->where('roomID',$c);
		}
		if($d!="all"){
			$this->db->where('wardID',$d);
		}
		$this->db->where('availability','occupied');
		$query = $this->db->get('beds');
		if($query->num_rows() >0){
			return json_encode($query->result());
		}
		else{
			return false;
		}
	}
	
	public function dischargeFromBed($a){
		$data= array(
			'availability'=>'dirty',
			'patientID'=>NULL
			);
		$this->db->where('bedID',$a);
		$this->db->update('beds',$data);		
		if($this->db->affected_rows() ==1){
			return true;
		}
		else{
			return false;
		}
	}

}