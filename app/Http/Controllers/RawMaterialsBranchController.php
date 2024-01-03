<?php

namespace App\Http\Controllers;

use App\Models\Branch;
use App\Models\RawMaterial;
use App\Models\RawMaterialsBranch;
use Illuminate\Http\Request;

class RawMaterialsBranchController extends Controller
{

  public function get_all_branch_raw_materials($branchid)
  {

    $datas = RawMaterialsBranch::where('branch_id', '=', $branchid)->with(['raw_materials', 'branch'])->get();

    // $branches = Branch::all();
    // $datasss = RawMaterial::get();
    // foreach ($branches as $branch) {
    //   foreach ($datasss as $data) {
    //     // Check if the record already exists to avoid duplicates
    //     $existingRecord = RawMaterialsBranch::where('branch_id', $branch->id)
    //       ->where('raw_materials_id', $data->id)
    //       ->first();

    //     if (!$existingRecord) {
    //       RawMaterialsBranch::create([
    //         'branch_id' => $branch->id,
    //         'raw_materials_id' => $data->id,
    //         'bind' => 'Grams',
    //         'quantity' => 0,
    //         'warning' => 30
    //       ]);
    //     }
    //   }
    // }

    return response()->json([
      'status' => $datas,
    ]);
  }


  public function update_branch_raw_materials(Request $request)
  {
   RawMaterialsBranch::find($request->data['id'])->update([
      'quantity' => $request->data['quantity']
    ]);
    return response()->json([
      'status' => 'success',
      'notify' => [
        'status' => 'success',
        'message' => 'Updated Successfully'
      ],
      'data' => $this->get_all_branch_raw_materials($request->data['branch_id'])
    ]);
  }
}
