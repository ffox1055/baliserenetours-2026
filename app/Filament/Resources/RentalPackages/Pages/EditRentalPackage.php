<?php

namespace App\Filament\Resources\RentalPackages\Pages;

use App\Filament\Resources\RentalPackages\RentalPackageResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditRentalPackage extends EditRecord
{
    protected static string $resource = RentalPackageResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
