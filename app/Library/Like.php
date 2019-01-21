<?php

namespace App\Library;

use App\Library\User as MyUser;
use App\Like as MyLike;

class Like{

    public function counts($id){
        $like = MyLike::where('woof_id', $id)->get();
        return $like->count();
    }
    public function check($woof_id, $user_id){
        // $like = MyLike::where('woof_id', $woof_id)->where('user_id', $user_id)->first();
        if (MyLike::where('woof_id', $woof_id)->where('user_id', $user_id)->count() > 0) {
            return true;
         }else{
             return false;
         }
    }
    public function guard(){
        return \Auth::Guard('api');
    }
}

