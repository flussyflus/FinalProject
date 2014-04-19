<?php

class Model_admittance extends CI_Model{
	
	public function getUniquePatients(){
		$this->db->distinct();
		$this->db->select('patientID');
		$query = $this->db->get('admittances');
		if($query->num_rows() >0){
			return json_encode($query->result());
		}
		else{
			return false;
		}
	}
	
	public function getUniqueDischargePatients(){
		$this->db->distinct();
		$this->db->select('patientID');
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
		$this->db->select('bedID');
		$query = $this->db->get('admittances');
		if($query->num_rows() >0){
			return json_encode($query->result());
		}
		else{
			return false;
		}
	}
	
	public function getUniqueAdmitDates(){
		$this->db->distinct();
		$this->db->select('admit_date');
		$query = $this->db->get('admittances');
		if($query->num_rows() >0){
			return json_encode($query->result());
		}
		else{
			return false;
		}
	}
	
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
	
	public function getAdmitTable($a,$b,$c){
		if($a!="all"){
			$this->db->where('patientID',$a);
		}
		if($b!="all"){
			$this->db->where('bedID',$b);
		}
		if($c!="all"){
			$this->db->where('admit_date',$c);
		}
		$query = $this->db->get('admittances');
		if($query->num_rows() >0){
			return json_encode($query->result());
		}
		else{
			return false;
		}
	}
	
	public function getWardsbyType($d){
		if($d == "medical"){
			$this->db->where('type',$d);
		}
		else if($d=="surgical"){
			$this->db->where('type',$d);
		}
		$query = $this->db->get('wards');
		if($query->num_rows() >0){
			return json_encode($query->result());
		}
		else{
			return false;
		}
	}
	
	public function getVacantBeds($s){
		$this->db->distinct();
		$this->db->where('availability','vacant');
		$this->db->where('wardID',$s);
		$query = $this->db->get('beds');
		if($query->num_rows() >0){
			return json_encode($query->result());
		}
		else{
			return false;
		}
	}
	
	public function addPatient($a,$b,$c){
		$data = array(
			'patientID'=>$a,
			'firstname'=>$b,
			'lastname'=>$c
			);
		$this->db->insert('patients', $data); 
		if($this->db->affected_rows() == 1){
            return "<p>Inserted Sucessfully</p>";
        } else {
            return "<p>Error Inserting</p>";
        }	
	}
	
	public function admitPatient($id,$a,$b,$c){
		
		$data = array(
			'patientID'=>$a,
			'availability'=>'occupied'
			);
		$this->db->where('bedID',$id);	
		$this->db->update('beds',$data);
		if($this->db->affected_rows() == 1){
            return "<p>Updated Sucessfully</p>";
        } else {
            return "<p>Error Inserting</p>";
        }	
	}
}