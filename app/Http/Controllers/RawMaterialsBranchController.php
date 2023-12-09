<?php

namespace App\Http\Controllers;

use App\Models\RawMaterialsBranch;
use Illuminate\Http\Request;

class RawMaterialsBranchController extends Controller
{
  public function get_all_branch_raw_materials($branchid){
    $data = RawMaterialsBranch::find($branchid);
    return response()->json([
      'status' => $data
    ]);
  }


  public function update_branch_raw_materials(Request $request){
    $data = RawMaterialsBranch::find($request->data['id'])->update($request->data);
    return response()->json([
      'status' => $data
    ]);
  }
}
