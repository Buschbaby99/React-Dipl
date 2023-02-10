<?php

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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::get('/api/user', function () {
    return auth()->user();
});

Route::get('/myadmin', [\App\Http\Controllers\AdminController::class, 'formyadmin'])->middleware(['auth', 'verified', 'isAdmin'])->name('myadmin');

Route::get('/welcome', function () {
    return Inertia::render('Welcome');
});

Route::get('/news', function () {
    return Inertia::render('news');
})->middleware(['auth', 'verified'])->name('news');

Route::get('/myprojects', function () {
    return Inertia::render('myprojects');
})->middleware(['auth', 'verified', 'isManager'])->name('myprojects');
/*
Route::get('/myadmin', function () {
   
})->middleware(['auth', 'verified', 'isAdmin'])->name('myadmin');
*/
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/projects_list', function () {
    return Inertia::render('projects_list');
})->middleware(['auth', 'verified', 'isUser'])->name('projects_list');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
