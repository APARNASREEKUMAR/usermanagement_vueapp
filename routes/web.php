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
    return view('admin.users');
});
Route::get('/{name}',function(){
    return redirect('/');
})->where('name','[A-Za-z]+');
Route::get('/{name}/{name2}',function(){
    return redirect('/');
})->where('name','[A-Za-z]+')->where('name2','[A-Za-z]+');