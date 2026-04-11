<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// use App\Http\Controllers\AirportTransferController;
// use App\Http\Controllers\DailyRentalController;

Route::get('/', function () {
    return Inertia::render('home/Index');
});

// Temporarily disabled — only the index page is public.
// Route::get('/airport-transfer', AirportTransferController::class);
// Route::get('/daily-rental', DailyRentalController::class);
// Route::get('/contact', function () {
//     return Inertia::render('contact/Index');
// });
// Route::get('/book-now', function () {
//     return Inertia::render('book-now/Index');
// });
