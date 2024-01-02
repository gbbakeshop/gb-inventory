<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Hash;
use Illuminate\Validation\Rules;

class UserController extends Controller
{
  public function get_all_account()
  {
    $users = User::with('branch')->get();
    return response()->json([
      'status' => $users,
    ]);
  }
  public function get_branch_account(Request $request)
  {
    $users = User::where('branch_id', $request->branch_id)->with('branch')->get();
    return response()->json([
      'status' => $users,
    ]);
  }
  public function create_account(Request $request)
  {
    ;
    $request->validate([
      'name' => 'required|string|max:255',
      'email' => 'required|string|email|max:255|unique:' . User::class,
      'password' => ['required', 'confirmed', Rules\password::defaults()],
    ]);

    User::create([
      'name' => $request->name,
      'branch_id' => $request->branch,
      'email' => $request->email,
      'password' => Hash::make($request->password),
      'position' => $request->position
    ]);

    return response()->json([
      'status' => $this->get_all_account(),
      'notify' => [
        'status' => 'success',
        'message' => 'Registration Successfully'
      ],
    ]);

  }
  public function update_account(Request $request)
  {
    User::where('id', $request->data['id'])
      ->update([$request->data]);
    return response()->json([
      'status' => $this->get_all_account(),
      'notify' => [
        'status' => 'success',
        'message' => 'Updated Successfully'
      ],
    ]);
  }
  public function delete_account(Request $request)
  {
    User::where('id', $request->data['id'])
      ->delete();
    return response()->json([
      'status' => $this->get_all_account(),
      'notify' => [
        'status' => 'success',
        'message' => 'Deleted Successfully'
      ],
    ]);
  }
}
