<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Comment;

class CommentController extends Controller
{
    protected function send(Request $request){

        $user = $this->guard()->user();

        $comment = Comment::create([
            'user_id' => $user->id,
            'woof_id' => $request->woof_id,
            'text' => $request->reply
        ]);
        
        return response()->json([
            'message' => 'Succefully Replied!'
        ], 201);
    }
    public function guard(){
        return \Auth::Guard('api');
    }
}
