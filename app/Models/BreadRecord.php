<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BreadRecord extends Model
{
  use HasFactory;
  protected $fillable = [
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
  ];

}
