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
// Route::middleware('guest')->group(function () {
//   Route::get('/', function () {
//     return Inertia::render('auth/Login');
//   });
// });

Route::get('/', function () {
  return Inertia::render('auth/Login', [
    'canResetPassword' => Route::has('password.request'),
    'status' => session('status'),
  ]);
});

Route::get('/login', function () {
  return Inertia::render('auth/Login');
});

Route::middleware(['auth', 'verified', 'checkPosition:admin'])->group(function () {
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

Route::middleware(['auth', 'verified', 'checkPosition:employee'])->group(function () {
  Route::group(['prefix' => 'branch'], function () {
    Route::get('dashboard', function () {
      return Inertia::render('branch_dashboard/page');
    })->name('branch.dashboard');

    Route::get('analytics', function () {
      return Inertia::render('branch_analytics/page');
    })->name('branch.analytics');

    Route::get('raw_materials', function () {
      return Inertia::render('branch_raw_materials/page');
    })->name('branch.raw_materials');

    Route::group(['prefix' => 'selecta'], function () {
      Route::get('stock', function () {
        return Inertia::render('branch_selecta/stock/page');
      })->name('branch.selecta.stock');
      Route::get('double_check', function () {
        return Inertia::render('branch_selecta/double_check/page');
      })->name('branch.selecta.double_check');
      Route::get('sales_report', function () {
        return Inertia::render('branch_selecta/sales_report/page');
      })->name('branch.selecta.sales_report');
    });



    Route::group(['prefix' => 'production'], function () {

      Route::get('create_new_production', function () {
        return Inertia::render('branch_production/create_new_production/page');
      })->name('branch.new.production');

      Route::get('bakers_report', function () {
        return Inertia::render('branch_production/bakers_report/page');
      })->name('branch.bakers.report');

      Route::get('bread_report', function () {
        return Inertia::render('branch_production/bread_report/page');
      })->name('branch.bread.report');

      Route::get('sales_report', function () {
        return Inertia::render('branch_production/sales_report/page');
      })->name('branch.sales.report');

      Route::get('history_report', function () {
        return Inertia::render('branch_production/history_report/page');
      })->name('branch.history.report');

    });

    Route::get('expenses', function () {
      return Inertia::render('branch_expenses/page');
    })->name('branch.expenses');

    Route::get('accounts', function () {
      return Inertia::render('branch_accounts/page');
    })->name('branch.accounts');

    Route::get('attendance', function () {
      return Inertia::render('branch_attendance/page');
    })->name('branch.attendance');
  });
});


Route::middleware('auth')->group(function () {
  Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
  Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
  Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
