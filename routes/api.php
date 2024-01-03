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



Route::post('/get_branch_account', 'App\Http\Controllers\UserController@get_branch_account');
Route::get('/get_all_account', 'App\Http\Controllers\UserController@get_all_account');
Route::post('/create_account', 'App\Http\Controllers\UserController@create_account');
Route::post('/update_account', 'App\Http\Controllers\UserController@update_account');
Route::post('/delete_account', 'App\Http\Controllers\UserController@delete_account');
// Route::middleware('auth:sanctum')->group(function () {
Route::get('/get_all_branches', 'App\Http\Controllers\BranchController@get_all_branches');
//
Route::get('/get_all_bread', 'App\Http\Controllers\BreadController@get_all_bread');
Route::post('/create_bread', 'App\Http\Controllers\BreadController@create_bread');
Route::delete('/delete_bread/{id}', 'App\Http\Controllers\BreadController@delete_bread');
Route::post('/update_bread', 'App\Http\Controllers\BreadController@update_bread');
//
Route::get('/get_all_bread_group', 'App\Http\Controllers\BreadGroupController@get_all_bread_group');
Route::post('/create_bread_group', 'App\Http\Controllers\BreadGroupController@create_bread_group');
Route::post('/update_bread_group', 'App\Http\Controllers\BreadGroupController@update_bread_group');
Route::delete('/delete_bread_group/{id}', 'App\Http\Controllers\BreadGroupController@delete_bread_group');
Route::delete('/delete_specific_bread_group/{id}', 'App\Http\Controllers\BreadGroupController@delete_specific_bread_group');
//
Route::get('/get_all_raw_materials', 'App\Http\Controllers\RawMaterialController@get_all_raw_materials');
Route::post('/create_raw_materials', 'App\Http\Controllers\RawMaterialController@create_raw_materials');
Route::delete('/delete_raw_materials/{id}', 'App\Http\Controllers\RawMaterialController@delete_raw_materials');
Route::post('/update_raw_materials', 'App\Http\Controllers\RawMaterialController@update_raw_materials');
//
Route::get('/get_all_branch_raw_materials/{branchid}', 'App\Http\Controllers\RawMaterialsBranchController@get_all_branch_raw_materials');
Route::post('/update_branch_raw_materials', 'App\Http\Controllers\RawMaterialsBranchController@update_branch_raw_materials');
//
Route::get('/get_all_raw_materials_group', 'App\Http\Controllers\RawMaterialsGroupController@get_all_raw_materials_group');
Route::post('/update_raw_materials_group', 'App\Http\Controllers\RawMaterialsGroupController@update_raw_materials_group');
Route::post('/create_raw_materials_group', 'App\Http\Controllers\RawMaterialsGroupController@create_raw_materials_group');
Route::post('/update_raw_materials_group_grams', 'App\Http\Controllers\RawMaterialsGroupController@update_raw_materials_group_grams');
Route::delete('/delete_specific_raw_materials_group/{id}', 'App\Http\Controllers\RawMaterialsGroupController@delete_specific_raw_materials_group');
Route::delete('/delete_raw_materials/{id}', 'App\Http\Controllers\RawMaterialsGroupController@delete_raw_materials');
//
Route::get('/get_all_selecta', 'App\Http\Controllers\SelectaController@get_all_selecta');
Route::post('/create_selecta', 'App\Http\Controllers\SelectaController@create_selecta');
Route::delete('/delete_selecta/{id}', 'App\Http\Controllers\SelectaController@delete_selecta');
Route::post('/update_selecta', 'App\Http\Controllers\SelectaController@update_selecta');
//
Route::post('/move_to_selecta_report', 'App\Http\Controllers\SelectaRecordController@move_to_selecta_report');
Route::post('/get_selecta_branch_sales_report', 'App\Http\Controllers\SelectaRecordController@get_selecta_branch_sales_report');
//
Route::get('/get_all_selecta_branch/{branchid}', 'App\Http\Controllers\SelectaBranchController@get_all_selecta_branch');
Route::post('/update_selecta_branch', 'App\Http\Controllers\SelectaBranchController@update_selecta_branch');
//
Route::get('/get_all_recipe', 'App\Http\Controllers\RecipeController@get_all_recipe');
Route::post('/create_recipe', 'App\Http\Controllers\RecipeController@create_recipe');
Route::post('/edit_recipe', 'App\Http\Controllers\RecipeController@edit_recipe');
Route::post('/edit_recipe_bread_token', 'App\Http\Controllers\RecipeController@edit_recipe_bread_token');
Route::post('/edit_recipe_raw_materials_token', 'App\Http\Controllers\RecipeController@edit_recipe_raw_materials_token');
//
Route::post('/create_new_records', 'App\Http\Controllers\BreadRecordController@create_new_records');
Route::post('/get_bakers_report_record/{branchid}/{bakerid}', 'App\Http\Controllers\BreadRecordController@get_bakers_report_record');
Route::post('/get_bread_report_record/{branchid}/{sellerid}', 'App\Http\Controllers\BreadRecordController@get_bread_report_record');
Route::post('/get_sales_report_record', 'App\Http\Controllers\BreadRecordController@get_sales_report_record');
Route::post('/move_record_to_bread_report', 'App\Http\Controllers\BreadRecordController@move_record_to_bread_report');
Route::post('/edit_new_production_record', 'App\Http\Controllers\BreadRecordController@edit_new_production_record');
Route::post('/edit_bread_report_record', 'App\Http\Controllers\BreadRecordController@edit_bread_report_record');
Route::post('/move_record_to_sales_report', 'App\Http\Controllers\BreadRecordController@move_record_to_sales_report');
// });
Route::post('/get_total_records', 'App\Http\Controllers\DashboardController@get_total_records');
//
Route::post('/get_all_credit', 'App\Http\Controllers\CreditController@get_all_credit');
Route::post('/create_credit', 'App\Http\Controllers\CreditController@create_credit');
Route::post('/delete_credit', 'App\Http\Controllers\CreditController@delete_credit');
Route::post('/update_credit', 'App\Http\Controllers\CreditController@update_credit');
//
Route::post('/get_all_charge', 'App\Http\Controllers\ChargeController@get_all_charge');
Route::post('/create_charge', 'App\Http\Controllers\ChargeController@create_charge');
Route::post('/delete_charge', 'App\Http\Controllers\ChargeController@delete_charge');
Route::post('/update_charge', 'App\Http\Controllers\ChargeController@update_charge');
//
Route::post('/get_all_expenses', 'App\Http\Controllers\ExpensesController@get_all_expenses');
Route::post('/create_expenses', 'App\Http\Controllers\ExpensesController@create_expenses');
Route::post('/delete_expenses', 'App\Http\Controllers\ExpensesController@delete_expenses');
Route::post('/update_expenses', 'App\Http\Controllers\ExpensesController@update_expenses');