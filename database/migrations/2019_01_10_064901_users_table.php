<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('fullname');
            $table->string('email')->unique();
            $table->string('username')->unique();
            $table->string('password');
            $table->string('description')->nullable();
            $table->string('country')->nullable();
            $table->string('website')->nullable();
            $table->string('birthdate')->nullable();
            $table->integer('role')->default('2');
            $table->boolean('is_active')->default(false);
            $table->string('activation_token');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
