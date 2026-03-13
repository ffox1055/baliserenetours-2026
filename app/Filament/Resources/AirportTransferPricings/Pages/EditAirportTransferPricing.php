<?php

namespace App\Filament\Resources\AirportTransferPricings\Pages;

use App\Filament\Resources\AirportTransferPricings\AirportTransferPricingResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditAirportTransferPricing extends EditRecord
{
    protected static string $resource = AirportTransferPricingResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
