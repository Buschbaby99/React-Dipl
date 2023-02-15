<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Models\Persons;
use Faker\Provider\ar_EG\Person;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\DB;


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
        $user->password = '12345678';
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

        return json_encode($validatedData);
    }

    public function myRegister(Request $request)
    {
        $user = new User;
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $mypassword = $request->input('password');
        $user->password = password_hash($mypassword, PASSWORD_BCRYPT);
        $user->save();

        $persons = new Persons;
        $persons->firstname = $request->input('firstname');
        $persons->lastname = $request->input('lastname');
        $persons->department = $request->input('department');
        $persons->TelNr1 = $request->input('TelNr1');
        $persons->TelNr2 = $request->input('TelNr2');
        $persons->rank = $request->input('rank');

        $persons->user_FK = $user->id;
        $persons->save();
    }

    public function deleteUser(Request $request)
    {
        $id = $request->id;
        $user = User::where('id', $id)->first();
        $userId = $user->id;
        $persons = Persons::where('user_FK', $userId)->first();
        $persons->delete();
        $user->delete();
    }

    public function editUser(Request $request)
    {
        $id = $request->id;
        $user = User::where('id', $id)->first();
        $userId = $user->id;
        $persons = Persons::where('user_FK', $userId)->first();
        
        return response()->json([
            'user' => $user,
            'persons' => $persons
        ]);
    }

    public function updateUser(Request $request)
    {
        $id = $request->id;
        $user = User::where('id', $id)->first();
       
        $user->name = $request->name;
        $user->email = $request->email;
        $user->role = $request->role;
        $user->save();

        $person = Persons::where('user_FK', $id)->first();
        $person->address = $request->address;
        $person->phone = $request->phone;
        $person->save();
    }
}

