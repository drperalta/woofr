<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\User;
use App\Woof;
use Illuminate\Support\Facades\Hash;
use App\Library\Following as MyFollowing;
use App\Following;
use App\Like;

class UserController extends Controller
{
    protected function visited($username){

        $user = User::where('username', $username)->first();
        $woof_counts = Woof::where('user_id', $user->id)->count();
        $following = new MyFollowing();
        $following_counts = Following::where('following_id', $user->id)->count();
        $followers_counts = Following::where('user_id', $user->id)->count();
        $like_counts = Like::where('user_id', $user->id)->count();
        
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
            'woof_counts' => $woof_counts,
            'following_counts' => $following_counts,
            'follower_counts' => $followers_counts,
            'like_counts' => $like_counts,
            'following' => $following->check($this->guard()->user()->id, $user->id),
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
