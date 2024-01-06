<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Domination extends Model
{
    use HasFactory;
    protected $fillable = [
        'branch_id',
        'bills',
        'pcs',
        'total',
        'date',
        'meridiem'
    ];
    
}
