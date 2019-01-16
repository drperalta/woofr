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
    protected function description(){
        
    }
    protected function primary(){
        
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
