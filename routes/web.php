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
Route::middleware('guest')->group(function () {
  Route::get('/', function () {
    return Inertia::render('auth/Login');
  });

  return Inertia::render('auth/Login', [
    'canResetPassword' => Route::has('password.request'),
    'status' => session('status'),
  ]);
});



Route::middleware(['auth', 'verified'])->group(function () {
  Route::group(['prefix' => 'administrator'], function () {

    Route::get('dashboard', function () {
      return Inertia::render('dashboard/page');
    })->name('administrator.dashboard');

    Route::group(['prefix' => 'controls'], function () {

      Route::get('breads', function () {
        return Inertia::render('controls/breads/page');
      })->name('controls.bread');

      Route::get('raw_materials', function () {
        return Inertia::render('controls/raw_materials/page');
      })->name('controls.raw_materials');

      Route::get('recipes', function () {
        return Inertia::render('controls/recipes/page');
      })->name('controls.recipes');

      Route::get('selecta', function () {
        return Inertia::render('controls/selecta/page');
      })->name('controls.selecta');


    });

    Route::group(['prefix' => 'branches'], function () {

      Route::get('/', function () {
        return Inertia::render('branches/page');
      })->name('branches');

      Route::group(['prefix' => '{id}'], function () {

        Route::get('analytics', function () {
          return Inertia::render('branches/analytics/page');
        })->name('branches.analytics');

        Route::get('raw_materials', function () {
          return Inertia::render('branches/raw_materials/page');
        })->name('branches.raw_materials');

        Route::get('selecta', function () {
          return Inertia::render('branches/selecta/page');
        })->name('branches.selecta');

        Route::get('production', function () {
          return Inertia::render('branches/production/page');
        })->name('branches.production');

        Route::get('expenses', function () {
          return Inertia::render('branches/expenses/page');
        })->name('branches.expenses');

        Route::get('accounts', function () {
          return Inertia::render('branches/accounts/page');
        })->name('branches.accounts');

        Route::get('attendance', function () {
          return Inertia::render('branches/attendance/page');
        })->name('branches.attendance');

      });

    });


    Route::get('accounts', function () {
      return Inertia::render('accounts/page');
    })->name('administrator.accounts');

    Route::get('settings', function () {
      return Inertia::render('settings/page');
    })->name('administrator.settings');

  });
});


// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
  Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
  Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
  Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
