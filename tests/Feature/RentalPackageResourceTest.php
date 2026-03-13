<?php

namespace Tests\Feature;

use App\Filament\Resources\RentalPackages\Pages\CreateRentalPackage;
use App\Filament\Resources\RentalPackages\Pages\EditRentalPackage;
use App\Filament\Resources\RentalPackages\Pages\ListRentalPackages;
use App\Models\RentalPackage;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Livewire\Livewire;
use Tests\TestCase;

class RentalPackageResourceTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        $this->actingAs(User::factory()->create());
    }

    public function test_list_page_can_render(): void
    {
        Livewire::test(ListRentalPackages::class)
            ->assertOk();
    }

    public function test_create_page_can_render(): void
    {
        Livewire::test(CreateRentalPackage::class)
            ->assertOk();
    }

    public function test_can_create_rental_package(): void
    {
        $newData = RentalPackage::factory()->make();

        Livewire::test(CreateRentalPackage::class)
            ->fillForm([
                'title' => $newData->title,
                'description' => $newData->description,
                'duration' => $newData->duration,
                'price' => $newData->price,
                'discount' => $newData->discount,
                'includes' => $newData->includes,
                'is_popular' => $newData->is_popular,
                'is_active' => $newData->is_active,
                'sort_order' => $newData->sort_order,
            ])
            ->call('create')
            ->assertNotified()
            ->assertRedirect();

        $this->assertDatabaseHas(RentalPackage::class, [
            'title' => $newData->title,
        ]);
    }

    public function test_can_edit_rental_package(): void
    {
        $package = RentalPackage::factory()->create();

        Livewire::test(EditRentalPackage::class, ['record' => $package->id])
            ->fillForm(['title' => 'Updated Package Title'])
            ->call('save')
            ->assertNotified();

        $this->assertDatabaseHas(RentalPackage::class, [
            'id' => $package->id,
            'title' => 'Updated Package Title',
        ]);
    }

    public function test_title_is_required(): void
    {
        Livewire::test(CreateRentalPackage::class)
            ->fillForm(['title' => null])
            ->call('create')
            ->assertHasFormErrors(['title' => 'required']);
    }
}
