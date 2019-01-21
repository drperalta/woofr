<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Comment extends Model
{   
    use SoftDeletes;

    protected $fillable = [
        'user_id', 
        'woof_id',
        'text'
    ];

    protected $hidden = [
        'deleted_at'
    ];
}
