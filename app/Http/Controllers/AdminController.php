<?php

namespace App\Http\Controllers;

use App\Models\Departments;
use App\Models\User;
use App\Models\Persons;
use App\Models\Personaddress;
use App\Models\Staffing;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class AdminController extends Controller
{

    public function formyadmin()
    {

        $users = User::all();
        $encode[] = json_encode($users);


        return Inertia::render('Admin/AdminHome', $encode);
    }

    public function insertUser(Request $request)
    {
        $user = new User;
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $mypassword = $request->input('password');
        $user->role = $request->input('role');
        $user->password = password_hash($mypassword, PASSWORD_BCRYPT);
        $user->save();

        $personaddress = new Personaddress;

        $personaddress->ZIP = $request->input('zip');
        $personaddress->country = $request->input('country');
        $personaddress->city = $request->input('city');
        $personaddress->street = $request->input('street');
        $personaddress->save();

        $persons = new Persons;
        $persons->firstname = $request->input('firstname');
        $persons->lastname = $request->input('lastname');
        $department = Departments::where('name', $request->input('department'))->first();
        $newid = $department->id;
        $persons->department = $newid;
        $persons->TelNr1 = $request->input('TelNr1');
        $persons->TelNr2 = $request->input('TelNr2');
        $persons->personAddress_id = $personaddress->id;
        $persons->user_id = $user->id;
        $persons->save();
    }


    public function deleteUser(Request $request)
    {
        try {
            $id = $request->id;

            $user = User::where('id', $id)->first();
            $userId = $user->id;
            $persons = Persons::where('user_id', $userId)->first();
            $personAddress_id = $persons->personAddress_id;
            $address = Personaddress::where('id', $personAddress_id)->first();

            $staffing = Staffing::where('person_Id', $persons->id);
            $staffing->delete();

            $persons->delete();
            $user->delete();
            $address->delete();
        } catch (\Exception $e) {
            Log::error('Fehler beim Löschen des Benutzers: ' . $e->getMessage());
        }
    }


    public function editUser(Request $request)
    {
        $id = $request->id;
        $user = User::where('id', $id)->first();
        $userId = $user->id;
        $persons = Persons::where('user_id', $userId)->first();

        $personAddress_id = $persons->personAddress_id;
        $address = Personaddress::where('id', $personAddress_id)->first();

        $roleName = DB::table('users')
            ->select('name')
            ->orderBy('name')
            ->get();
        $departments = DB::table('departments')
            ->select('name')
            ->orderBy('name')
            ->get();

        return response()->json([
            'user' => $user,
            'persons' => $persons,
            'address' => $address,
            'roleName' => $roleName,
            'departments' => $departments
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
        $person->firstname = $request->firstname;
        $person->lastname = $request->lastname;
        $department = Departments::where('name', $request->input('department'))->first();
        $newid = $department->id;
        $person->department = $newid;
        $person->TelNr1 = $request->TelNr1;
        $person->TelNr2 = $request->TelNr2;
        $person->rank = $request->rank;
        $person->save();

        $personAddress = Personaddress::where('id', $request->personAddress_id)->first();

        $personAddress->zip = $request->zip;
        $personAddress->country = $request->country;
        $personAddress->city = $request->city;
        $personAddress->street = $request->street;
        $personAddress->save();
    }

    public function showInsertUser()
    {


        $departments = DB::table('departments')
            ->select('name')
            ->orderBy('name')
            ->get();

        return Inertia::render('Admin/AdminInsertPage', array('department' => $departments));
    }


    public function showUpdateUser()
    {


        $departments = DB::table('departments')
            ->select('name')
            ->orderBy('name')
            ->get();

        return Inertia::render('Admin/AdminUpdatePage', array('department' => $departments));
    }
}
