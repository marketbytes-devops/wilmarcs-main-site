<?php
  
namespace App\Controllers;
  
use App\Controllers\BaseController;
use CodeIgniter\API\ResponseTrait;
  
class Token extends BaseController
{
    use ResponseTrait;
    
    public function generate()
    {
        if ($this->request->getPost()) {
            $rules['email'] = ['label' => 'email', 'rules' =>'required|valid_email'];
            $rules['password'] = ['label' => 'password', 'rules' =>'required'];
			if($this->validate($rules)){
                $email = $this->request->getVar('email');
                $pass  = $this->request->getVar('password');
                if ($email=='api@wilmarcs.ae' && $pass=='W!Lmb4h6£j0CJ/wY@6C$') {
                    $token = getJWTtoken($email);
                    $response = [
                        'status'  => true,
                        'message' => 'Token Generated Successfully',
                        'token'   => $token,
                    ];       
                    return $this->respond($response, 200);
                }
                else {
                    return $this->respond(['status' => false,'message' => 'Invalid Credentials!'], 400);
                }
            }
            else{
                return $this->respond(['status' => false,'message' => $this->validator->getErrors()], 400);
			}
        }
        else {
            return $this->respond(['status' => false,'message' => 'Method Not Allowed'], 405);
        }
    }
}