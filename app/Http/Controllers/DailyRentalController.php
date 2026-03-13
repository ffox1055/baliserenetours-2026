<?php

namespace App\Http\Controllers;

use App\Models\RentalPackage;
use App\Models\Vehicle;
use Inertia\Inertia;
use Inertia\Response;

class DailyRentalController extends Controller
{
    public function __invoke(): Response
    {
        return Inertia::render('daily-rental/Index', [
            'vehicles' => Vehicle::query()
                ->active()
                ->ordered()
                ->get(),
            'rentalPackages' => RentalPackage::query()
                ->active()
                ->ordered()
                ->get(),
        ]);
    }
}
