<?php

namespace App\Http\Controllers;

use App\Models\RawMaterial;
use Illuminate\Http\Request;

class RawMaterialController extends Controller
{
  public function get_all_raw_materials(){
    $rm = RawMaterial::all();
    return response()->json([
      'status' => $rm
    ]);
  }

  public function create_raw_materials(Request $request){
    $rm = RawMaterial::create($request->data);
    return response()->json([
      'status' => $rm
    ]);
  }

  public function delete_raw_materials($id){
    RawMaterial::find($id)->delete();
    return response()->json([
      'status' => 'success'
    ]);
  }

  public function update_raw_materials(Request $request){
    RawMaterial::find($request)->update($request->data);
    return response()->json([
      'status' => 'success'
    ]);
  }
}
