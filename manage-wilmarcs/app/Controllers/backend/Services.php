<?php

namespace App\Controllers\Backend;
use App\Controllers\BaseController;
use App\Libraries\Slug;

class Services extends BaseController
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
        $page['pg'] = 'services';
		$builder = $this->db->table('services')->join('category', 'category.cid = services.fkcid');
        $data['services'] = $builder->get()->getResult();
		echo view('admin/header',$page);
		echo view('admin/services/list',$data);
		echo view('admin/footer');
	}
    public function add($id=0)
    {
        $page['pg'] = 'services';
		$data = array();
		$builder = $this->db->table('services');
		$data['category'] = $this->db->table('category')->getWhere(['ctype' => 1])->getResult();
        if($id>0){
			$data['services'] = $builder->getWhere(['sid' => $id])->getRow();
		}
		if ($this->request->getPost()) {
			$id=$this->request->getVar('sid');
			$rules['title'] = 'required';
			if($this->validate($rules)){
				$insdata = [
					'fkcid' => $this->request->getVar('category'),
					'stitle' => $this->request->getVar('title'),
					'sdesc' => $this->request->getVar('desc'),
					'deliverables' => $this->request->getVar('deliverables'),
					'addons' => $this->request->getVar('addons'),
				];
				$this->session->setFlashdata('msg',(($id>0)?$builder->update($insdata,['sid'=>$id]):$builder->insert($insdata))?alerttag('Success','green'):alerttag('Failure','red'));
				return redirect()->to(base_url('backend/services/add/'.@$id));
			}
			else{
				$data['validation'] = $this->validator;
				echo view('admin/header',$page);
				echo view('admin/services/add',$data);
				echo view('admin/footer');
			}
		}
		else{
			echo view('admin/header',$page);
			echo view('admin/services/add',$data);
			echo view('admin/footer');
		}
    }
	public function del($id=0)
	{
		$builder = $this->db->table('services');
		$builder->delete(['sid' => $id]);
		$this->session->setFlashdata('msg', alerttag('Success','green'));
		return redirect()->to(base_url('backend/services'));
	}
}
