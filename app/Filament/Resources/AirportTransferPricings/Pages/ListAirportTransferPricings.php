<?php

namespace App\Filament\Resources\AirportTransferPricings\Pages;

use App\Filament\Resources\AirportTransferPricings\AirportTransferPricingResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListAirportTransferPricings extends ListRecords
{
    protected static string $resource = AirportTransferPricingResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
