<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Persons extends Model
{
    use HasFactory;

    protected $fillable = [
        'firstname',
        'lastname',
        'TelNr1',
        'TelNr2',
        'rank',
        'user_id',
        'department_id',
        'personAddress_id'
    ];
}
