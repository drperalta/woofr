<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Following;

class FollowingController extends Controller
{
    protected function follow(Request $request){
        Following::create([
            'user_id' => $request->user_id,
            'following_id' => $request->following_id
        ]);
    }
    protected function unfollow(Request $request){
        $unfollow = Following::where('user_id', $request->user_id)->where('following_id', $request->following_id)->first();
        $unfollow->delete();
    }
    
}
