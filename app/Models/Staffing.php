<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Staffing extends Model
{
    protected $fillable = [
        'person_Id',
        'startDate',
        'endDate',
        'project_id',
    ];
}
