<?php

namespace Database\Factories;

use App\Models\AirportTransferPricing;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<AirportTransferPricing>
 */
class AirportTransferPricingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->words(3, true).' Transfer',
            'description' => fake()->sentence(),
            'price' => fake()->randomElement([25, 35, 45, 55, 65]),
            'duration' => '45-60 minutes',
            'includes' => fake()->randomElements(
                ['Professional driver', 'Air-conditioned vehicle', 'Flight monitoring', '24/7 support', 'Luxury vehicle', 'Welcome drink', 'Complimentary WiFi'],
                fake()->numberBetween(3, 6),
            ),
            'is_popular' => false,
            'is_active' => true,
            'sort_order' => 0,
        ];
    }

    public function popular(): static
    {
        return $this->state(fn (array $attributes): array => [
            'is_popular' => true,
        ]);
    }

    public function inactive(): static
    {
        return $this->state(fn (array $attributes): array => [
            'is_active' => false,
        ]);
    }
}
