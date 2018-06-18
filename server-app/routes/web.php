<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('auth/login');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/admin-panel', function(){
    return view('admin-panel');
});

Route::post('/update', 'HomeController@updateOrder')->name('update');
Route::post('loger', 'AdminActions@index');
// Route::post('logout', 'Auth\LoginController@logout');
// Route::post('register', 'Auth\RegisterController@register');