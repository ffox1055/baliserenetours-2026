<?php

namespace App\Http\Controllers;

use App\Models\AirportTransferPricing;
use Inertia\Inertia;
use Inertia\Response;

class AirportTransferController extends Controller
{
    public function __invoke(): Response
    {
        return Inertia::render('airport-transfer/Index', [
            'pricingPlans' => AirportTransferPricing::query()
                ->active()
                ->ordered()
                ->get(),
        ]);
    }
}
