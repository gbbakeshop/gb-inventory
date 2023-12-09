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
      ]);
    } else {
      return response()->json([
        'status' => 'exist',
      ]);
    }

  }
}
