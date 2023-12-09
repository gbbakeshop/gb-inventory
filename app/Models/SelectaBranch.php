<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SelectaBranch extends Model
{
  use HasFactory;

  protected $fillable = [
    'branch_id',
    'selecta_id',
    'quantity',
    'warning',
  ];

}
