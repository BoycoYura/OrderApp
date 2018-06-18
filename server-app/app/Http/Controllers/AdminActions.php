<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminActions extends Controller
{
    public function index(Request $request)
    {
        $admin_email = $request->email;
        $admin_password = $request->password;

        if($admin_email == "admin@admin.ru" && $admin_password == "admin"){
            return redirect('home');
        }
        else{
            return redirect('/');
        }

        
    }
}
