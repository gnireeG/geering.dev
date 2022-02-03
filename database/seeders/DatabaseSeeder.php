<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Linklist;
use App\Models\User;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        User::create([
            'name' => 'Joel Geering',
            'email' => 'joel@geering.dev',
            'email_verified_at' => now(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),
        ]);
        Linklist::create(['name' => 'Github', 'url' => 'https://github.com', 'description' => 'Github, code hosting und so']);
        Linklist::create(['name' => 'YouTube', 'url' => 'https://youtube.com', 'description' => 'Viu cooli videos vo unnötigem Zügs']);
        Linklist::create(['name' => 'Netflix', 'url' => 'https://netflix.com', 'description' => 'Ganz tolli Serie und Fiume']);
        Linklist::create(['name' => 'Disney+', 'url' => 'https://disneyplus.com', 'description' => 'Glich wie Netflix eifach vo Disney']);
    }
}
