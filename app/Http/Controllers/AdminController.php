<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Models\Persons;
use App\Models\Personaddress;
use App\Models\Projects;
use Faker\Provider\ar_EG\Person;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\DB;
use SebastianBergmann\CodeCoverage\Report\Xml\Project;

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
    public function formyprojects()
    {
        $projects = Projects::all();
        $encode[]=json_encode($projects);

        return Inertia::render('myprojects', $encode);
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
        $user->role = $request->input('role');
        $user->password = password_hash($mypassword, PASSWORD_BCRYPT);
        $user->save();

    

        $personaddress = new Personaddress;

        $personaddress->ZIP= $request->input('zip');
        $personaddress->country= $request->input('country');
        $personaddress->city= $request->input('city');
        $personaddress->street= $request->input('street');
        $personaddress->save();





        $persons = new Persons;
        $persons->firstname = $request->input('firstname');
        $persons->lastname = $request->input('lastname');
        $persons->department = $request->input('department');
        $persons->TelNr1 = $request->input('TelNr1');
        $persons->TelNr2 = $request->input('TelNr2');
        $persons->personAddress_id = $personaddress->id;
        $persons->user_id = $user->id;
        $persons->save();


    }

    public function deleteUser(Request $request)
    {
        $id = $request->id;
        $user = User::where('id', $id)->first();
        $userId = $user->id;
        $persons = Persons::where('user_id', $userId)->first();
        $persons->delete();
        $user->delete();
    }
    
    public function deleteProject(Request $request)
    {
        $id = $request->id;
        $project = Projects::where('id', $id)->first();
        $project->delete();
    }

    


    public function editUser(Request $request)
    {
        $id = $request->id;
        $user = User::where('id', $id)->first();
        $userId = $user->id;
        $persons = Persons::where('user_id', $userId)->first();
        
        $personAddress_id= $persons->personAddress_id;
        $address = Personaddress::where('id', $personAddress_id)->first();
       

        return response()->json([
            'user' => $user,
            'persons' => $persons,
            'address' => $address,
        ]);
    }

    public function updateUser(Request $request)
    {
       
        $user = User::where('id', $request->id)->first();
       
        $user->name = $request->name;
        $user->email = $request->email;
        $user->role = $request->role;
        $user->save();


        $person = Persons::where('user_id', $request->id)->first();
        $person->firstname =$request->firstname;
        $person->lastname =$request->lastname;
       // $person->department_id =$request->department_id;
        $person->TelNr1= $request->TelNr1;
        $person->TelNr2= $request->TelNr2;
        $person->rank =$request->rank;
        $person->save();

        
        $personAddress = Personaddress::where('id', $request->personAddress_id)->first();

        $personAddress->zip =$request->zip;
        $personAddress->country =$request->country;
        $personAddress->city =$request->city;
        $personAddress->street= $request->street;
        $personAddress->save();


    
    }
}

