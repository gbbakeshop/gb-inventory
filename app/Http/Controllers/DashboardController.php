<?php

namespace App\Http\Controllers;

use App\Models\BreadRecord;
use App\Models\Charge;
use App\Models\Credit;
use App\Models\Expenses;
use App\Models\SelectaRecord;
use Illuminate\Http\Request;
use App\Models\User;

class DashboardController extends Controller
{
  public function get_total_records(Request $request)
  {

    $user = User::where('id', $request->seller_id)->first();
    $data1 = BreadRecord::where(function ($query) use ($request, $user) {
      $query->where('branch_id', '=', $request->branch_id)
        ->where('date', '=', $request->date)
        ->where('status', '=', 'sales');

      if ($user->position == 'admin') {
        $query->where('meridiem', '=', $request->meridiem);
      } else {
        $query->where('seller_id', '=', $request->seller_id);
      }
    })->sum('sales'); // Replace 'amount' with your actual column name

    $data2 = SelectaRecord::where(function ($query) use ($request, $user) {
      $query->where('branch_id', '=', $request->branch_id)
        ->where('date', '=', $request->date);

      if ($user->position == 'admin') {
        $query->where('meridiem', '=', $request->meridiem);
      } else {
        $query->where('seller_id', '=', $request->seller_id);
      }
    })->sum('sales'); // Replace 'amount' with your actual column name

    $data3 = Charge::where(function ($query) use ($request, $user) {
      $query->where('branch_id', '=', $request->branch_id)
        ->where('date', '=', $request->date);

      if ($user->position == 'admin') {
        $query->where('meridiem', '=', $request->meridiem);
      } else {
        $query->where('seller_id', '=', $request->seller_id);
      }
    })->sum('amount');

    $data4 = Credit::where(function ($query) use ($request, $user) {
      $query->where('branch_id', '=', $request->branch_id)
        ->where('date', '=', $request->date);

      if ($user->position == 'admin') {
        $query->where('meridiem', '=', $request->meridiem);
      } else {
        $query->where('seller_id', '=', $request->seller_id);
      }
    })->sum('amount');

    $data5 = Expenses::where(function ($query) use ($request, $user) {
      $query->where('branch_id', '=', $request->branch_id)
        ->where('date', '=', $request->date);

      if ($user->position == 'admin') {
        $query->where('meridiem', '=', $request->meridiem);
      } else {
        $query->where('seller_id', '=', $request->seller_id);
      }
    })->sum('amount');

    return response()->json([
      'br' => $data1,
      'sr' => $data2,
      'charge' => $data3,
      'credits' => $data4,
      'expenses' => $data5
    ]);
  }
}
