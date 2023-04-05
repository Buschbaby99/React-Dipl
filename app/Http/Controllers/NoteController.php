<?php

namespace App\Http\Controllers;

use App\Models\Persons;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Notes;
use App\Models\Projects;
use Illuminate\Support\Facades\DB;

class NoteController extends Controller
{
    
    public function insertNote(Request $request)
    {
        $noteEntry = new Notes;

        $noteEntry->user_id = $request->user_id;
        $project = Projects::where('name', $request->projectName)->first();
        $noteEntry->project_id = $project->id;
        $noteEntry->status = $request->sliderValue;
        $noteEntry->note = $request->note;
        $noteEntry->save();
    }

    public function formynotes()
    {
        $jsonString = DB::table('notes')
            ->join('projects', 'projects.id', '=', 'notes.project_id')
            ->join('users', 'users.id', '=', 'notes.user_id')
            ->join('persons', 'users.id', '=', 'persons.user_id')
            ->join('departments', 'departments.id', '=', 'persons.department')
            ->select('persons.lastname','persons.firstname', 'departments.name as department','notes.note', 'projects.name as project', 'notes.status','notes.created_at' )
            ->orderBy('notes.created_at', 'desc')
         
            ->get();

        

     

        return Inertia::render('Project/ProjectNotes', ['data' => $jsonString ]);
    }
}
