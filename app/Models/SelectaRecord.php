<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class SelectaRecord extends Model
{
    use HasFactory;
    protected $fillable = [
     'branch_id',
     'selecta_id',
     'seller_id',
     'price',
     'beginning',
     'new_purchase',
     'total',
     'remaining',
     'sold',
     'sales',
     'meridiem',
     'date',
    ];
   
    public function selecta(): HasOne
  {
      return $this->hasOne(Selecta::class,'id','selecta_id');
  }
}
