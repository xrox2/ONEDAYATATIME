<?php


use App\Http\Controllers\API\FamilyController;
use App\Http\Controllers\API\EventController;
use App\Http\Controllers\API\TaskController;
use App\Http\Controllers\API\ResourceController;
use App\Http\Controllers\API\DashboardController;
use Illuminate\Support\Facades\Route;



Route::get('/dashboard', [DashboardController::class, 'getDashboardData'])
    ->middleware('auth:sanctum');

Route::middleware('auth:sanctum')->group(function () {
    // Family routes
    Route::apiResource('families', FamilyController::class);
    Route::post('families/{family}/members', [FamilyController::class, 'addMember']);
    Route::delete('families/{family}/members/{user}', [FamilyController::class, 'removeMember']);

    // Events routes
    Route::apiResource('families.events', EventController::class);

    // Tasks routes
    Route::apiResource('families.tasks', TaskController::class);
    Route::patch('families/{family}/tasks/{task}/status', [TaskController::class, 'updateStatus']);

    // Resources routes
    Route::apiResource('families.resources', ResourceController::class);
    Route::post('families/{family}/resources/upload', [ResourceController::class, 'upload']);
});
