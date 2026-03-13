<?php

namespace Tests\Feature;

use App\Filament\Resources\AirportTransferPricings\Pages\CreateAirportTransferPricing;
use App\Filament\Resources\AirportTransferPricings\Pages\EditAirportTransferPricing;
use App\Filament\Resources\AirportTransferPricings\Pages\ListAirportTransferPricings;
use App\Models\AirportTransferPricing;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Livewire\Livewire;
use Tests\TestCase;

class AirportTransferPricingResourceTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        $this->actingAs(User::factory()->create());
    }

    public function test_list_page_can_render(): void
    {
        Livewire::test(ListAirportTransferPricings::class)
            ->assertOk();
    }

    public function test_create_page_can_render(): void
    {
        Livewire::test(CreateAirportTransferPricing::class)
            ->assertOk();
    }

    public function test_can_create_pricing_plan(): void
    {
        $newData = AirportTransferPricing::factory()->make();

        Livewire::test(CreateAirportTransferPricing::class)
            ->fillForm([
                'title' => $newData->title,
                'description' => $newData->description,
                'price' => $newData->price,
                'duration' => $newData->duration,
                'includes' => $newData->includes,
                'is_popular' => $newData->is_popular,
                'is_active' => $newData->is_active,
                'sort_order' => $newData->sort_order,
            ])
            ->call('create')
            ->assertNotified()
            ->assertRedirect();

        $this->assertDatabaseHas(AirportTransferPricing::class, [
            'title' => $newData->title,
        ]);
    }

    public function test_can_edit_pricing_plan(): void
    {
        $plan = AirportTransferPricing::factory()->create();

        Livewire::test(EditAirportTransferPricing::class, ['record' => $plan->id])
            ->fillForm(['title' => 'Updated Title'])
            ->call('save')
            ->assertNotified();

        $this->assertDatabaseHas(AirportTransferPricing::class, [
            'id' => $plan->id,
            'title' => 'Updated Title',
        ]);
    }

    public function test_title_is_required(): void
    {
        Livewire::test(CreateAirportTransferPricing::class)
            ->fillForm(['title' => null])
            ->call('create')
            ->assertHasFormErrors(['title' => 'required']);
    }
}
