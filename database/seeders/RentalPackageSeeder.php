<?php

namespace Database\Seeders;

use App\Models\RentalPackage;
use Illuminate\Database\Seeder;

class RentalPackageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        RentalPackage::updateOrCreate(
            ['title' => 'Daily Rental'],
            [
                'description' => 'Perfect for short trips and day explorations around Bali',
                'duration' => '1 day',
                'price' => 30,
                'discount' => null,
                'includes' => ['Full insurance coverage', 'Free delivery & pickup', '24/7 roadside assistance', 'Unlimited mileage'],
                'is_popular' => false,
                'is_active' => true,
                'sort_order' => 1,
            ],
        );

        RentalPackage::updateOrCreate(
            ['title' => 'Weekly Rental'],
            [
                'description' => 'Ideal for week-long vacations with significant savings on daily rates',
                'duration' => '7 days',
                'price' => 175,
                'discount' => 'Save 17%',
                'includes' => ['Full insurance coverage', 'Free delivery & pickup', '24/7 roadside assistance', 'Unlimited mileage', 'Free vehicle swap'],
                'is_popular' => true,
                'is_active' => true,
                'sort_order' => 2,
            ],
        );

        RentalPackage::updateOrCreate(
            ['title' => 'Monthly Rental'],
            [
                'description' => 'Best value for extended stays with the lowest daily rate and premium perks',
                'duration' => '30 days',
                'price' => 600,
                'discount' => 'Save 33%',
                'includes' => ['Full insurance coverage', 'Free delivery & pickup', '24/7 roadside assistance', 'Unlimited mileage', 'Free vehicle swap', 'Priority support'],
                'is_popular' => false,
                'is_active' => true,
                'sort_order' => 3,
            ],
        );
    }
}
