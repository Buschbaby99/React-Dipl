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
}
