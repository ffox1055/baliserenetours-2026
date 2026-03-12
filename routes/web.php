<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home/Index');
});

Route::get('/airport-transfer', function () {
    return Inertia::render('airport-transfer/Index');
});

Route::get('/daily-rental', function () {
    return Inertia::render('daily-rental/Index');
});

Route::get('/contact', function () {
    return Inertia::render('contact/Index');
});

Route::get('/book-now', function () {
    return Inertia::render('book-now/Index');
});
