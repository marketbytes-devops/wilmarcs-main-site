<?php

namespace App\Controllers\Backend;
use App\Controllers\BaseController;
use App\Libraries\Slug;

class Category extends BaseController
{
	protected $index;
	public function initController(\CodeIgniter\HTTP\RequestInterface $request, \CodeIgniter\HTTP\ResponseInterface $response, \Psr\Log\LoggerInterface $logger)
	{
		parent::initController($request, $response, $logger);
	   	if(!$this->session->isuserLoggedIn){
			header('Location:'.base_url());
			exit;
	   	}
		$this->index = ['services' => 1, 'portfolio' => 2, 'blog' => 3];
	}
	public function index($slug='')
	{
        $page['pg'] = $slug;
		$builder = $this->db->table('category');
        $data['category'] = $builder->getWhere(['ctype' => $this->index[$slug]])->getResult();
		echo view('admin/header',$page);
		echo view('admin/category/list',$data);
		echo view('admin/footer');
	}
    public function add($slug='', $id=0)
    {
        $page['pg'] = $slug;
		$data = array();
		$builder = $this->db->table('category');
        if($id>0){
			$data['category'] = $builder->getWhere(['cid' => $id])->getRow();
		}
		if ($this->request->getPost()) {
			$id=$this->request->getVar('cid');
			$rules['name'] = 'required';
			if($this->validate($rules)){
				$insdata = ['cname' => $this->request->getVar('name'), 'cdesc' => $this->request->getVar('desc'), 'ctype' => $this->index[$slug]];
				if ($id=='' || $insdata['cname']!=$this->request->getVar('oldname')) {
					$cslug = new Slug([
						'table' => 'category',
						'id' => $id,
						'field' => 'cslug',
						'title' => 'name',
						'replacement' => 'dash'
					]);
					$insdata['cslug'] = $cslug->create_uri($insdata['cname']);
				}
				$oldimg = @$data['category']->cimg;
				if($id>0 && $this->request->getFile('cimg')==''){
					$insdata['cimg'] = $oldimg; 
				}
				else{
					$cimg = $this->validate([
						'cimg' => [
							'uploaded[cimg]',
							'mime_in[cimg,image/jpg,image/jpeg,image/png,image/webp]'
						]
					]);
					if ($cimg) {
						if($oldimg!='' && file_exists('./assets/uploads/'.$oldimg)) unlink('./assets/uploads/'.$oldimg);
						$cimgfile = $this->request->getFile('cimg');
						$cimgName = $cimgfile->getRandomName();
						$cimgfile->move('./assets/uploads',$cimgName);
						$insdata['cimg'] = $cimgfile->getName(); 
					}
				}
				$this->session->setFlashdata('msg',(($id>0)?$builder->update($insdata,['cid'=>$id]):$builder->insert($insdata))?alerttag('Success','green'):alerttag('Failure','red'));
				return redirect()->to(base_url('backend/'.$slug.'/category'));
			}
			else{
				$data['validation'] = $this->validator;
				echo view('admin/header',$page);
				echo view('admin/category/add',$data);
				echo view('admin/footer');
			}
		}
		else{
			echo view('admin/header',$page);
			echo view('admin/category/add',$data);
			echo view('admin/footer');
		}
    }
	public function del($slug='', $id=0)
	{
		$builder = $this->db->table('category');
		$builder->delete(['cid' => $id, 'ctype' => $this->index[$slug]]);
		$this->session->setFlashdata('msg', alerttag('Success','green'));
		return redirect()->to(base_url('backend/'.$slug.'/category'));
	}
}
