<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder {

    public function run()
    {
        // $this->call('UserTableSeeder');

        $this->call('ArticleTableSeeder');

        $this->command->info('Таблица пользователей заполнена данными!');
    }

}

class UserTableSeeder extends Seeder {

    public function run()
    {
        DB::table('users')->delete();

        DB::table('users')->insert([
            'name' => str_random(6),
            'email' => strtolower(str_random(6)).'@gmail.com',
            'password' => bcrypt('test@123')
        ]);
    }
}

class ArticleTableSeeder extends Seeder {

    public function run()
    {
        DB::table('articles')->delete();

        DB::table('articles')->insert([
            'title' => str_random(10),
            'body' => str_random(10),
        ]);
    }

}

