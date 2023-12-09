<?php

namespace App\Http\Controllers;

use App\Models\SelectaBranch;
use Illuminate\Http\Request;

class SelectaBranchController extends Controller
{
  public function get_all_selecta_branch($branchid){
    $data = SelectaBranch::find($branchid);
    return response()->json([
      'status' => $data
    ]);
  }

  public function update_selecta_branch(Request $request){
    $data = SelectaBranch::find($request->data['id'])->update($request->data);
    return response()->json([
      'status' => $data
    ]);
  }
}
