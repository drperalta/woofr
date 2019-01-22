<?php

namespace App\Library;

use App\Following as MyFollowing;

class Following{

    public function check($user_id, $following_id){

        if(MyFollowing::where('user_id', $user_id)->where('following_id', $following_id)->count() > 0){
            return true;
        }else {
            return false;
        }
        
    }

    public function guard(){
        return \Auth::Guard('api');
    }
}

