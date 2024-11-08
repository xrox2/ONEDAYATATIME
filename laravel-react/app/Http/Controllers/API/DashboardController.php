<?php
// app/Http/Controllers/API/DashboardController.php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Event;
use App\Models\Task;
use App\Models\Announcement;
use Carbon\Carbon;

class DashboardController extends Controller
{
    public function getDashboardData(Request $request)
    {
        $familyId = $request->user()->currentFamily()->id;
        $today = Carbon::today();

        // Get upcoming events
        $upcomingEvents = Event::where('family_id', $familyId)
            ->where('start_time', '>=', $today)
            ->orderBy('start_time')
            ->take(5)
            ->get();

        // Get pending tasks
        $pendingTasks = Task::where('family_id', $familyId)
            ->where('status', '!=', 'completed')
            ->orderBy('due_date')
            ->take(5)
            ->get();

        // Get weather data (mock data for now)
        $weatherData = [
            'temperature' => 72,
            'condition' => 'sunny',
            'forecast' => [
                ['day' => 'Tomorrow', 'temp' => 75, 'condition' => 'partly_cloudy'],
                ['day' => 'Sunday', 'temp' => 68, 'condition' => 'rainy'],
            ]
        ];

        // Get family announcements
        $announcements = Announcement::where('family_id', $familyId)
            ->orderBy('created_at', 'desc')
            ->take(3)
            ->get();

        return response()->json([
            'upcomingEvents' => $upcomingEvents,
            'pendingTasks' => $pendingTasks,
            'weather' => $weatherData,
            'announcements' => $announcements,
        ]);
    }
}
