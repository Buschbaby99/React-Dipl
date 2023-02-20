<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('sendrequest', 'App\Http\Controllers\AdminController@ReceiveIt');
Route::post('insertUser', 'App\Http\Controllers\AdminController@myRegister');
Route::post('deleteUser', 'App\Http\Controllers\AdminController@deleteUser');
Route::post('deleteProject', 'App\Http\Controllers\AdminController@deleteProject');

Route::post('editUser', 'App\Http\Controllers\AdminController@editUser');
Route::post('updateUser', 'App\Http\Controllers\AdminController@updateUser');