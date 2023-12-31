<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Expenses extends Model
{
  use HasFactory;


  protected $fillable = [
    'branch_id',
    'user_id',
    'seller_id',
    'raw_materials_id',
    'amount',
    'discription',
    'status',
    'meridiem',
    'date',
  ];

  public function user(): HasOne
  {
      return $this->hasOne(User::class,'id','user_id');
  }
  public function seller(): HasOne
  {
      return $this->hasOne(User::class,'id','seller_id');
  }
}
