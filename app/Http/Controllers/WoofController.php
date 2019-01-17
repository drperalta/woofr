<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Woof;
use App\Library\User as MyUser;

class WoofController extends Controller
{      
    protected function send(Request $request){

        $user = $this->guard()->user();
        
        $woof = Woof::create([
            'user_id' => $user->id,
            'text' => $request->Woof
        ]);
        
        return response()->json([
            'message' => 'Woof posted!'
        ], 201);

    }
    protected function selected($woof_id){
        $user = new MyUser();

        $woof = Woof::where('id', $woof_id)->first();
        
        $arr = array(
            'id' => $woof->id,
            'user_id' => $woof->user_id,
            'text' => $woof->text,
            // 'comment_counts' => 
            // 'rewoof_counts' =>
            // 'like_counts' =>
            'created_at' => $woof->created_at,
            'updated_at' => $woof->updated_at,
            'user' => $user->all($woof->user_id)
        );
        return $arr;

    }
    protected function all(){

        $user = new MyUser();

        $woofs = Woof::orderBy('created_at', 'DESC')->get();
        //$arrWoof = array($woofs);
        $woofList = array();

        foreach ($woofs as $woof) {

            $arr = array(
                'id' => $woof->id,
                'user_id' => $woof->user_id,
                'text' => $woof->text,
                'created_at' => $woof->created_at,
                'updated_at' => $woof->updated_at,
                'user' => $user->all($woof->user_id)
            );

            array_push($woofList, $arr);
        }

        return $woofList;
    }
    public function guard(){
        return \Auth::Guard('api');
    }
}