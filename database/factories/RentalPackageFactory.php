<?php

namespace Database\Factories;

use App\Models\RentalPackage;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<RentalPackage>
 */
class RentalPackageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->words(2, true).' Rental',
            'description' => fake()->sentence(),
            'duration' => fake()->randomElement(['1 day', '7 days', '30 days']),
            'price' => fake()->randomElement([30, 175, 600]),
            'discount' => null,
            'includes' => fake()->randomElements(
                ['Full insurance coverage', 'Free delivery & pickup', '24/7 roadside assistance', 'Unlimited mileage', 'Free vehicle swap', 'Priority support'],
                fake()->numberBetween(3, 5),
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
