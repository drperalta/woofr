<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Woof;
use App\Library\User as MyUser;

class WoofController extends Controller
{   
    protected function selected($woof_id){
        $woof = Woof::where('id', $woof_id)->first();
        return $username;

    }
    protected function all(){

        $user = new MyUser();

        $woofs = Woof::all();
        //$arrWoof = array($woofs);
        $woofList = array();

        foreach ($woofs as $woof) {

            $arr = array(
                'id' => $woof->id,
                'user_id' => $woof->user_id,
                'text' => $woof->text,
                'user' => $user->all($woof->user_id)
            );

            array_push($woofList, $arr);
        }

        return $woofList;
    }
}