<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{   
    protected function visited($username){
        $user = User::where('username', $username)->first();

        return response()->json([
            'id' => $user->id,
            'fullname' => $user->fullname,
            'username' => $user->username,
            'email' => $user->email,
            'description' => $user->description,
            'country' => $user->country,
            'website' => $user->website,
            'birthdate' => $user->birthdate,
            'created_at' => $user->created_at,
        ]);
    }
    protected function password(Request $request){
        
        $user = $this->guard()->user();

        if(Hash::check($request->password, $user->password)){

            $request->validate([
                'new_password' => 'required|min:6|same:confirm_new_password',
                'confirm_new_password' => 'sometimes'
            ]);
    
            $user->password = Hash::make($request->new_password);
            $user->save();
    
            return response()->json(['message' => 'Successfully Updated!']);

        }else{
            return response()->json([
                'errors' => ['password' => ['Your current password is incorrect.']]
            ], 406);   
        }
    }
    protected function description(Request $request){
        $user = $this->guard()->user();

        $user->description = $request->description;
        $user->country = $request->country;
        $user->website = $request->website;
        $user->birthdate = $request->birthdate;
        $user->save();

        return response()->json([
            'message' => 'Successfully saved changes!'
        ]);
    }
    protected function primary(Request $request){
        $user = $this->guard()->user();

        if($request->fullname != $user->fullname){
            $request->validate([
                'fullname' => 'required|string',
            ]);
        }
        if($request->email != $user->email){
            $request->validate([
                'email' => 'required|email|unique:users',
            ]);
        }
        if($request->username != $user->username){
            $request->validate([
                'username' => 'required|unique:users'
            ]);
        }

        $user->fullname = $request->fullname;
        $user->email = $request->email;
        $user->username = $request->username;
        $user->save();

        return response()->json([
            'message' => 'Successfully saved changes!'
        ],200);

    }
    protected function list(Request $request){
        return User::all();
    }
    protected function primary_onchange(Request $request){

        $user = $this->guard()->user();

        if($user->fullname != $request->fullname || $user->email != $request->email || $user->username != $request->username){
            return response()->json([
                
            ],200);
        }else{
            return response()->json([
                
            ],404);
        }
    }
    public function guard(){
        return \Auth::Guard('api');
    }
}
