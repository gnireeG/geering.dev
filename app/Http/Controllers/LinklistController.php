<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Linklist;

class LinklistController extends Controller
{
    public function list(){
        return json_encode(Linklist::get());
    }
    public function store(Request $request){
        //return $request;
        $data = $request->validate([
            'name' => 'required|string',
            'url' => 'required|string',
            'description' => 'string|nullable'
        ]);
        Linklist::create([
            'name' => $data['name'],
            'url' => $data['url'],
            'description' => $data['description'],
        ]);
        return Linklist::get();
    }
}
