<?php

use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('index');
});

Route::get('{ReactRoute}', function(){
    return view('index');
})->where('ReactRoute','.*');