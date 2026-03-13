<?php

namespace Database\Seeders;

use App\Models\Vehicle;
use Illuminate\Database\Seeder;

class VehicleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $vehicles = [
            ['name' => 'Toyota Avanza', 'price' => 30, 'capacity' => 7, 'transmission' => 'Automatic', 'features' => ['Air Conditioning', 'Audio System', 'USB Charging'], 'sort_order' => 1],
            ['name' => 'Honda Brio', 'price' => 25, 'capacity' => 5, 'transmission' => 'Automatic', 'features' => ['Air Conditioning', 'Fuel Efficient', 'Compact Size'], 'sort_order' => 2],
            ['name' => 'Toyota Innova', 'price' => 45, 'capacity' => 7, 'transmission' => 'Automatic', 'features' => ['Spacious Interior', 'Audio System', 'Rear AC'], 'sort_order' => 3],
            ['name' => 'Honda HR-V', 'price' => 50, 'capacity' => 5, 'transmission' => 'Automatic', 'features' => ['Sporty Design', 'Touchscreen', 'Cruise Control'], 'sort_order' => 4],
            ['name' => 'Toyota Alphard', 'price' => 120, 'capacity' => 7, 'transmission' => 'Automatic', 'features' => ['Premium Interior', 'Captain Seats', 'Entertainment System'], 'sort_order' => 5],
            ['name' => 'Honda Civic', 'price' => 55, 'capacity' => 5, 'transmission' => 'Automatic', 'features' => ['Sporty Sedan', 'Turbo Engine', 'Advanced Safety'], 'sort_order' => 6],
        ];

        foreach ($vehicles as $vehicle) {
            Vehicle::updateOrCreate(
                ['name' => $vehicle['name']],
                [
                    'price' => $vehicle['price'],
                    'capacity' => $vehicle['capacity'],
                    'transmission' => $vehicle['transmission'],
                    'features' => $vehicle['features'],
                    'is_active' => true,
                    'sort_order' => $vehicle['sort_order'],
                ],
            );
        }
    }
}
