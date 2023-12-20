<?php

namespace App\Http\Middleware;

use App\Providers\RouteServiceProvider;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckJobPosition
{
  /**
   * Handle an incoming request.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
   * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
   */
  // public function handle(Request $request, Closure $next)
  // {
  //     return $next($request);
  // }

  public function handle($request, Closure $next, $position)
  {
    // Check if the user is authenticated
    if (Auth::check()) {
      // Check if the user's job position matches the required position
      if (Auth::user()->position == 'admin' && $position !== 'admin') {
        return redirect()->intended(RouteServiceProvider::HOME);
      } elseif (Auth::user()->position == 'Cashier' && $position !== 'employee') {
        // Cashier should navigate to the branch dashboard
        return redirect()->intended(RouteServiceProvider::BRANCH);
      } else {
        return $next($request);
      }
    }
    // 

    // Redirect or handle unauthorized access
    return redirect()->route('unauthorized'); // You can replace 'unauthorized' with your desired route or action
  }

}
