<?php

namespace App\Library;

use App\Library\User as MyUser;
use App\Woof as MyComment;

class Comment{

    public function all($woof_id, $user_id){
        
        $user = new MyUser();
        $comments =  MyComment::where('woof_id', $woof_id)->where('type', 'comment')->orderBy('created_at', 'DESC')->get();

        $commentList = array(); 

        foreach ($comments as $comment) {

            $arr = array(
                'id' => $comment->id,
                'text' => $comment->text,
                'created_at' => $comment->created_at,
                'updated_at' => $comment->updated_at,
                'user' => $user->all($comment->user_id),

            );

            array_push($commentList, $arr);
        }

        return $commentList;
    }
    public function counts($id){
        $comment = MyComment::where('woof_id', $id)->where('type', 'comment')->get();
        return $comment->count();
    }

    public function guard(){
        return \Auth::Guard('api');
    }
}

