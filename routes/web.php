<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LinklistController;

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

Route::get('/linklist/list', [LinklistController::class, 'list'])->middleware(['auth']);
Route::post('/linklist/store', [LinklistController::class, 'store'])->middleware(['auth']);

Route::get('/home/linklist', function(){
    return file('../public/home/index.html');
});

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__.'/auth.php';
