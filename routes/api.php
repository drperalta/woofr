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

    Route::get('link/{activation_token}', 'AuthController@link');
    Route::get('verify_email/{activation_token}', 'AuthController@verify_email');
    Route::get('verify_email/validate/{activation_token}', 'AuthController@validate_token');

    Route::group([ 'middleware' => 'auth:api' ], function()
    {
        Route::post('logout', 'AuthController@logout');
        Route::get('user', 'AuthController@user');
    });
});

// USER ROUTES
Route::group([ 'prefix' => 'user' ], function()
{
    Route::get('visited/{username}', 'UserController@visited');
    Route::get('list', 'UserController@list');

    Route::group([ 'middleware' => 'auth:api' , 'prefix' => 'edit' ], function()
    {
        Route::post('password', 'UserController@password');
        Route::post('description', 'UserController@description');
        Route::post('primary', 'UserController@primary');
        Route::post('primary_onchange', 'UserController@primary_onchange');
    });
});

//WOOFS
Route::group(['middleware' => 'auth:api', 'prefix' => 'woof'], function(){

    Route::post('send_woof', 'WoofController@send_woof');
    Route::post('send_rewoof', 'WoofController@send_rewoof');
    Route::post('send_comment', 'WoofController@send_comment');

    Route::post('like', 'LikeController@like');
    Route::post('dislike', 'LikeController@dislike');

    Route::post('delete', 'WoofController@delete');

    Route::get('selected/{woof_id}', 'WoofController@selected');

    Route::get('selected_rewoof/{woof_id}', 'WoofController@selected_rewoof');
    Route::get('selected_comment/{woof_id}', 'WoofController@selected_comment');

    Route::get('all', 'WoofController@all');
    
    Route::get('my_woofs/{id}', 'WoofController@my_woofs');

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
