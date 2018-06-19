<?php

namespace App\Http\Middleware;

use Closure;

class AdminRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $admin_email = $request->email;
        $admin_password = $request->password;

        if($admin_email == "admin@admin.ru" && $admin_password == "admin"){
            return redirect('home');
        }
        
        else{
            return redirect('/');
        }

        // return $next($request);
    }
}
