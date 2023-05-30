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
    public function formystaffing()
    {
        $jsonString = DB::table('persons')
            ->leftJoin('staffings', 'staffings.person_Id', '=', 'persons.id')
            ->leftJoin('projects', 'staffings.project_Id', '=', 'projects.id')
            ->leftJoin('departments', 'departments.id', '=', 'persons.department')
            ->select('persons.id', 'persons.firstname as name', 'persons.lastname', 'staffings.id as entryNumber', 'projects.name as project', 'staffings.startDate as start', 'staffings.endDate as end', 'departments.color as color', 'departments.name as department')
            ->orderBy('persons.lastname')
            ->orderBy('start')
            ->get();

        $projects = DB::table('projects')
            ->select('name')
            ->orderBy('name')
            ->get();

        $persons = DB::table('persons')
            ->select('id', 'firstname', 'lastname')
            ->orderBy('lastname')
            ->get();

        $departments = DB::table('departments')
            ->select('id', 'name', 'color')
            ->orderBy('name')
            ->get();

        return Inertia::render('Scheduler', ['data' => $jsonString, 'projects' => $projects, 'allPersons' => $persons, 'departments' => $departments]);
    }
    public function insertStaffing(Request $request)
    {
        $staffingEntry = new Staffing;
        $project = Projects::where('name', $request->projectName)->first();

        $staffingEntry->person_Id = $request->personid;
        $staffingEntry->endDate = $request->endDate;
        $staffingEntry->startDate = $request->startDate;
        $staffingEntry->project_Id = $project->id;
        $staffingEntry->save();
    }
    public function updateStaffing(Request $request)
    {
        $project = Projects::where('name', $request->projectName)->first();
        $newid = $project->id;

        $id = $request->staffingid;
        $staffingEntry = Staffing::where('id', $id)->first();
        $staffingEntry->project_Id = $newid;
        $staffingEntry->startDate = $request->startDate;
        $staffingEntry->endDate = $request->endDate;
        $staffingEntry->project_Id = $newid;
        $staffingEntry->save();
    }
    public function deleteStaffing(Request $request)
    {
        $id = $request->staffingid;
        $staffingEntry = Staffing::where('id', $id)->first();
        $staffingEntry->delete();
    }
}
