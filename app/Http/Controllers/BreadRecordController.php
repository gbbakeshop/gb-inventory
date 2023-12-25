<?php

namespace App\Http\Controllers;

use App\Models\BreadRecord;
use App\Models\User;
use Illuminate\Http\Request;
use Carbon\Carbon;

class BreadRecordController extends Controller
{
  public function create_new_records(Request $request)
  {

    foreach ($request->data as $data) {

      $isExist = BreadRecord::where([
        ['branch_id', '=', $data['branch_id']],
        ['bread_id', '=', $data['bread']['id']],
        ['status', '=', 'bakers'],
      ])->first();

      if ($isExist == null) {
        if ($data['new_production'] != 0) {
          BreadRecord::create([
            'branch_id' => $data['branch_id'],
            'bread_id' => $data['bread']['id'],
            'baker_id' => $data['bakers_id'],
            'price' => $data['bread']['price'],
            'beginning' => 0,
            'charge' => 0,
            'over' => 0,
            'bread_out' => 0,
            'bread_sold' => 0,
            'remaining' => 0,
            'sales' => 0,
            'new_production' => $data['new_production'],
            'total' => $data['new_production'],
            'status' => 'bakers'
          ]);
        }
      } else {
        BreadRecord::where('id', $isExist->id)->update([
          'bread_id' => $data['bread']['id'],
          'price' => $data['bread']['price'],
          'new_production' => $data['new_production'] + $isExist->new_production,
          'total' => $data['new_production'] + $isExist->total,
        ]);
      }

    }
    return response()->json([
      'status' => 'success',
      'notify' => [
        'status' => 'success',
        'message' => 'Created Successfully'
      ],
    ]);
  }


  public function get_bakers_report_record($branchid, $bakerid)
  {
    $user = User::where('id', $bakerid)->first();
    $data = BreadRecord::where(function ($query) use ($branchid, $user, $bakerid) {
      $query->where('branch_id', '=', $branchid)
        ->where(function ($subquery) use ($user, $bakerid) {
          if ($user->position !== 'admin') {
            if ($user->position == 'Baker' || $user->position == 'Chief Baker' || $user->position == 'Lamesador' || $user->position == 'Supervisor') {
              $subquery->where('baker_id', '=', $bakerid);
            }
          }
        })
        ->where('status', '=', 'bakers');
    })->with(['baker', 'seller', 'bread'])->get();
    return response()->json([
      'status' => $data,
    ]);
  }

  public function get_bread_report_record($branchid, $sellerid)
  {
    $user = User::where('id', $sellerid)->first();

    $data = BreadRecord::where(function ($query) use ($branchid, $sellerid, $user) {
      $query->where('branch_id', '=', $branchid)
        ->where('status', '=', 'bread');

      if ($user->position !== 'admin') {
        $query->where(function ($subquery) use ($sellerid) {
          $subquery->where('seller_id', '<>', $sellerid)
            ->orWhere('seller_id', '=', null);
        });
      }

    })->with(['baker', 'seller', 'bread'])->get();


    return response()->json([
      'status' => $data,
    ]);
  }

  public function get_sales_report_record(Request $request)
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
    })->with(['baker', 'seller', 'bread'])->get();

    return response()->json([
      'status' => $data,
    ]);
  }

  public function move_record_to_sales_report(Request $request)
  {
    BreadRecord::where('id', $request->data['id'])->update([
      'bread_out' => $request->data['bread_out'],
      'seller_id' => $request->data['seller_id'],
      'bread_sold' => $request->data['total'] - ($request->data['remaining'] + $request->data['bread_out']),
      'remaining' => $request->data['remaining'],
      'sales' => ($request->data['total'] - ($request->data['remaining'] + $request->data['bread_out'])) * $request->data['price'],
      'meridiem' => $request->data['meridiem'],
      'date' => $request->data['date'],
      'status' => 'sales',
    ]);
    BreadRecord::create([
      'branch_id' => $request->data['branch_id'],
      'bread_id' => $request->data['bread_id'],
      'baker_id' => $request->data['baker_id'],
      'seller_id' => $request->data['seller_id'],
      'price' => $request->data['price'],
      'beginning' => $request->data['remaining'],
      'charge' => 0,
      'over' => 0,
      'bread_out' => 0,
      'bread_sold' => 0,
      'remaining' => 0,
      'sales' => 0,
      'new_production' => 0,
      'total' => $request->data['remaining'],
      'status' => 'bread'
    ]);
    return response()->json([
      $this->get_bread_report_record($request->data['branch_id'], $request->data['seller_id']),
      'status' => 'success',
      'notify' => [
        'status' => 'success',
        'message' => 'Updated Successfully'
      ],
    ]);
  }

  public function edit_new_production_record(Request $request)
  {

    BreadRecord::where('id', $request->data['id'])->update([
      'new_production' => $request->data['new_production']
    ]);
    return response()->json([
      $this->get_bakers_report_record($request->data['branch_id'], $request->data['baker_id']),
      'status' => 'success',
      'notify' => [
        'status' => 'success',
        'message' => 'Updated Successfully'
      ],
    ]);
  }

  public function edit_bread_report_record(Request $request)
  {
    BreadRecord::where('id', $request->data['id'])->update([
      'beginning' => $request->data['beginning'],
      'charge' => $request->data['charge'],
      'over' => $request->data['over'],
      'total' => ($request->data['beginning'] + $request->data['new_production'] + $request->data['over']) - $request->data['charge']
    ]);

    return response()->json([
      $this->get_bread_report_record($request->data['branch_id'], $request->data['findSeller']),
      'status' => 'success',
      'notify' => [
        'status' => 'success',
        'message' => 'Updated Successfully'
      ],
    ]);
  }

  public function move_record_to_bread_report(Request $request)
  {
    $existBreadReport = BreadRecord::where([
      ['bread_id', '=', $request->data['bread_id']],
      ['status', '=', 'bread']
    ])->first();

    if ($existBreadReport) {
      $existBreadReport->update([
        // 'seller_id' => $request->data['seller_id'],
        'new_production' => $existBreadReport->new_production + $request->data['new_production'],
        'over' => $existBreadReport->over + $request->data['over'],
        'total' => ($existBreadReport->beginning + $existBreadReport->new_production + $request->data['new_production'] + $existBreadReport->over + $request->data['over']) - $existBreadReport->charge
      ]);
      BreadRecord::where('id', $request->data['id'])->delete();
    } else {
      BreadRecord::where('id', $request->data['id'])->update([
        // 'seller_id' => $request->data['seller_id'],
        'status' => 'bread',
        'over' => $request->data['over'],
        'total' => $request->data['over'] + $request->data['new_production']
      ]);
    }

    return response()->json([
      $this->get_bakers_report_record($request->data['branch_id'], $request->data['baker_id']),
      'status' => 'success',
      'notify' => [
        'status' => 'success',
        'message' => 'Updated Successfully'
      ],
    ]);

  }


}
