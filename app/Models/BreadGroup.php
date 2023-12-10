<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class BreadGroup extends Model
{
    use HasFactory;
    protected $fillable = [
      'bread_id',
      'group_name',
      'token'
   ];


   public function bread(): HasOne
   {
       return $this->hasOne(Bread::class,'id','bread_id');
   }
   
}
