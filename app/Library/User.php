<?php

namespace App\Library;

use App\User as MyUser;

class User{

    public function fullname($id){
        
        $user = MyUser::where('id', $id)->first();
        return $user->fullname;

    }   
    public function username($id){
        
        $user = MyUser::where('id', $id)->first();
        return $user->username;
        
    } 
    public function all($id){
        return MyUser::where('id', $id)->first();
    }
    public function guard(){
        return \Auth::Guard('api');
    }
}

