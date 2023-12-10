<?php

namespace App\Http\Controllers;

use App\Models\BreadGroup;
use Illuminate\Http\Request;

class BreadGroupController extends Controller
{

  function randomToken($length = 32)
  {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $randomString = '';

    for ($i = 0; $i < $length; $i++) {
      $randomString .= $characters[random_int(0, strlen($characters) - 1)];
    }

    return $randomString;
  }

  public function get_all_bread_group()
  {
    $breadGroup = BreadGroup::select('token', 'group_name')->distinct()->get();
    $newData = [];
    foreach ($breadGroup as $record) {
      $token = $record->token;
      $data = BreadGroup::where('token', $token)->with('bread')->get();
      $newData[] = $data;  // Append the records to the array
    }
    return response()->json([
      'group' => $breadGroup,
      'status' => $newData
    ]);
  }

  public function delete_bread_group($token)
  {
    BreadGroup::where('token', $token)->delete();
    return response()->json([
      'status' => 'success',
      'notify' => [
        'status' => 'success',
        'message' => 'Deleted Successfully'
      ],
      'data' => $this->get_all_bread_group()
    ]);
  }

  public function delete_specific_bread_group($id)
  {
    BreadGroup::where('id', $id)->delete();
    return response()->json([
      'status' => 'success',
      'notify' => [
        'status' => 'success',
        'message' => 'Deleted Successfully'
      ],
      'data' => $this->get_all_bread_group()
    ]);
  }

  
  public function update_bread_group(Request $request){

    foreach ($request->data as $data) {
      BreadGroup::create([
        'bread_id' => $data['id'],
        'group_name' => $request->groupName['group_name'],
        'token' =>  $request->groupName['token']
      ]);
    }
    return response()->json([
      'status' => 'success',
      'notify' => [
        'status' => 'success',
        'message' => 'Updated Successfully'
      ],
      'data' => $this->get_all_bread_group()
    ]);
  }
  public function create_bread_group(Request $request)
  {
    $token = $this->randomToken();

    $exist = BreadGroup::where('group_name', $request->groupName)->first();
    if ($exist == null) {
      foreach ($request->data as $data) {
        BreadGroup::create([
          'bread_id' => $data['id'],
          'group_name' => $request->groupName,
          'token' => $token
        ]);
      }
      return response()->json([
        'status' => 'success',
        'notify' => [
          'status' => 'success',
          'message' => 'Created Successfully'
        ],
      ]);
    } else {
      return response()->json([
        'status' => 'exist',
        'notify' => [
          'status' => 'exist',
          'message' => 'Name of group is already exist!'
        ],
      ]);
    }
  }
}
