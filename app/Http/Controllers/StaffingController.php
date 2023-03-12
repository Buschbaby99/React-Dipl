<?php

namespace App\Http\Controllers;

use App\Models\Persons;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Projects;
use App\Models\Staffing;
use Illuminate\Support\Facades\DB;

class StaffingController extends Controller
{
    public function formystaffing ()
    {
        {
             $jsonString=DB::table('staffings')
            ->join('persons', 'staffings.person_Id', '=', 'persons.id')
            ->join('projects', 'staffings.project_Id', '=', 'projects.id')
            ->select('persons.id', 'persons.firstname as name', 'persons.lastname','staffings.id as entryNumber' ,'projects.name as project', 'staffings.startDate as start', 'staffings.endDate as end')
            ->get();
        
// Select 
/*
            // Array mit allen Daten erstellen
            $data = array(
                'projects' => $projects,
                'staffing' => $staffing,
                'mitarbeiter' => $persons
            );
        
            // Array als JSON kodieren
            $jsonString = json_encode($data);
        */
            return Inertia::render('Scheduler', array('data' => $jsonString));
        }
    }

}
