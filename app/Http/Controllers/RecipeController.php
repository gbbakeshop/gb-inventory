<?php

namespace App\Http\Controllers;

use App\Models\Bread;
use App\Models\BreadGroup;
use App\Models\RawMaterialsGroup;
use App\Models\Recipe;
use Illuminate\Http\Request;

class RecipeController extends Controller
{


  public function get_all_recipe()
  {
    $recipes = Recipe::orderBy('name', 'ASC')->with('bread_group', 'raw_materials_group')->get();

    $datas = [];

    foreach ($recipes as $recipe) {
      $breadGroupData = [];
      $rawMaterialsGroupData = [];

      foreach ($recipe->bread_group as $bread) {
        $breadGroupData[] = BreadGroup::where('bread_id', $bread->bread_id)->with('bread')->first();
      }

      foreach ($recipe->raw_materials_group as $raw_materials) {
        $rawMaterialsGroupData[] = RawMaterialsGroup::where('raw_materials_id', $raw_materials->raw_materials_id)->with('raw_materials')->first();
      }

      $datas[] = array_merge(
        $recipe->toArray(),
        ['bread_group' => $breadGroupData],
        ['raw_materials_group' => $rawMaterialsGroupData]
      );
    }

    return response()->json([
      'status' => $datas,
      'data' => $datas
    ]);

  }

  public function edit_recipe_bread_token(Request $request)
  {
    Recipe::where('id', $request->data['id'])->update([
      'bread_group_token' => $request->data['bread_group_token']
    ]);
    return response()->json([
      $this->get_all_recipe(),
      'status' => 'success',
      'notify' => [
        'status' => 'success',
        'message' => 'Updated Successfully'
      ],
    ]);
  }

  public function edit_recipe_raw_materials_token(Request $request)
  {
    Recipe::where('id', $request->data['id'])->update([
      'raw_materials_group_token' => $request->data['raw_materials_token']
    ]);
    return response()->json([
      $this->get_all_recipe(),
      'status' => 'success',
      'notify' => [
        'status' => 'success',
        'message' => 'Updated Successfully'
      ],
    ]);
  }

  public function edit_recipe(Request $request)
  {
    $exist = Recipe::where('name', $request->data['name'])->first();

    if ($exist == null) {
      Recipe::where('id', $request->data['id'])->update([
        'name' => $request->data['name'],
        'target' => $request->data['target']
      ]);
      return response()->json([
        $this->get_all_recipe(),
        'status' => 'success',
        'notify' => [
          'status' => 'success',
          'message' => 'Updated Successfully'
        ],
      ]);
    } else {
      if ($exist['name'] == $request->data['oldName']) {
        Recipe::where('id', $request->data['id'])->update([
          'target' => $request->data['target']
        ]);
        return response()->json([
          $this->get_all_recipe(),
          'status' => 'success',
          'notify' => [
            'status' => 'success',
            'message' => 'Updated Successfully'
          ],
        ]);
      } else {
        return response()->json([
          'status' => 'exist',
          'notify' => [
            'status' => 'exist',
            'message' => 'Recipe is already exist!'
          ],
        ]);
      }

    }
  }

  public function create_recipe(Request $request)
  {

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
