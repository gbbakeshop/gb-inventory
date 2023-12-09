<?php

namespace App\Http\Controllers;

use App\Models\Selecta;
use Illuminate\Http\Request;

class SelectaController extends Controller
{
  public function get_all_selecta(){
    $data = Selecta::all();
    return response()->json([
      'status' => $data
    ]);
  }

  public function create_selecta(Request $request){
    $data = Selecta::create($request->data);
    return response()->json([
      'status' => $data
    ]);
  }

  public function delete_selecta($id){
    Selecta::find($id)->delete();
    return response()->json([
      'status' => 'success'
    ]);
  }

  public function update_selecta(Request $request){
    Selecta::find($request->data['id'])->update($request->data);
    return response()->json([
      'status' => 'success'
    ]);
  }
}
