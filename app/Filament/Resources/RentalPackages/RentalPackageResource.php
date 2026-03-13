<?php

namespace App\Filament\Resources\RentalPackages;

use App\Filament\Resources\RentalPackages\Pages\CreateRentalPackage;
use App\Filament\Resources\RentalPackages\Pages\EditRentalPackage;
use App\Filament\Resources\RentalPackages\Pages\ListRentalPackages;
use App\Filament\Resources\RentalPackages\Schemas\RentalPackageForm;
use App\Filament\Resources\RentalPackages\Tables\RentalPackagesTable;
use App\Models\RentalPackage;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use UnitEnum;

class RentalPackageResource extends Resource
{
    protected static ?string $model = RentalPackage::class;

    protected static ?string $navigationLabel = 'Rental Packages';

    protected static UnitEnum|string|null $navigationGroup = 'Daily Rental';

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedGift;

    public static function form(Schema $schema): Schema
    {
        return RentalPackageForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return RentalPackagesTable::configure($table);
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
            'index' => ListRentalPackages::route('/'),
            'create' => CreateRentalPackage::route('/create'),
            'edit' => EditRentalPackage::route('/{record}/edit'),
        ];
    }
}
