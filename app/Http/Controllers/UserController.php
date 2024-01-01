<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
  public function get_all_account(){
    $users=  User::with('branch')->get();
    return response()->json([
     'status' => $users,
   ]);
  }
  public function get_branch_account(Request $request){
     $users=  User::where('branch_id',$request->branch_id)->with('branch')->get();
     return response()->json([
      'status' => $users,
    ]);
    }
}
