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



Route::get('/get_all_branches','App\Http\Controllers\BranchController@get_all_branches');
//
Route::get('/get_all_bread','App\Http\Controllers\BreadController@get_all_bread');
Route::post('/create_bread','App\Http\Controllers\BreadController@create_bread');
Route::delete('/delete_bread/{id}','App\Http\Controllers\BreadController@delete_bread');
Route::post('/update_bread','App\Http\Controllers\BreadController@update_bread');
//
Route::get('/get_all_bread_group','App\Http\Controllers\BreadGroupController@get_all_bread_group');
Route::post('/create_bread_group','App\Http\Controllers\BreadGroupController@create_bread_group');
Route::post('/update_bread_group','App\Http\Controllers\BreadGroupController@update_bread_group');
Route::delete('/delete_bread_group/{id}','App\Http\Controllers\BreadGroupController@delete_bread_group');
Route::delete('/delete_specific_bread_group/{id}','App\Http\Controllers\BreadGroupController@delete_specific_bread_group');
//
Route::get('/get_all_raw_materials','App\Http\Controllers\RawMaterialController@get_all_raw_materials');
Route::post('/create_raw_materials','App\Http\Controllers\RawMaterialController@create_raw_materials');
Route::delete('/delete_raw_materials/{id}','App\Http\Controllers\RawMaterialController@delete_raw_materials');
Route::post('/update_raw_materials','App\Http\Controllers\RawMaterialController@update_raw_materials');
//
Route::get('/get_all_branch_raw_materials/{branchid}','App\Http\Controllers\RawMaterialsBranchController@get_all_branch_raw_materials');
Route::post('/update_branch_raw_materials','App\Http\Controllers\RawMaterialController@update_branch_raw_materials');
//
Route::post('/create_raw_materials_group','App\Http\Controllers\RawMaterialsGroupController@create_raw_materials_group');
//
Route::get('/get_all_selecta','App\Http\Controllers\SelectaController@get_all_selecta');
Route::post('/create_selecta','App\Http\Controllers\SelectaController@create_selecta');
Route::delete('/delete_selecta/{id}','App\Http\Controllers\SelectaController@delete_selecta');
Route::post('/update_selecta','App\Http\Controllers\SelectaController@update_selecta');
//
Route::get('/get_all_selecta_branch/{branchid}','App\Http\Controllers\SelectaBranchController@get_all_selecta_branch');
Route::post('/update_selecta_branch','App\Http\Controllers\SelectaBranchController@update_selecta_branch');