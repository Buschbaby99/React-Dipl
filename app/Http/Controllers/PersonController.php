<?php

namespace App\Http\Controllers;

use App\Models\Persons;
use App\Models\Staffing;
use App\Models\Projects;

class PersonController extends Controller
{
    public function getAllDataFromPersons()
    {
        $persons = Persons::join('departments', 'departments.id', '=', 'persons.department')
        ->select('persons.firstname', 'persons.lastname', 'departments.name as department')
        ->get();
        return response()->json($persons);
    }

    public function forMyPersonsStatistic()
    {
        $employeeProjectData = Staffing::join('persons', 'staffings.person_Id', '=', 'persons.id')
            ->join('projects', 'staffings.project_Id', '=', 'projects.id')
            ->join('departments', 'departments.id', '=', 'persons.department')
            ->select('persons.firstname', 'persons.lastname', 'departments.name as department', 'projects.name as projectName', 'staffings.startDate', 'staffings.endDate')
            ->get();

        return response()->json($employeeProjectData);
    }
}
