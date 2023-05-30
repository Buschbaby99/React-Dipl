<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Projects;
use Illuminate\Support\Facades\Log;
use App\Models\ProjectAddress;
use App\Models\Staffing;

class ProjectController extends Controller
{
    public function formyprojects()
    {
        $projects = Projects::all();
        $encode[] = json_encode($projects);

        return Inertia::render('Project/ProjectHome', $encode);
    }

    public function getAllDataFromProjects()
    {
        $projects = Projects::all();
        return response()->json($projects);
    }

    public function insertProject(Request $request)
    {
        $projectAddress = new ProjectAddress;

        $projectAddress->ZIP = $request->input('zip');
        $projectAddress->country = $request->input('country');
        $projectAddress->city = $request->input('city');
        $projectAddress->street = $request->input('street');
        $projectAddress->save();

        $project = new Projects;

        $project->name = $request->input('name');
        $project->project_number = $request->input('project_number');
        $project->startDate = $request->input('startDate');
        $project->endDate = $request->input('endDate');
        $project->description = $request->input('description');
        $project->projectAddress_Id = $projectAddress->id;
        $project->save();
    }

    public function deleteProject(Request $request)
    {
        $id = $request->id;

        $project = Projects::where('id', $id)->first();

        Staffing::where('project_Id', $project->id)->delete();
        $project->delete();
        $projectsAddress = ProjectAddress::where('id', $project->projectAddress_Id);
        $projectsAddress->delete();
    }

    public function editProject(Request $request)
    {
        $id = $request->id;
        $project = Projects::where('id', $id)->first();

        $projectAddress = ProjectAddress::where('id', $project->projectAddress_Id)->first();

        return response()->json([
            'project' => $project,
            'projectAddress' => $projectAddress,
        ]);
    }

    public function updateProject(Request $request)
    {
        $projectAddress = ProjectAddress::where('id', $request->id)->first();
    
        if ($projectAddress) {
            $projectAddress->ZIP = $request->input('zip');
            $projectAddress->country = $request->input('country');
            $projectAddress->city = $request->input('city');
            $projectAddress->street = $request->input('street');
            $projectAddress->save();
    
            $project = Projects::where('projectAddress_Id', $request->id)->first();
    
            if ($project) {
                $project->name = $request->input('name', 'Gustav');
                $project->project_number = $request->input('project_number');
                $project->startDate = $request->input('startDate');
                $project->endDate = $request->input('endDate');
                $project->description = $request->input('description');
                $project->projectAddress_Id = $projectAddress->id;
                $project->save();
            } else {
                Log::error('Kein Projekt gefunden mit projectAddress_Id: ' . $request->id);
                return response()->json(['error' => 'Kein Projekt gefunden'], 404);
            }
        } else {
            Log::error('Keine Projektadresse gefunden mit id: ' . $request->id);
            return response()->json(['error' => 'Keine Projektadresse gefunden'], 404);
        }
    }
}
