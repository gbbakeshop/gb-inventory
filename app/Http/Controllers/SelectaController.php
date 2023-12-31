<?php

namespace App\Http\Controllers;

use App\Models\Branch;
use App\Models\Selecta;
use App\Models\SelectaBranch;
use Illuminate\Http\Request;

class SelectaController extends Controller
{
  public function get_all_selecta()
  {
    $selectas = Selecta::orderBy('name', 'ASC')->get();
    // $branches = Branch::all();

    // foreach ($branches as $branch) {
    //   foreach ($selectas as $selecta) {
    //     // Check if the record already exists to avoid duplicates
    //     $existingRecord = SelectaBranch::where('branch_id', $branch->id)
    //       ->where('selecta_id', $selecta->id)
    //       ->first();

    //     if (!$existingRecord) {
    //       SelectaBranch::create([
    //         'branch_id' => $branch->id,
    //         'selecta_id' => $selecta->id,
    //         'quantity' => 0,
    //         'warning' => 30
    //       ]);
    //     }
    //   }
    // }

    return response()->json([
      'status' => $selectas
    ]);
  }

  public function create_selecta(Request $request)
  {
    $branches = Branch::all();
    $selecta = Selecta::create($request->data);
    foreach ($branches as $branch) {
      SelectaBranch::create([
        'branch_id' => $branch->id,
        'selecta_id' => $selecta->id,
        'quantity' => 0,
        'warning' => 30
      ]);
    }
    return response()->json([
      'status' => 'success',
      'notify' => [
        'status' => 'success',
        'message' => 'Created Successfully!'
      ],
      'data' => $this->get_all_selecta()
    ]);
  }

  public function delete_selecta($id)
  {

    Selecta::find($id)->delete();
    SelectaBranch::where('selecta_id', '=', $id)->delete();
    return response()->json([
      'status' => 'success',
      'notify' => [
        'status' => 'success',
        'message' => 'Deleted Successfully!'
      ],
      'data' => $this->get_all_selecta()
    ]);
  }

  public function update_selecta(Request $request)
  {
    Selecta::find($request->data['id'])->update($request->data);
    return response()->json([
      'status' => 'success',
      'notify' => [
        'status' => 'success',
        'message' => 'Updated Successfully!'
      ],
      'data' => $this->get_all_selecta()
    ]);
  } 
}
