<?php

namespace Config;

// Create a new instance of our RouteCollection class.
$routes = Services::routes();

// Load the system's routing file first, so that the app and ENVIRONMENT
// can override as needed.
if (file_exists(SYSTEMPATH . 'Config/Routes.php'))
{
	require SYSTEMPATH . 'Config/Routes.php';
}

/**
 * --------------------------------------------------------------------
 * Router Setup
 * --------------------------------------------------------------------
 */
$routes->setDefaultNamespace('App\Controllers');
$routes->setDefaultController('Manage');
$routes->setDefaultMethod('index');
$routes->setTranslateURIDashes(false);
$routes->set404Override();
$routes->setAutoRoute(true);
$routes->group('backend',['namespace' => 'App\Controllers\backend'],function ($routes) {
    $routes->get('home','Home::index');
    $routes->get('home/logout','Home::logout');
    $routes->get('home/changepassword','Home::changepassword');
    $routes->post('home/changepassword','Home::changepassword');
    
    $routes->get('content','Content::index');
    $routes->get('content/add/(:any)','Content::add/$1');
    $routes->get('content/add','Content::add');
    $routes->post('content/add','Content::add');
    $routes->post('content/add/(:any)','Content::add/$1');
    $routes->get('content/del/(:any)','Content::del/$1');
	
	$routes->get('services','Services::index');
    $routes->get('services/add/(:any)','Services::add/$1');
    $routes->get('services/add','Services::add');
    $routes->post('services/add','Services::add');
    $routes->post('services/add/(:any)','Services::add/$1');
    $routes->get('services/del/(:any)','Services::del/$1');
	
	$routes->get('portfolio','Portfolio::index');
    $routes->get('portfolio/add/(:any)','Portfolio::add/$1');
    $routes->get('portfolio/add','Portfolio::add');
    $routes->post('portfolio/add','Portfolio::add');
    $routes->post('portfolio/add/(:any)','Portfolio::add/$1');
    $routes->get('portfolio/del/(:any)','Portfolio::del/$1');

	$routes->get('blog','Blog::index');
    $routes->get('blog/add/(:any)','Blog::add/$1');
    $routes->get('blog/add','Blog::add');
    $routes->post('blog/add','Blog::add');
    $routes->post('blog/add/(:any)','Blog::add/$1');
    $routes->get('blog/del/(:any)','Blog::del/$1');

	$routes->get('(:any)/category','Category::index/$1');
    $routes->get('(:any)/category/add/(:any)','Category::add/$1/$2');
    $routes->get('(:any)/category/add','Category::add/$1');
    $routes->post('(:any)/category/add','Category::add/$1');
    $routes->post('(:any)/category/add/(:any)','Category::add/$1/$2');
    $routes->get('(:any)/category/del/(:any)','Category::del/$1/$2');
});

/*
 * --------------------------------------------------------------------
 * Route Definitions
 * --------------------------------------------------------------------
 */

// We get a performance increase by specifying the default
// route since we don't have to scan directories.
$routes->get('/', 'Manage::index');
$routes->post('/enquiry', 'Content::enquiry');
$routes->get("/seo/(:any)", "Content::seo/$1");
$routes->get("/services/(:any)", "Content::services/$1");
$routes->get("/portfolio/(:any)", "Content::portfolio/$1");
$routes->get("/blog/(:any)", "Content::blog/$1");
$routes->get("/category/(:any)/(:any)", "Content::category/$1/$2");







/*
 * --------------------------------------------------------------------
 * Additional Routing
 * --------------------------------------------------------------------
 *
 * There will often be times that you need additional routing and you
 * need it to be able to override any defaults in this file. Environment
 * based routes is one such time. require() additional route files here
 * to make that happen.
 *
 * You will have access to the $routes object within that file without
 * needing to reload it.
 */
if (file_exists(APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php'))
{
	require APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php';
}
