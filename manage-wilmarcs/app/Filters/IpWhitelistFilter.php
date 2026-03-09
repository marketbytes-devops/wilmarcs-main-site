<?php namespace App\Filters;

use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\Filters\FilterInterface;

class IpWhitelistFilter implements FilterInterface
{
    protected $allowed_ips = [];

    public function before(RequestInterface $request, $arguments = null)
    {
        $ip = $request->getIPAddress();
        if (!in_array($ip, $this->allowed_ips)) {
            return service('response')->setStatusCode(403)->setBody($ip);
        }
    }

    public function after(RequestInterface $request, ResponseInterface $response, $arguments = null)
    {
        return $response;
    }
}
