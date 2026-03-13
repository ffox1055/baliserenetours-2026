<?php

namespace Tests\Feature;

use App\Models\RentalPackage;
use App\Models\Vehicle;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class DailyRentalPageTest extends TestCase
{
    use RefreshDatabase;

    public function test_daily_rental_page_returns_successful_response(): void
    {
        Vehicle::factory()->create();
        RentalPackage::factory()->create();

        $response = $this->get('/daily-rental');

        $response->assertStatus(200);
    }

    public function test_daily_rental_page_includes_only_active_vehicles(): void
    {
        $activeVehicle = Vehicle::factory()->create(['is_active' => true]);
        Vehicle::factory()->inactive()->create();

        $response = $this->get('/daily-rental');

        $response->assertInertia(fn ($page) => $page
            ->component('daily-rental/Index')
            ->has('vehicles', 1)
            ->where('vehicles.0.id', $activeVehicle->id)
        );
    }

    public function test_daily_rental_page_includes_only_active_rental_packages(): void
    {
        $activePackage = RentalPackage::factory()->create(['is_active' => true]);
        RentalPackage::factory()->inactive()->create();

        $response = $this->get('/daily-rental');

        $response->assertInertia(fn ($page) => $page
            ->has('rentalPackages', 1)
            ->where('rentalPackages.0.id', $activePackage->id)
        );
    }

    public function test_vehicles_are_ordered_by_sort_order(): void
    {
        $second = Vehicle::factory()->create(['sort_order' => 2]);
        $first = Vehicle::factory()->create(['sort_order' => 1]);

        $response = $this->get('/daily-rental');

        $response->assertInertia(fn ($page) => $page
            ->where('vehicles.0.id', $first->id)
            ->where('vehicles.1.id', $second->id)
        );
    }

    public function test_rental_packages_are_ordered_by_sort_order(): void
    {
        $second = RentalPackage::factory()->create(['sort_order' => 2]);
        $first = RentalPackage::factory()->create(['sort_order' => 1]);

        $response = $this->get('/daily-rental');

        $response->assertInertia(fn ($page) => $page
            ->where('rentalPackages.0.id', $first->id)
            ->where('rentalPackages.1.id', $second->id)
        );
    }
}
