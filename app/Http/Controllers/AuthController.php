<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\User;
use App\Mail\VerifyEmail;

class AuthController extends Controller
{
    public function signup(Request $request)
    {
        //Validate the Data
        $request->validate([
            'fullname' => 'required|string',
            'email' => 'required|email|unique:users',
            'username' => 'required|unique:users',
            'password' => 'required|min:6|same:confirm_password', //|regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/|same:confirm_password
            'confirm_password' => 'sometimes'
        ]);

        //Register the passed Data
        $user = User::create([
            'fullname' => $request->fullname,
            'email' => $request->email,
            'username' => $request->username,
            'password' => bcrypt($request['password']),
            'activation_token' => str_random(60)
        ]);
        
        \Mail::to($user['email'])->send(new VerifyEmail($user));
        //return $this->respondWithToken($user);

        return response()->json([
            'message' => 'Successfully created User!'
        ], 201);
    }

    public function login(Request $request)
    {   
        $request->validate([
            'username' => 'required|string',
            'password' => 'required|string',
            'remember_me' => 'boolean'
        ]);

        $credentials = request(['username', 'password']);

        if(Auth::validate($credentials)){

            $credentials['is_active'] = 1;
            $credentials['deleted_at'] = null;

            //Will check if Email is Verified
            if($token = auth()->attempt($credentials)){

                $user = $request->user();
                $time = 1;

                if ($request->remember_me){
                    $time = 24;
                }

                return $this->respondWithToken($token, $time);

            }else{ // if you didn't confirm your email yet
                return response()->json([
                    'errors' => [ 'message' => ['This account is not verified'] ]
                ], 401);
            }

        }else{ 
            //if username and password is not correct
            return response()->json([
                'errors' => [ 'message' => ['Invalid username or password'] ]
            ], 401);
        }

    }

    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    protected function respondWithToken($token, $add)
    {
        return response()->json([
            'access_token' => $token,
            'token_type'   => 'bearer',
            'expires_in'   => auth()->factory()->getTTL() * 60 * $add
        ]);
    }

    //This will redirect you to the page where you will need to click the verify button
    public function link($activation_token){

        return redirect('link/'.$activation_token);

    }
    //This will update your is_active to true
    public function verify_email($activation_token){

        $user = User::where('activation_token', $activation_token)->first();

        if (!$user) {
            return response()->json([
                'errors' => [ 'message' => ['This activation token is invalid.'] ]
            ], 404);
        }

        $user->is_active = true;
        $user->activation_token = '';
        $user->save();

        return response()->json([
            'message' => 'Successfully verify your Email'
        ], 200);
    }
    
    public function me()
    {
        return response()->json(auth()->user());
    }
}
