<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class BreadRecord extends Model
{
  use HasFactory;
  protected $fillable = [
    'branch_id',
    'bread_id',
    'baker_id',
    'seller_id',
    'price',
    'beginning',
    'new_production',
    'remaining',
    'bread_sold',
    'bread_out',
    'total',
    'charge',
    'over',
    'sales',
    'meridiem',
    'status'
  ];

  public function baker(): HasOne
  {
      return $this->hasOne(User::class,'id','baker_id');
  }
  public function seller(): HasOne
  {
      return $this->hasOne(User::class,'id','seller_id');
  }
  
  public function bread(): HasOne
  {
      return $this->hasOne(Bread::class,'id','bread_id');
  }

}
