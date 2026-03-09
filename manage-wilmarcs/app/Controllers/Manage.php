<?php

namespace App\Controllers;

use CodeIgniter\Controller;

class Manage extends BaseController
{
    public function initController(\CodeIgniter\HTTP\RequestInterface $request, \CodeIgniter\HTTP\ResponseInterface $response, \Psr\Log\LoggerInterface $logger)
	{
		parent::initController($request, $response, $logger);
        if($this->session->isuserLoggedIn){
			header('Location:'.base_url('backend/content'));
			exit;
	   	}
	}
	public function index()
	{
        if ($this->request->getPost()) {
            $uname = $this->request->getVar('uname');
            $password = $this->request->getVar('pass');
            $builder = $this->db->table('admin');
            $data = $builder->getWhere(['uname' => $uname])->getRow();
            if($data){
                $pass = $data->pass;
                $verify_pass = password_verify($password, $pass);
                if($verify_pass){
                    $ses_data = [
                        'uid'       => $data->id,
                        'uname'     => $data->uname,
                        'logged_in' => TRUE
                    ];
                    $this->session->set('isuserLoggedIn', true);
                    $this->session->set('userData', $ses_data);
                    return redirect()->to(base_url('backend/content'));
                }
                else{
                    $this->session->setFlashdata('msg', alerttag('Invalid username or password!!</strong>','red'));
                    return redirect()->to(base_url('manage'));
                }
            }
            else{
                $this->session->setFlashdata('msg', alerttag('Invalid username or password!!</strong>','red'));
                return redirect()->to(base_url('manage'));
            }
        }
        else{
            return view('admin/login');
        }
    }
}
