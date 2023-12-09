<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RawMaterialsBranch extends Model
{
    use HasFactory;

    protected $fillable = [
      'raw_materials_id',
      'branch_id',
      'quantity',
      'bind',
      'warning',
   ];
   
}
