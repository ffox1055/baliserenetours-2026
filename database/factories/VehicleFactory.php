<?php

namespace Database\Factories;

use App\Models\Vehicle;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Vehicle>
 */
class VehicleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->randomElement(['Toyota', 'Honda', 'Suzuki']).' '.fake()->word(),
            'price' => fake()->randomElement([25, 30, 45, 50, 55, 120]),
            'capacity' => fake()->randomElement([5, 7]),
            'transmission' => 'Automatic',
            'features' => fake()->randomElements(
                ['Air Conditioning', 'Audio System', 'USB Charging', 'Fuel Efficient', 'Touchscreen', 'Cruise Control'],
                fake()->numberBetween(2, 4),
            ),
            'is_active' => true,
            'sort_order' => 0,
        ];
    }

    public function inactive(): static
    {
        return $this->state(fn (array $attributes): array => [
            'is_active' => false,
        ]);
    }
}
