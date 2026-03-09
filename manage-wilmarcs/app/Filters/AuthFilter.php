<?php

namespace App\Filters;

use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\Filters\FilterInterface;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class AuthFilter implements FilterInterface
{
    public function before(RequestInterface $request, $arguments = null)
    {
        $authHeader = $request->getHeaderLine('Authorization');
        if (!$authHeader || !preg_match('/Bearer\s(\S+)/', $authHeader, $matches)) {
            return service('response')->setStatusCode(401)->setJSON(['error' => 'Access token required']);
        }

        $token = $matches[1];
        $key = getenv('JWT_SECRET');

        try {
            $decoded = JWT::decode($token, new Key($key, 'HS256'));
        } catch (\Exception $e) {
            return service('response')->setStatusCode(403)->setJSON(['error' => 'Invalid or expired token']);
        }

        // Inject user data into request for use in controllers
        $clientSecret = $request->getHeaderLine('Client-Secret');
        if ($clientSecret) {
            try {
                $decodeduser = JWT::decode($clientSecret, new Key($key, 'HS256'));
            } catch (\Exception $e) {
                return service('response')->setStatusCode(403)->setJSON(['error' => 'Invalid or expired token']);
            }
        }

        return null; // Proceed with request
    }

    public function after(RequestInterface $request, ResponseInterface $response, $arguments = null)
    {
        // No action after
    }
}
