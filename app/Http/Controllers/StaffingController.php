<?php

namespace App\Http\Controllers;

use App\Models\Persons;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Staffing;
use App\Models\Projects;
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
            ->orderBy('persons.lastname')
            ->orderBy('start')
            ->get();

            $projects=DB::table('projects')
            ->select('name')
            ->orderBy('name')
            ->get();
    

            return Inertia::render('Scheduler', ['data' => $jsonString, 'projects' => $projects]);
        }
    
    }
    public function insertStaffing (Request $request){
       
        $staffingEnry= new Staffing;
        $project = Projects::where('name', $request->projectName)->first();
     
     

        $staffingEnry->person_Id= $request->personid;
        $staffingEnry->endDate= $request->endDate;
        $staffingEnry->startDate= $request->startDate;
        $staffingEnry->project_Id= $project->id;
        $staffingEnry->save();

            
    }
    public function updateStaffing (Request $request){
        $project = Projects::where('name', $request->projectName)->first();
        $newid =$project->id;

        $id = $request->staffingid;
        $staffingEnry = Staffing::where('id', $id)->first();
        $staffingEnry->startDate= $request->startDate;
        $staffingEnry->endDate= $request->endDate;
        $staffingEnry->project_Id= $newid;
        $staffingEnry->save();
            
    }
    public function deleteStaffing (Request $request){
        
        $id = $request->staffingid;
        $staffingEntry = Staffing::where('id', $id)->first();
        $staffingEntry->delete();
            
    }


}
