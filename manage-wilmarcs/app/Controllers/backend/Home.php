<?php

namespace App\Controllers\Backend;
use App\Controllers\BaseController;
use CodeIgniter\Controller;
use App\Models\UserModel;

class Home extends BaseController
{
	public function initController(\CodeIgniter\HTTP\RequestInterface $request, \CodeIgniter\HTTP\ResponseInterface $response, \Psr\Log\LoggerInterface $logger)
	{
		parent::initController($request, $response, $logger);
	   	if(!$this->session->isuserLoggedIn){
			header('Location:'.base_url());
			exit;
	   	}
	}
	public function changepassword(){
        $page['pg'] = 'changepassword';
	    if ($this->request->getPost()) {
			$rules['currentpass'] = ['label' => 'current password', 'rules' =>'required'];
			$rules['newpass'] = ['label' => 'new password', 'rules' =>'required|min_length[6]|max_length[200]'];
			$rules['confirmpass'] = ['label' => 'confirm password', 'rules' =>'required_with[newpass]|matches[newpass]'];
	      	if($this->validate($rules)){
				$id = $_SESSION['userData']['uid'];
				$currpass = $this->request->getVar('currentpass');
				$builder = $this->db->table('admin');
	        	$pass = $builder->getWhere(['id' => $id])->getRow()->pass;
				if (password_verify($currpass, $pass)){
					$newdata['pass'] = password_hash($this->request->getVar('newpass'),PASSWORD_DEFAULT);
	          		$replymsg = ($builder->update($newdata,['id'=>$id]))?alerttag('Password updated successfully.','green'):alerttag('Error !!!, Please Try Again','red');
	        	}
	        	else{
	          		$replymsg = alerttag('Current password is invalid...!','red');
	        	}
				$this->session->setFlashdata('msg', $replymsg);
				return redirect()->to(base_url('backend/home/changepassword/'));
	      	}
	      	else{
				$data['validation'] = $this->validator;
				echo view('admin/header',$page);
				echo view('admin/changepassword',$data);
				echo view('admin/footer');
	      	}
	    }
	    else{
	        echo view('admin/header',$page);
			echo view('admin/changepassword');
			echo view('admin/footer');
	    }
	}
	public function logout()
    {
        $this->session->remove(['isuserLoggedIn', 'userData']);
        return redirect()->to(base_url('manage'));
    }
}
