<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Recipe extends Model
{
    use HasFactory;

    protected $fillable = [
      'name',
      'target',
      'bread_group_token',
      'raw_materials_group_token'
   ];

  public function bread_group(): HasMany
  {
      return $this->hasMany(BreadGroup::class,'token','bread_group_token');
  }

  public function raw_materials_group(): HasMany
  {
      return $this->hasMany(RawMaterialsGroup::class,'token','raw_materials_group_token');
  }
    
}
