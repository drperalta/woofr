<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


// AUTHENTICATION ROUTES
Route::group([ 'prefix' => 'auth' ], function ()
{
    Route::post('signup', 'AuthController@signup');
    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');

    Route::get('link/{activation_token}', 'AuthController@link');
    Route::get('verify_email/{activation_token}', 'AuthController@verify_email');
    Route::get('verify_email/validate/{activation_token}', 'AuthController@validate_token');

});

// USER ROUTES
Route::group([ 'prefix' => 'user' ], function()
{   
    Route::get('data', 'AuthController@data');

    Route::group([ 'prefix' => 'edit' ], function()
    {
        Route::post('password', 'AuthController@password');
        Route::post('description', 'AuthController@description');
        Route::post('primary', 'AuthController@primary');
    }); 
});


// PASSWORD RESET ROUTES
Route::group([ 'middleware' => 'api', 'prefix' => 'password'], function ()
{
    Route::post('create', 'ResetPasswordController@create');
    Route::get('find/{token}', 'ResetPasswordController@find');
    Route::post('reset', 'ResetPasswordController@reset');
    Route::get('setEmail/{token}' , 'ResetPasswordController@setEmail');
    Route::get('validate/{token}', 'ResetPasswordController@validate_token');
});
