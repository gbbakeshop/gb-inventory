<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use Illuminate\Http\Request;

class RecipeController extends Controller
{

  public function get_all_recipe()
  {
    $recipe = Recipe::orderBy('name', 'ASC')->with('bread_group','raw_materials_group')->get();
    return response()->json([
      'status' => $recipe
    ]);
  }

    public function create_recipe(Request $request){

      Recipe::create($request->data);
      return response()->json([
        'status' => 'success',
        'notify' => [
          'status' => 'success',
          'message' => 'Created Successfully'
        ],
      ]);
    }
}
