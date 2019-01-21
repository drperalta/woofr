<?php

namespace App\Library;

use App\Woof as MyWoof;
use App\Library\User as MyUser;

class Woof{

    public function get_rewoof($woof_id){
        
        if($woof_id != null){
            $user = new MyUser();
        
            $woof = MyWoof::where('id', $woof_id)->first();
            
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
                'type' => $woof->type
            );
            return $arr;
        }
    }
    public function guard(){
        return \Auth::Guard('api');
    }
}

