<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Bread extends Model
{
    use HasFactory;
    protected $fillable = [
      'name',
      'price'
   ];

   public function bread_group(): HasOne
   {
       return $this->hasOne(Bread::class,'id');
   }
}
