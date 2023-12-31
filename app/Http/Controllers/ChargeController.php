<?php

namespace App\Http\Controllers;

use App\Models\Charge;
use Illuminate\Http\Request;
use App\Models\User;

class ChargeController extends Controller
{
  public function get_all($branch_id, $date, $meridiem, $user)
  {
    $data = Charge::where(function ($query) use ($branch_id, $date, $meridiem, $user) {
      $query->where('branch_id', '=', $branch_id)
        ->where('date', '=', $date);
      if ($user->position == 'admin') {
        $query->where('meridiem', '=', $meridiem);
      } else {
        $query->where('seller_id', '=', $user->id); // Assuming seller_id is the correct field
      }
    })->with(['user', 'seller'])->get();

    return $data;
  }
  public function get_all_charge(Request $request)
  {
    $user = User::where('id', $request->seller_id)->first();
    $data = $this->get_all($request->branch_id, $request->date, $request->meridiem, $user);
    return response()->json([
      'status' => $data
    ]);
  }
  public function create_charge(Request $request)
  {
    $user = User::where('id', $request->data['seller_id'])->first();
    Charge::create($request->data);
    return response()->json([
      'status' => $this->get_all($request->data['branch_id'], $request->data['date'], $request->data['meridiem'], $user),
      'notify' => [
        'status' => 'success',
        'message' => 'Created Successfully'
      ],
    ]);
  }
  public function delete_charge(Request $request)
  {
    $user = User::where('id', $request->data['seller_id'])->first();
    Charge::where('id', $request->data['id'])->delete();
    return response()->json([
      'status' => $this->get_all($request->data['branch_id'], $request->data['date'], $request->data['meridiem'], $user),
      'notify' => [
        'status' => 'success',
        'message' => 'Delete Successfully'
      ],
    ]);
  }
  public function update_charge(Request $request)
  {
    $user = User::where('id', $request->data['seller_id'])->first();
    Charge::where('id', $request->data['id'])->update($request->data);
    return response()->json([
      'status' => $this->get_all($request->data['branch_id'], $request->data['date'], $request->data['meridiem'], $user),
      'notify' => [
        'status' => 'success',
        'message' => 'Updated Successfully'
      ],
    ]);
  }
}
