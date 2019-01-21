<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Woof;
use App\User;
use App\Comment;
use App\Library\Comment as MyComment;
use App\Library\User as MyUser;
use App\Library\Woof as MyWoof;
use App\Library\ReWoof as MyRewoof;

class WoofController extends Controller
{
    protected function send_woof(Request $request){

        $user = $this->guard()->user();

        Woof::create([
            'user_id' => $user->id,
            'woof_id' => '',
            'text' => $request->Woof,
            'type' => $request->type
        ]);
    }
    protected function send_rewoof(Request $request){

        $user = $this->guard()->user();

        if($request->comment == null){
            Woof::create([
                'user_id' => $user->id,
                'woof_id' => $request->woof_id,
                'text' => '',
                'type' => $request->type
            ]);
        }else{
            Woof::create([
                'user_id' => $user->id,
                'woof_id' => $request->woof_id,
                'text' => $request->comment,
                'type' => $request->type
            ]);
        }
    }
    protected function send_comment(Request $request){

        $user = $this->guard()->user();

        Woof::create([
            'user_id' => $user->id,
            'woof_id' => $request->woof_id,
            'text' => $request->reply,
            'type' => $request->type
        ]);

    }

    protected function delete(Request $request){
        $woof = Woof::where('id', $request->id);
        $woof->delete();

        return response()->json([
            'message' => 'Successfully Deleted!'
        ], 201);

    }
    protected function selected($woof_id){

        $user = new MyUser();
        $rewoof = new MyWoof();
        $comments = new MyComment();

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
            'user' => $user->all($woof->user_id),
            'type' => $woof->type,
            'rewoof' => $rewoof->get_rewoof($woof->woof_id),
            'comments' => $comments->all($woof->id,$woof->user_id)
        );
        return $arr;

    }
    protected function all(){

        $user = new MyUser();
        $rewoof = new MyWoof();
        $rewoof_counts = new MyRewoof();

        $comments = new MyComment();

        $woofs = Woof::where('type', 'woof')->orWhere('type', 'rewoof')->orderBy('created_at', 'DESC')->whereNull('deleted_at')->get();

        //$arrWoof = array($woofs);

        $woofList = array();

        foreach ($woofs as $woof) {

            $arr = array(
                'id' => $woof->id,
                'user_id' => $woof->user_id,
                'text' => $woof->text,
                'type' => $woof->type,
                'comment_counts' => $comments->counts($woof->id),
                'rewoof_counts' => $rewoof_counts->counts($woof->id),
                // 'like_counts' =>
                'created_at' => $woof->created_at,
                'updated_at' => $woof->updated_at,
                'user' => $user->all($woof->user_id),
                'rewoof' => $rewoof->get_rewoof($woof->woof_id),

            );

            array_push($woofList, $arr);
        }

        return $woofList;
    }
    protected function my_woofs($id){

        $user = User::where('id', $id)->first();
        $comments = new MyComment();

        $woofs = Woof::where('user_id',$id)->where('type', 'woof')->orWhere('type', 'rewoof')->orderBy('created_at', 'DESC')->whereNull('deleted_at')->get();

        //$arrWoof = array($woofs);
        $woofList = array();

        foreach ($woofs as $woof) {

            $arr = array(
                'id' => $woof->id,
                'user_id' => $woof->user_id,
                'text' => $woof->text,
                'comment_counts' => $comments->counts($woof->id),
                // 'rewoof_counts' =>
                // 'like_counts' =>
                'created_at' => $woof->created_at,
                'updated_at' => $woof->updated_at,
                'user' => $user,
            );

            array_push($woofList, $arr);
        }

        return $woofList;
    }
    protected function my_comments($id){

        $user = User::where('id', $id)->first();
        $comments = new MyComment();

        $woofs = Woof::where('user_id',$id)->where('type', 'comment')->orderBy('created_at', 'DESC')->whereNull('deleted_at')->get();

        //$arrWoof = array($woofs);
        $woofList = array();

        foreach ($woofs as $woof) {

            $arr = array(
                'id' => $woof->id,
                'user_id' => $woof->user_id,
                'text' => $woof->text,
                'comment_counts' => $comments->counts($woof->id),
                // 'rewoof_counts' =>
                // 'like_counts' =>
                'created_at' => $woof->created_at,
                'updated_at' => $woof->updated_at,
                'user' => $user,
            );

            array_push($woofList, $arr);
        }

        return $woofList;
    }
    public function guard(){
        return \Auth::Guard('api');
    }
}
