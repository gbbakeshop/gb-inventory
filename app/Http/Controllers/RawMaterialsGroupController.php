<?php

namespace App\Http\Controllers;

use App\Models\RawMaterialsGroup;
use Illuminate\Http\Request;

class RawMaterialsGroupController extends Controller
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

  public function create_raw_materials_group(Request $request)
  {
    
    $token = $this->randomToken();
    $exist = RawMaterialsGroup::where('group_name', $request->groupName)->first();
    if ($exist == null) {
      foreach ($request->data as $data) {
        RawMaterialsGroup::create([
          'raw_materials_id' => $data['id'],
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
