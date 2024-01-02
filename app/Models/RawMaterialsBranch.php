<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

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

    // protected $primaryKey = ['raw_materials_id', 'branch_id'];
    protected $primaryKey = null;
    public $incrementing = false;

    // Override the method to specify the composite primary key

    public function raw_materials(): HasOne
    {
        return $this->hasOne(RawMaterial::class, 'id', 'raw_materials_id');
    }

    public function branch(): HasOne
    {
        return $this->hasOne(Branch::class, 'id', 'branch_id');
    }
}
