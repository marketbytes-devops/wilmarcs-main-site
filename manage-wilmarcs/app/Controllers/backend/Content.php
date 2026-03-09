<?php

namespace App\Controllers\Backend;
use App\Controllers\BaseController;
use CodeIgniter\Controller;
use App\Models\CategoryModel;

class Content extends BaseController
{
	public function initController(\CodeIgniter\HTTP\RequestInterface $request, \CodeIgniter\HTTP\ResponseInterface $response, \Psr\Log\LoggerInterface $logger)
	{
		parent::initController($request, $response, $logger);
	   	if(!$this->session->isuserLoggedIn){
			header('Location:'.base_url());
			exit;
	   	}
	}
	public function index()
	{
        $page['pg'] = 'content';
		$builder = $this->db->table('content')->orderBy('cid');
        $data['content'] = $builder->get()->getResult();
		echo view('admin/header',$page);
		echo view('admin/content/list',$data);
		echo view('admin/footer');
	}
    public function add($id=0)
    {
        $page['pg'] = 'content';
		$data = array();
		$builder = $this->db->table('content');
        if($id>0){
			$data['content'] = $builder->getWhere(['cid' => $id])->getRow();
		}
		if ($this->request->getPost()) {
			$id=$this->request->getVar('cid');
			$insdata = [
				'page' => $this->request->getVar('page'),
				'seotitle' => $this->request->getVar('seotitle'),
				'seodesc' => $this->request->getVar('seodesc'),
				'seokeywords' => $this->request->getVar('seokeywords')
			];
			$this->session->setFlashdata('msg',($builder->update($insdata,['cid'=>$id]))?alerttag('Success','green'):alerttag('Failure','red'));
			// $this->session->setFlashdata('msg',(($id>0)?$builder->update($insdata,['cid'=>$id]):$builder->insert($insdata))?alerttag('Success','green'):alerttag('Failure','red'));
			return redirect()->to(base_url('backend/content/add/'.@$id));
		}
		else{
			echo view('admin/header',$page);
			echo view('admin/content/add',$data);
			echo view('admin/footer');
		}
    }
	// public function del($id=0)
	// {
	// 	$builder = $this->db->table('content');
	// 	$builder->delete(['cid' => $id]);
	// 	$this->session->setFlashdata('msg', alerttag('Success','green'));
	// 	return redirect()->to(base_url('backend/content'));
	// }
}
