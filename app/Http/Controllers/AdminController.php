<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;

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
        return view('myadmin', ['users' => $users]);
    }
}
