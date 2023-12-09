<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BreadGroup extends Model
{
    use HasFactory;
    protected $fillable = [
      'bread_id',
      'group_name',
      'token'
   ];
   
}
