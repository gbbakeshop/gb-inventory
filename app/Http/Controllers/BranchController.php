<?php

namespace App\Http\Controllers;

use App\Models\Branch;
use Illuminate\Http\Request;

class BranchController extends Controller
{
    public function get_all_branches(){
      $branches = Branch::all();
      return response()->json([
          'status' => $branches
      ]);
    }
}
