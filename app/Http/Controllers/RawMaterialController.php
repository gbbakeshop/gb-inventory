<?php

namespace App\Http\Controllers;

use App\Models\Branch;
use App\Models\RawMaterial;
use App\Models\RawMaterialsBranch;
use Illuminate\Http\Request;

class RawMaterialController extends Controller
{
  public function get_all_raw_materials()
  {
    $rm = RawMaterial::orderBy('name', 'ASC')->get();
    return response()->json([
      'status' => $rm
    ]);
  }

  public function create_raw_materials(Request $request)
  {
    $exist = RawMaterial::where('name', $request->data['name'])->first();
    $branches = Branch::all();


    if (!$exist) {
      $rawMaterialsId = RawMaterial::create($request->data);
      foreach ($branches as $branch) {
        RawMaterialsBranch::create([
          'raw_materials_id' => $rawMaterialsId->id,
          'branch_id' => $branch->id,
          'quantity' => 0,
          'bind' => $rawMaterialsId->bind,
          'warning' => 30
        ]);
      }
     
      return response()->json([
        'status' => 'success',
        'notify' => [
          'status' => 'success',
          'message' => 'Created Successfully'
        ],
        'data' => $this->get_all_raw_materials()
      ]);
    } else {
      return response()->json([
        'status' => 'exist',
        'notify' => [
          'status' => 'exist',
          'message' => 'Raw Materials is already exist!'
        ],
        'data' => $this->get_all_raw_materials()
      ]);
    }

  }

  public function delete_raw_materials($id)
  {
    RawMaterial::find($id)->delete();
    RawMaterialsBranch::where('raw_materials_id',$id)->delete();

    return response()->json([
      'status' => 'success',
      'notify' => [
        'status' => 'success',
        'message' => 'Deleted Successfully'
      ],
      'data' => $this->get_all_raw_materials()
    ]);
  }

  public function update_raw_materials(Request $request)
  {
    RawMaterial::find($request->data['id'])->update($request->data);
    return response()->json([
      'status' => 'success',
      'notify' => [
        'status' => 'success',
        'message' => 'Updated Successfully'
      ],
      'data' => $this->get_all_raw_materials()
    ]);
  }
}
