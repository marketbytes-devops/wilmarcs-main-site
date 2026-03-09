<?php
  
namespace App\Controllers;
  
use App\Controllers\BaseController;
use CodeIgniter\API\ResponseTrait;
  
class Content extends BaseController
{
    use ResponseTrait;
    
    public function seo($slug='home')
    {
        $content = $this->db->table('content');
        $content = $content->getWhere(['slug' => $slug])->getRowArray();
        if (!empty($content)) {               
            $response = [
                        'status'  => true,
                        'message' => 'Success',
                        'data'    => $content,
                    ];
        }
        else {
            $response = [
                        'status'  => true,
                        'message' => 'Data not found for '.$slug.'!',
                    ];
        }
        return $this->respond($response, 200);
    }
    public function services($id=0)
    {
        $category = $this->db->table('category')->getWhere(['ctype' => 1])->getResult();
        if ($id > 0) {
            $data = $this->db->table('services')->join('category', 'category.cid = services.fkcid')->getWhere(['sid' => $id])->getRowArray();
        }
        else {
            $data = [];
            if (!empty($category)) {
                foreach ($category as $key => $value) {
                    $services = $this->db->table('services')->getWhere(['fkcid' => @$value->cid])->getResult();
                    if (!empty($services)) {
                        $data[$key]['cid']   = @$value->cid;
                        $data[$key]['cname'] = @$value->cname;
                        $data[$key]['cdesc'] = @$value->cdesc;
                        $data[$key]['ctype'] = @$value->ctype;
                        $data[$key]['cslug'] = @$value->cslug;
                        $data[$key]['cimg']  = @$value->cimg;
                        foreach ($services as $key1 => $value1) {
                            $data[$key]['services'][$key1]['sid']          = @$value1->sid;
                            $data[$key]['services'][$key1]['fkcid']        = @$value1->fkcid;
                            $data[$key]['services'][$key1]['stitle']       = @$value1->stitle;
                            $data[$key]['services'][$key1]['sdesc']        = @$value1->sdesc;
                            $data[$key]['services'][$key1]['moreinfo']     = @$value1->moreinfo;
                            $data[$key]['services'][$key1]['deliverables'] = @$value1->deliverables;
                            $data[$key]['services'][$key1]['addons']       = @$value1->addons;
                        }
                    }
                }
            }
        }
        if (!empty($data)) {               
            $response = [
                        'status'  => true,
                        'message' => 'Success',
                        'data'    => $data,
                    ];
        }
        else {
            $response = [
                        'status'  => true,
                        'message' => 'Data not found!',
                    ];
        }
        return $this->respond($response, 200);
    }
    public function portfolio($id=0)
    {
        $category = $this->db->table('category')->getWhere(['ctype' => 2])->getResult();
        if ($id > 0) {
            $data = $this->db->table('portfolio')->join('category', 'category.cid = portfolio.fkcid')->getWhere(['pid' => $id])->getRowArray();
        }
        else if ($id == -1) {
            $data = $this->db->table('portfolio')->join('category', 'category.cid = portfolio.fkcid')->getWhere(['home' => 1])->getResultArray();
        }
        else {
            $data = [];
            if (!empty($category)) {
                foreach ($category as $key => $value) {
                    $portfolio = $this->db->table('portfolio')->getWhere(['fkcid' => @$value->cid, 'home' => 0])->getResult();
                    if (!empty($portfolio)) {
                        $data[$key]['cid']   = @$value->cid;
                        $data[$key]['cname'] = @$value->cname;
                        $data[$key]['cdesc'] = @$value->cdesc;
                        $data[$key]['ctype'] = @$value->ctype;
                        $data[$key]['cslug'] = @$value->cslug;
                        $data[$key]['cimg']  = @$value->cimg;
                        foreach ($portfolio as $key1 => $value1) {
                            $data[$key]['portfolio'][$key1]['pid']    = @$value1->pid;
                            $data[$key]['portfolio'][$key1]['fkcid']  = @$value1->fkcid;
                            $data[$key]['portfolio'][$key1]['ptitle'] = @$value1->ptitle;
                            $data[$key]['portfolio'][$key1]['pimg']   = @$value1->pimg;
                            $data[$key]['portfolio'][$key1]['plink']  = @$value1->plink;
                        }
                    }
                }
            }
        }
        if (!empty($data)) {               
            $response = [
                        'status'  => true,
                        'message' => 'Success',
                        'data'    => $data,
                    ];
        }
        else {
            $response = [
                        'status'  => true,
                        'message' => 'Data not found!',
                    ];
        }
        return $this->respond($response, 200);
    }
    public function blog($id=0)
    {
        $data = $this->db->table('blog')->select('*, DATE_FORMAT(bldt, "%d %M %Y") blog_date')->join('category', 'category.cid = blog.fkcid');
        $data = ($id)?$data->getWhere(['bid' => $id])->getRowArray():$data->get()->getResultArray();
        if (!empty($data)) {               
            $response = [
                        'status'  => true,
                        'message' => 'Success',
                        'data'    => $data,
                    ];
        }
        else {
            $response = [
                        'status'  => true,
                        'message' => 'Data not found!',
                    ];
        }
        return $this->respond($response, 200);
    }
    public function category($key=1, $id=0)
    {
        $data = $this->db->table('category')->where(['ctype' => $key]);
        $data = ($id)?$data->getWhere(['cid' => $id])->getRowArray():$data->get()->getResultArray();
        if (!empty($data)) {
            $response = [
                        'status'  => true,
                        'message' => 'Success',
                        'data'    => $data,
                    ];
        }
        else {
            $response = [
                        'status'  => true,
                        'message' => 'Data not found!',
                    ];
        }
        return $this->respond($response, 200);
    }
    public function enquiry()
    {
        if ($this->request->getPost()) {
			$emailcfg    = \Config\Services::email();
            $type        = @$this->request->getPost('type') ?? '';
            $attachments = [];
            switch ($type) {
                // ---------------------------------------
                // BUSINESS FORM
                // ---------------------------------------
                case 'business':
                    $name     = @$this->request->getPost('name') ?? '';
                    $email    = @$this->request->getPost('email') ?? '';
                    $company  = @$this->request->getPost('company') ?? '';
                    $service  = @$this->request->getPost('service') ?? '';
                    $timeline = @$this->request->getPost('timeline') ?? '';
                    $budget   = @$this->request->getPost('budget') ?? '';
                    $brief    = @$this->request->getPost('brief') ?? '';
                    $subject  = "Business Enquiry from $name";

                    if (!$name || !$email || !$company || !$service || !$timeline || !$budget || !$brief) {
                        echo json_encode(['ok' => false, 'error' => 'Missing required fields']);
                        exit;
                    }

                    $message = "
                    <table style='width: 80%;border-collapse: collapse;' border='1' cellpadding='8'>
                        <tr><th>Name</th><td>$name</td></tr>
                        <tr><th>Email</th><td>$email</td></tr>
                        <tr><th>Company</th><td>$company</td></tr>
                        <tr><th>Service</th><td>$service</td></tr>
                        <tr><th>Timeline</th><td>$timeline</td></tr>
                        <tr><th>Budget</th><td>$budget</td></tr>
                        <tr><th>Message</th><td>" . nl2br($brief) . "</td></tr>
                    </table>";

                    $fileRfp = $this->request->getFile('rfp');
                    if ($fileRfp) {
						$fileRfp->move('./assets/uploads/docs', $fileRfp->getRandomName());
						$rfpName = $attachments[] = base_url('assets/uploads/docs/'.$fileRfp->getName()); 
                        $emailcfg->attach($rfpName);
                    }
                break;

                // ---------------------------------------
                // CAREER FORM
                // ---------------------------------------
                case 'career':
                    $name     = @$this->request->getPost('name') ?? '';
                    $email    = @$this->request->getPost('email') ?? '';
                    $role     = @$this->request->getPost('role') ?? '';
                    $location = @$this->request->getPost('location') ?? '';
                    $reel     = @$this->request->getPost('reel') ?? '';
                    $subject  = "Job Application from $name for $role";

                    if (!$name || !$email || !$role || !$location || !$reel) {
                        echo json_encode(['ok' => false, 'error' => 'Missing required fields']);
                        exit;
                    }

                    $message = "
                    <table style='width: 80%;border-collapse: collapse;' border='1' cellpadding='8'>
                        <tr><th>Name</th><td>$name</td></tr>
                        <tr><th>Email</th><td>$email</td></tr>
                        <tr><th>Role</th><td>$role</td></tr>
                        <tr><th>Location</th><td>$location</td></tr>
                        <tr><th>Portfolio</th><td><a href='$reel'>$reel</a></td></tr>
                    </table>";

                    $fileCv = $this->request->getFile('cv');
                    if ($fileCv) {
						$fileCv->move('./assets/uploads/docs', $fileCv->getRandomName());
						$cvName = $attachments[] = base_url('assets/uploads/docs/'.$fileCv->getName()); 
                        $emailcfg->attach($cvName);
                    }
                break;

                // ---------------------------------------
                // GENERAL ENQUIRY
                // ---------------------------------------
                case 'general':
                    $name    = @$this->request->getPost('name') ?? '';
                    $email   = @$this->request->getPost('email') ?? '';
                    $topic   = @$this->request->getPost('topic') ?? '';
                    $message = @$this->request->getPost('message') ?? '';
                    $subject  = "General Enquiry from $name";

                    if (!$name || !$email || !$topic || !$message) {
                        echo json_encode(['ok' => false, 'error' => 'Missing required fields']);
                        exit;
                    }

                    $message = "
                    <table style='width: 80%;border-collapse: collapse;' border='1' cellpadding='8'>
                        <tr><th>Name</th><td>$name</td></tr>
                        <tr><th>Email</th><td>$email</td></tr>
                        <tr><th>Topic</th><td>$topic</td></tr>
                        <tr><th>Message</th><td>" . nl2br($message) . "</td></tr>
                    </table>";
                break;

                // ---------------------------------------
                // INDUSTRY FORM
                // ---------------------------------------
                case 'industry':
                    $name     = @$this->request->getPost('name') ?? '';
                    $email    = @$this->request->getPost('email') ?? '';
                    $company  = @$this->request->getPost('company') ?? '';
                    $industry = @$this->request->getPost('industry') ?? '';
                    $summary  = @$this->request->getPost('summary') ?? '';
                    $subject  = "$industry - Enquiry from $name";

                    if (!$name || !$email || !$company || !$industry || !$summary) {
                        echo json_encode(['ok' => false, 'error' => 'Missing required fields']);
                        exit;
                    }

                    $message = "
                    <table style='width: 80%;border-collapse: collapse;' border='1' cellpadding='8'>
                        <tr><th>Name</th><td>$name</td></tr>
                        <tr><th>Email</th><td>$email</td></tr>
                        <tr><th>Company</th><td>$company</td></tr>
                        <tr><th>Industry</th><td>$industry</td></tr>
                        <tr><th>Message</th><td>" . nl2br($summary) . "</td></tr>
                    </table>";
                break;

                default:
                    echo json_encode(['ok' => false, 'error' => 'Invalid form type']);
                exit;
            }
			$emailcfg->setFrom('marketing.wilmarcs@gmail.com', 'Wilmarcs');
            $emailcfg->setReplyTo($email, $name);
			$emailcfg->setTo('opnizm@gmail.com'); // kevin@wilmarcs.com, deepak@wilmarcs.com
			$emailcfg->setmailType('html');
            $emailcfg->setSubject($subject);
			$emailcfg->setMessage($message);
            $result = $emailcfg->send();
            // if (!empty($attachments)) {
            //     foreach ($attachments as $path) {
            //         if (is_file($path)) {
            //             @unlink($path);
            //         }
            //     }
            // }
			$response = ($result)?['ok' => true]:['ok' => false, 'error' => 'Error !! Please try again later'];
		}
		else {
			throw \CodeIgniter\Exceptions\PageNotFoundException::forPageNotFound();
		}
		echo json_encode($response);
    }
}