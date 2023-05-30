<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectAddress extends Model
{
    use HasFactory;

    protected $fillable = [
        'country',
        'ZIP',
        'city',
        'street',
    ];
}
