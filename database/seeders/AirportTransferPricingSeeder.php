<?php

namespace Database\Seeders;

use App\Models\AirportTransferPricing;
use Illuminate\Database\Seeder;

class AirportTransferPricingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        AirportTransferPricing::updateOrCreate(
            ['title' => 'Standard Airport Transfer'],
            [
                'description' => 'Reliable transportation from/to Ngurah Rai Airport with professional driver',
                'price' => 25,
                'duration' => '45-60 minutes',
                'includes' => ['Professional driver', 'Air-conditioned vehicle', 'Flight monitoring', '24/7 support'],
                'is_popular' => false,
                'is_active' => true,
                'sort_order' => 1,
            ],
        );

        AirportTransferPricing::updateOrCreate(
            ['title' => 'VIP Airport Transfer'],
            [
                'description' => 'Premium service with luxury vehicle and personalized assistance',
                'price' => 45,
                'duration' => '45-60 minutes',
                'includes' => ['Professional driver', 'Luxury vehicle', 'Personal assistant', 'Welcome drink', 'Priority service'],
                'is_popular' => true,
                'is_active' => true,
                'sort_order' => 2,
            ],
        );

        AirportTransferPricing::updateOrCreate(
            ['title' => 'Executive Group Transfer'],
            [
                'description' => 'Spacious vehicle for families or groups, with extra luggage space and meet & greet service',
                'price' => 65,
                'duration' => '45-60 minutes',
                'includes' => ['Professional driver', 'Spacious SUV/minivan', 'Extra luggage space', 'Meet & greet', 'Complimentary WiFi', 'Child seat available'],
                'is_popular' => false,
                'is_active' => true,
                'sort_order' => 3,
            ],
        );
    }
}
