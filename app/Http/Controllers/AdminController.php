<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;


class AdminController extends Controller
{
    public function index()
    {
        $users = User::all();
        return view('admin', ['users' => $users]);
    }

    public function formyadmin()
    {
        $users = User::all();
        $encode[]=json_encode($users);

        return Inertia::render('myadmin', $encode);
    }

    public function insertData(Request $request)
    {
        $user = new User;
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->role = $request->input('role');
        $user->save();

        return response()->json(['message' => 'Data inserted successfully']);
    }
    public function ReceiveIt(Request $request){
        $validatedData = $request->validate([
            'id' => 'nullable',
            'name' => 'nullable',
            'email' => 'nullable',
            'email_verified_at' => 'nullable',
            'password' => 'nullable',
            'remember_token' => 'nullable',
            'created_at' => 'nullable',
            'updated_at' => 'nullable',
            'role' => 'nullable'
        ]);

        var_dump($validatedData);

        return json_encode($validatedData);
    }

}
