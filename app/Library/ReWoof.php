<?php

namespace App\Library;

use App\Woof as MyRewoof;

class ReWoof{

    public function counts($id){
        $rewoof = MyRewoof::where('woof_id', $id)->where('type', 'rewoof')->get();
        return $rewoof->count();
    }

    public function guard(){
        return \Auth::Guard('api');
    }
}

