<?php

namespace App\Http\Controllers;

use App\Models\Bread;
use Illuminate\Http\Request;

class BreadController extends Controller
{
  public function get_all_bread()
  {
    $bread = Bread::all();
    return response()->json([
      'status' => $bread
    ]);
  }

  public function create_bread(Request $request)
  {
    Bread::create($request->data);
    return response()->json([
      'status' => 'success',
      'data'=>$this->get_all_bread()
    ]);
  }

  public function delete_bread($id)
  {
    Bread::find($id)->delete();
    return response()->json([
      'status' => 'success',
      'data'=>$this->get_all_bread()
    ]);
  }

  public function update_bread(Request $request)
  {
    Bread::find($request->data['id'])->update($request->data);
    return response()->json([
      'status' => 'success',
      'data'=>$this->get_all_bread()
    ]);
  }

}
