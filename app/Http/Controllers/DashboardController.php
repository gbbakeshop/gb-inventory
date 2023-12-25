<?php

namespace App\Http\Controllers;

use App\Models\BreadRecord;
use Illuminate\Http\Request;
use App\Models\User;

class DashboardController extends Controller
{
  public function get_total_records(Request $request)
  {

    $user = User::where('id', $request->seller_id)->first();
    $data = BreadRecord::where(function ($query) use ($request, $user) {
      $query->where('branch_id', '=', $request->branch_id)
        ->where('date', '=', $request->date)
        ->where('status', '=', 'sales');

      if ($user->position == 'admin') {
        $query->where('meridiem', '=', $request->meridiem);
      } else {
        $query->where('seller_id', '=', $request->seller_id);
      }
    })->sum('sales'); // Replace 'amount' with your actual column name

    return response()->json([
      'br' => number_format($data, 2),
    ]);

  }
}
