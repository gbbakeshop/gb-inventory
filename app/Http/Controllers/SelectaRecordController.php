<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Selecta;
use App\Models\SelectaBranch;
use App\Models\SelectaRecord;
use Illuminate\Http\Request;

class SelectaRecordController extends Controller
{
  public static function get_all_selecta_branch($branchid)
  {
    $data = SelectaBranch::where('branch_id', $branchid)->with('selecta')->get();
    return response()->json([
      'status' => $data
    ]);
  }

  public static function get_sales_report($branch_id, $date, $meridiem, $user)
  {
    $data = SelectaRecord::where(function ($query) use ($branch_id, $date, $meridiem, $user) {
      $query->where('branch_id', '=', $branch_id)
        ->where('date', '=', $date);
      if ($user->position == 'admin') {
        $query->where('meridiem', '=', $meridiem);
      } else {
        $query->where('seller_id', '=', $user->id); // Assuming seller_id is the correct field
      }
    })->with('selecta')->get();

    return $data;
  }

  public function get_selecta_branch_sales_report(Request $request)
  {
    $user = User::where('id', $request->data['seller_id'])->first();

    $data = $this->get_sales_report($request->data['branch_id'], $request->data['date'], $request->data['meridiem'], $user);
    return response()->json([
      'status' => $data
    ]);
  }


  public function move_to_selecta_report(Request $request)
  {
    // 
    $requestData = $request->data;
    foreach ($request->data as $data) {
      SelectaBranch::where('id', '=', $data['id'])->update([
        'quantity' => $data['remaining']
      ]);

      SelectaRecord::create([
        'branch_id' => $data['branch_id'],
        'selecta_id' => $data['selecta']['id'],
        'seller_id' => $data['seller_id'],
        'price' => $data['selecta']['price'],
        'beginning' => $data['quantity'],
        'new_purchase' => 0,
        'total' => $data['sold'],
        'remaining' => $data['remaining'],
        'sold' => $data['sold'],
        'sales' => $data['sales'],
        'meridiem' => $data['meridiem'],
        'date' => $data['date'],
      ]);
    }

    $branchId = $requestData[0]['branch_id'];
    $date = $requestData[0]['date'];
    $meridiem = $requestData[0]['meridiem'];
    $seller_id = $requestData[0]['seller_id'];
    $user = User::where('id', $seller_id)->first();
    return response()->json([
      'status' => 'success',
      'notify' => [
        'status' => 'success',
        'message' => 'Recorded Successfully!'
      ],
      'data' => $this->get_all_selecta_branch($request->data[0]['branch_id']),
      'data2' => $this->get_sales_report($branchId, $date, $meridiem, $user)
    ]);
  }
}
