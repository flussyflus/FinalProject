<?php

class Model_users extends CI_Model{

	public function can_log_in(){
        
        $this->db->where('email',$this->input->post('email'));
        $this->db->where('password',md5($this->input->post('password')));
        
        $query = $this->db->get('users');
        
        if($query->num_rows() == 1){
            return true;         
        } else {
            return false;
        }
    }
	
	 public function getType($email){

        $this->db->where('email',$email);
        
        $query = $this->db->get('users');
        if($query->num_rows() == 1){
             $row = $query->row(); 
            return $row->type;         
        } else {
            return false;
        }
        //return $query;
    }
	
	public function setLog($email,$t,$date,$action){
		$d = convertToDate($date);
		$s = convertToTime($date);
		$data = array(
			'email'=>$email,
			'type'=>$t,
			'date'=>$d,
			'time'=>$s,
			'action'=>$action
		);
		$this->db->insert('logs',$data);
	}
	
	public function getProfileInfo($u){
		$this->db->where('email',$u);
		$query = $this->db->get('users');
		if($query->num_rows() == 1){
             $row = $query->row();
			return json_encode($row);
        } else {
            return false;
        }
        //return $query;
    }
}


function convertToDate($d){
		$formattedDate = '';
		if($d['mday']<10){
			$formattedDate.="0";
		}
		$formattedDate.=$d['mday']."-";
		if($d['mon']<10){
			$formattedDate.="0";
		}
		$formattedDate.=$d['mon']."-";
		$formattedDate.=$d['year'];
		return $formattedDate;
	}

function convertToTime($d){
		$formattedDate = '';
		if($d['hours']<10){
			$formattedDate.="0";
		}
		$formattedDate.=$d['hours'].":";
		if($d['minutes']<10){
			$formattedDate.="0";
		}
		$formattedDate.=$d['minutes'].":";
		if($d['seconds']<10){
			$formattedDate.="0";
		}
		$formattedDate.=$d['seconds'];
		return $formattedDate;
	}