<?php

namespace App\Http\Controllers;

use App\Models\Domination;
use Illuminate\Http\Request;

class DominationController extends Controller
{
    public function get_domination(Request $request)
    {
        $domination = Domination::where([
          ['date', '=', $request->date],
          ['branch_id','=',$request->branch_id],
          ['meridiem','=',$request->meridiem]
          ])->get();
        return response()->json([
            'status' => $domination,
        ]);
    }
    public function create_domination(Request $request)
    {

        for ($i = 0; $i < count($request->domination); $i++) {
            $exist = Domination::where([
              ['meridiem', '=', $request->meridiem], 
              ['date', '=', $request->date], 
              ['bills', '=', $request->domination[$i]['bills']]]
              )->first();
            if ($exist) {
                if ($i == 0) {
                    return response()->json([
                        'status' => 'error',
                        'message' => 'Domination of the day is saved'
                    ]);
                }

            } else {
                Domination::create([
                    'branch_id' => $request->branchid,
                    'bills' => $request->domination[$i]['bills'],
                    'pcs' => $request->domination[$i]['pcs'],
                    'total' => $request->domination[$i]['total'],
                    'date' => $request->date,
                    'meridiem'=>$request->meridiem
                ]);
            }
        }

        return response()->json([
            'status' => 'success',
            'message' => 'Successfully Saved'
        ]);
    }
}
