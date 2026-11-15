<?php

use Illuminate\Support\Facades\Route;

Route::get('/test', function () {
    return response()->json([
        'status' => true,
        'message' => 'Laravel API is working!',
    ]);
});

// New API for CI/CD deployment testing
Route::get('/deployment-check', function () {
    return response()->json([
        'status' => true,
        'message' => 'Laravel CI/CD deployment successful!',
        'version' => '2.0',
    ]);
});
