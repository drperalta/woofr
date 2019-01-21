<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Woof;
use App\Like;

class LikeController extends Controller
{
    protected function like(Request $request){
        $user = $this->guard()->user();

        Like::create([
            'user_id' => $request->user_id,
            'woof_id' => $request->woof_id
        ]);

    }
    protected function dislike(Request $request){
        
        $user = $this->guard()->user();

        $like = Like::where('user_id', $request->user_id)->where('woof_id', $request->woof_id)->first();
        $like->delete();

        return response()->json([
            'message' => 'Successfully Deleted!'
        ], 201);
    }
    public function guard(){
        return \Auth::Guard('api');
    }
}
