<?php
  
namespace App\Controllers;
  
use App\Controllers\BaseController;
use CodeIgniter\API\ResponseTrait;

class Home extends BaseController
{
    use ResponseTrait;

    public function getdata()
    {
        $id    = @$this->request->getVar('id');
        $table = @$this->request->getVar('table');
        $data  = $this->db->table($table);
        if ($id>0) {
            $data = $data->getWhere(['id' => $id])->getRowArray();
        }
        else {
            $data = $data->get()->getResultArray();
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
}