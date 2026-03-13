<?php

namespace Tests\Feature;

use App\Models\AirportTransferPricing;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AirportTransferPageTest extends TestCase
{
    use RefreshDatabase;

    public function test_airport_transfer_page_returns_successful_response(): void
    {
        AirportTransferPricing::factory()->create();

        $response = $this->get('/airport-transfer');

        $response->assertStatus(200);
    }

    public function test_airport_transfer_page_includes_only_active_pricing_plans(): void
    {
        $activePlan = AirportTransferPricing::factory()->create(['is_active' => true]);
        AirportTransferPricing::factory()->inactive()->create();

        $response = $this->get('/airport-transfer');

        $response->assertInertia(fn ($page) => $page
            ->component('airport-transfer/Index')
            ->has('pricingPlans', 1)
            ->where('pricingPlans.0.id', $activePlan->id)
        );
    }

    public function test_pricing_plans_are_ordered_by_sort_order(): void
    {
        $second = AirportTransferPricing::factory()->create(['sort_order' => 2]);
        $first = AirportTransferPricing::factory()->create(['sort_order' => 1]);

        $response = $this->get('/airport-transfer');

        $response->assertInertia(fn ($page) => $page
            ->where('pricingPlans.0.id', $first->id)
            ->where('pricingPlans.1.id', $second->id)
        );
    }
}
