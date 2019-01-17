<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {   
        $faker = Faker::create();
        DB::table('users')->insert([
            'fullname' => $faker->name,
            'username' => $faker->username,
            'email' => $faker->email,
            'password' => bcrypt('asdasd'),
            'role' => '2',
            'is_active' => true,
            'activation_token' => '',
            'created_at' => $faker->dateTime($max = 'now', $timezone = null),
            'updated_at' => $faker->dateTime($max = 'now', $timezone = null)
        ]);
    }
}
