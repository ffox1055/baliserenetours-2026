<?php

namespace App\Filament\Resources\AirportTransferPricings;

use App\Filament\Resources\AirportTransferPricings\Pages\CreateAirportTransferPricing;
use App\Filament\Resources\AirportTransferPricings\Pages\EditAirportTransferPricing;
use App\Filament\Resources\AirportTransferPricings\Pages\ListAirportTransferPricings;
use App\Filament\Resources\AirportTransferPricings\Schemas\AirportTransferPricingForm;
use App\Filament\Resources\AirportTransferPricings\Tables\AirportTransferPricingsTable;
use App\Models\AirportTransferPricing;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use UnitEnum;

class AirportTransferPricingResource extends Resource
{
    protected static ?string $model = AirportTransferPricing::class;

    protected static ?string $navigationLabel = 'Transfer Pricing';

    protected static UnitEnum|string|null $navigationGroup = 'Airport Transfer';

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedCurrencyDollar;

    public static function form(Schema $schema): Schema
    {
        return AirportTransferPricingForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return AirportTransferPricingsTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListAirportTransferPricings::route('/'),
            'create' => CreateAirportTransferPricing::route('/create'),
            'edit' => EditAirportTransferPricing::route('/{record}/edit'),
        ];
    }
}
