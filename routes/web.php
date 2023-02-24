<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('AdminHome', [\App\Http\Controllers\AdminController::class, 'formyadmin'])->middleware(['auth', 'verified', 'isAdmin'])->name('AdminHome');
Route::get('ProjectHome', [\App\Http\Controllers\ProjectController::class, 'formyprojects'])->middleware(['auth', 'verified', 'isManager'])->name('ProjectHome');

Route::get('/test', 'DataController@test');


Route::get('/', function () {
    return Inertia::render('Login/LoginPage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/loginPage', function () {
    return Inertia::render('LoginPage');
});

Route::get('ProjectUpdatePage', function () {
    return Inertia::render('Project/ProjectUpdatePage');
});

Route::get('ProjectInsertPage', function () {
    return Inertia::render('Project/ProjectInsertPage');
});

Route::get('AdminInsertPage', function () {
    return Inertia::render('Admin/AdminInsertPage');
});

Route::get('AdminUpdatePage', function () {
    return Inertia::render('Admin/AdminUpdatePage');
});


Route::get('/NewsPage', function () {
    return Inertia::render('NewsPage');
})->middleware(['auth', 'verified'])->name('NewsPage');


Route::get('/Scheduler', function () {
    return Inertia::render('Scheduler');
})->middleware(['auth', 'verified'])->name('Scheduler');

Route::get('/projects_list', function () {
    return Inertia::render('projects_list');
})->middleware(['auth', 'verified', 'isUser'])->name('projects_list');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
