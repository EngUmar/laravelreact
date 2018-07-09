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




/**
 * If no routes matched from the above list, then this generic formula will handle all request. The whole react app (Front-End Routes) fall into this box.
 */

Route::get( '/{path?}', function(){
    return view( 'index' );
})->where('path', '.*');

