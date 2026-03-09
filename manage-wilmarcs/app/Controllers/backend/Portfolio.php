<?php

namespace App\Controllers\Backend;
use App\Controllers\BaseController;
use CodeIgniter\Controller;

class Portfolio extends BaseController
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
        $page['pg'] = 'portfolio';
		$builder = $this->db->table('portfolio')->join('category', 'category.cid = portfolio.fkcid');
        $data['portfolio'] = $builder->get()->getResult();
		echo view('admin/header',$page);
		echo view('admin/portfolio/list',$data);
		echo view('admin/footer');
	}
    public function add($id=0)
    {
        $page['pg'] = 'portfolio';
		$data = array();
		$builder = $this->db->table('portfolio');
		$data['services'] = $this->db->table('services')->get()->getResult();
		$data['category'] = $this->db->table('category')->getWhere(['ctype' => 2])->getResult();
        if($id>0){
			$data['portfolio'] = $builder->getWhere(['pid' => $id])->getRow();
		}
		if ($this->request->getPost()) {
			$id=$this->request->getVar('pid');
			$rules['category'] = 'required';
			if($this->validate($rules)){
				$insdata = [
							'fkcid' => $this->request->getVar('category'),
							'ptitle' => $this->request->getVar('title'),
							'plink' => $this->request->getVar('plink'),
							'phtitle' => $this->request->getVar('htitle'),
							'phsubtitle' => $this->request->getVar('hsubtitle'),
							'home' => $this->request->getVar('home'),
							'pimg' => 0
						];
				$oldimg = @$data['portfolio']->pimg;
				if($id>0 && $this->request->getFile('pimg')==''){
					$insdata['pimg'] = $oldimg; 
				}
				else{
					$pimg = $this->validate([
						'pimg' => [
							'uploaded[pimg]',
							'mime_in[pimg,image/jpg,image/jpeg,image/png,image/webp,video/mp4]'
						]
					]);
					if ($pimg) {
						if($oldimg!='' && file_exists('./assets/uploads/'.$oldimg)) unlink('./assets/uploads/'.$oldimg);
						$pimgfile = $this->request->getFile('pimg');
						$pimgName = $pimgfile->getRandomName();
						$pimgfile->move('./assets/uploads',$pimgName);
						$insdata['pimg'] = $pimgfile->getName(); 
					}
				}
				$this->session->setFlashdata('msg',(($id>0)?$builder->update($insdata,['pid'=>$id]):$builder->insert($insdata))?alerttag('Success','green'):alerttag('Failure','red'));
				return redirect()->to(base_url('backend/portfolio/add/'.@$id));
			}
			else{
				$data['validation'] = $this->validator;
				echo view('admin/header',$page);
				echo view('admin/portfolio/add',$data);
				echo view('admin/footer');
			}
		}
		else{
			echo view('admin/header',$page);
			echo view('admin/portfolio/add',$data);
			echo view('admin/footer');
		}
    }
	public function del($id=0)
	{
		$builder = $this->db->table('portfolio');
		$builder->delete(['pid' => $id]);
		$this->session->setFlashdata('msg', alerttag('Success','green'));
		return redirect()->to(base_url('backend/portfolio'));
	}
}
