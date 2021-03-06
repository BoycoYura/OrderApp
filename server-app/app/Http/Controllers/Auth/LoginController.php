<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/admin-panel';

    public function redirectTo(){
        return $redirectTo;
    }

    public function login(Request $request)
    {
        $this->validateLogin($request);

        if ($this->attemptLogin($request)) {
            $user = $this->guard()->user();

            return response()->json([
                'data' => $user->toArray(),
            ]);
        }

        $this->redirectTo();

        return $this->sendFailedLoginResponse($request);
    }

    public function logout(Request $request)
    {
        $user = Auth::guard('api')->user();
        $admin_email = $request->email;
        $admin_password = $request->password;

        if ($user) {
            $user->api_token = null;
            $user->name = null;
            $user->save();

            if($admin_email == "admin@admin.ru" && $admin_password == "admin"){
                return redirect('home');
            }

            else{
                return redirect('/');
            }
        }

        return response()->json([ 'data' => 'User logged out.' ], 200);
    }

    protected function sendFailedLoginResponse(Request $request)
    {
        $errors = [ 'error' => trans('auth.failed') ];

        return response()->json($errors, 422);
    }

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest', ['except' => 'logout']);
    }
}
