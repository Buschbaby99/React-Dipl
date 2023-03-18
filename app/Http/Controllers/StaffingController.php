<?php

namespace App\Http\Controllers;

use App\Models\Persons;

use Inertia\Inertia;
use Illuminate\Http\Request;
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
    
            return Inertia::render('Scheduler', array('data' => $jsonString));
        }
    
    }
    public function insertStaffing (){

            
    }
    public function updateStaffing (Request $request){
        $id = $request->staffingid;
        $staffingEnry = Staffing::where('id', $id)->first();
        $staffingEnry->startDate= $request->startDate;
        $staffingEnry->endDate= $request->endDate;
        $staffingEnry->save();
            
    }
    public function deleteStaffing (Request $request){
        
        $id = $request->staffingid;
        $staffingEntry = Staffing::where('id', $id)->first();
        $staffingEntry->delete();
            
    }


}
