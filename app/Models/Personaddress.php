<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Personaddress extends Model
{
    protected $fillable = [
        'country',
        'ZIP',
        'city',
        'street',
    ];


}
