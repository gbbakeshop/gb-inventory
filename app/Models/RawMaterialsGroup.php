<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class RawMaterialsGroup extends Model
{
    use HasFactory;

    protected $fillable = [
      'raw_materials_id',
      'group_name',
      'grams',
      'token'
   ];

   public function raw_materials(): HasOne
   {
       return $this->hasOne(RawMaterial::class,'id','raw_materials_id');
   }
}
