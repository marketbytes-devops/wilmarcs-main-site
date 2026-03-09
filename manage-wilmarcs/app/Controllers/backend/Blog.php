<?php

namespace App\Controllers\Backend;
use App\Controllers\BaseController;
use App\Libraries\Slug;

class Blog extends BaseController
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
        $page['pg'] = 'blog';
		$builder = $this->db->table('blog')->join('category', 'category.cid = blog.fkcid');
        $data['blog'] = $builder->get()->getResult();
		echo view('admin/header',$page);
		echo view('admin/blog/list',$data);
		echo view('admin/footer');
	}
    public function add($id=0)
    {
        $page['pg'] = 'blog';
		$data = array();
		$builder = $this->db->table('blog');
		$data['category'] = $this->db->table('category')->getWhere(['ctype' => 3])->getResult();
		$data['tags'] = getTags('blog', 'btags', 'bid');
        if($id>0){
			$data['blog'] = $builder->getWhere(['bid' => $id])->getRow();
		}
		if ($this->request->getPost()) {
			$id=$this->request->getVar('bid');
			$rules['title'] = 'required';
			if($this->validate($rules)){
				$insdata = [
					'bltitle' => $this->request->getVar('title'),
					'bldesc' => $this->request->getVar('bldesc'),
					'fkcid' => $this->request->getVar('category'),
					'bldt' => date('Y-m-d',strtotime($this->request->getVar('bldt'))),
					'bexcerpt' => $this->request->getVar('excerpt'),
					'btags' => implode(',', $this->request->getVar('btags')),
					'seotitle' => $this->request->getVar('seotitle'),
					'seodesc' => $this->request->getVar('seodesc'),
					'seokeywords' => $this->request->getVar('seokeywords'),
				];
				if ($id=='' || $insdata['bltitle']!=$this->request->getVar('oldbltitle')) {
					$slug = new Slug([
						'table' => 'blog',
						'id' => $id,
						'field' => 'blslug',
						'title' => 'bltitle',
						'replacement' => 'dash'
					]);
					$insdata['blslug'] = $slug->create_uri($insdata['bltitle']);
				}
				$oldimg = @$data['blog']->blimg;
				if($id>0 && $this->request->getFile('blimg')==''){
					$insdata['blimg'] = $oldimg; 
				}
				else{
					$blimg = $this->validate([
						'blimg' => [
							'uploaded[blimg]',
							'mime_in[blimg,image/jpg,image/jpeg,image/png,image/webp]'
						]
					]);
					if ($blimg) {
						if($oldimg!='' && file_exists('./assets/uploads/'.$oldimg)) unlink('./assets/uploads/'.$oldimg);
						$blimgfile = $this->request->getFile('blimg');
						$blimgName = $blimgfile->getRandomName();
						$blimgfile->move('./assets/uploads',$blimgName);
						$insdata['blimg'] = $blimgfile->getName(); 
					}
				}
				$this->session->setFlashdata('msg',(($id>0)?$builder->update($insdata,['bid'=>$id]):$builder->insert($insdata))?alerttag('Success','green'):alerttag('Failure','red'));
				return redirect()->to(base_url('backend/blog/add/'.@$id));
			}
			else{
				$data['validation'] = $this->validator;
				echo view('admin/header',$page);
				echo view('admin/blog/add',$data);
				echo view('admin/footer');
			}
		}
		else{
			echo view('admin/header',$page);
			echo view('admin/blog/add',$data);
			echo view('admin/footer');
		}
    }
	public function del($id=0)
	{
		$builder = $this->db->table('blog');
		$builder->delete(['bid' => $id]);
		$this->session->setFlashdata('msg', alerttag('Success','green'));
		return redirect()->to(base_url('/backend/blog'));
	}
}
