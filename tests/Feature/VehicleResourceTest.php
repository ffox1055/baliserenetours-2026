<?php

namespace Tests\Feature;

use App\Filament\Resources\Vehicles\Pages\CreateVehicle;
use App\Filament\Resources\Vehicles\Pages\EditVehicle;
use App\Filament\Resources\Vehicles\Pages\ListVehicles;
use App\Models\User;
use App\Models\Vehicle;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Livewire\Livewire;
use Tests\TestCase;

class VehicleResourceTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        $this->actingAs(User::factory()->create());
    }

    public function test_list_page_can_render(): void
    {
        Livewire::test(ListVehicles::class)
            ->assertOk();
    }

    public function test_create_page_can_render(): void
    {
        Livewire::test(CreateVehicle::class)
            ->assertOk();
    }

    public function test_can_create_vehicle(): void
    {
        $newData = Vehicle::factory()->make();

        Livewire::test(CreateVehicle::class)
            ->fillForm([
                'name' => $newData->name,
                'price' => $newData->price,
                'capacity' => $newData->capacity,
                'transmission' => $newData->transmission,
                'features' => $newData->features,
                'is_active' => $newData->is_active,
                'sort_order' => $newData->sort_order,
            ])
            ->call('create')
            ->assertNotified()
            ->assertRedirect();

        $this->assertDatabaseHas(Vehicle::class, [
            'name' => $newData->name,
        ]);
    }

    public function test_can_edit_vehicle(): void
    {
        $vehicle = Vehicle::factory()->create();

        Livewire::test(EditVehicle::class, ['record' => $vehicle->id])
            ->fillForm(['name' => 'Updated Vehicle Name'])
            ->call('save')
            ->assertNotified();

        $this->assertDatabaseHas(Vehicle::class, [
            'id' => $vehicle->id,
            'name' => 'Updated Vehicle Name',
        ]);
    }

    public function test_name_is_required(): void
    {
        Livewire::test(CreateVehicle::class)
            ->fillForm(['name' => null])
            ->call('create')
            ->assertHasFormErrors(['name' => 'required']);
    }
}
