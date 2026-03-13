<?php

namespace App\Filament\Resources\Vehicles\Schemas;

use Filament\Forms\Components\TagsInput;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class VehicleForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Vehicle Details')
                    ->schema([
                        TextInput::make('name')
                            ->required()
                            ->maxLength(255),
                        TextInput::make('transmission')
                            ->required()
                            ->maxLength(255)
                            ->default('Automatic'),
                        TextInput::make('price')
                            ->required()
                            ->numeric()
                            ->prefix('$')
                            ->suffix('/day')
                            ->minValue(0),
                        TextInput::make('capacity')
                            ->required()
                            ->numeric()
                            ->suffix('seats')
                            ->minValue(1),
                    ])
                    ->columns(2),

                Section::make('Features')
                    ->schema([
                        TagsInput::make('features')
                            ->required()
                            ->placeholder('Add a feature and press Enter'),
                    ]),

                Section::make('Settings')
                    ->schema([
                        Toggle::make('is_active')
                            ->label('Active')
                            ->helperText('Inactive vehicles are hidden from the public site')
                            ->default(true),
                        TextInput::make('sort_order')
                            ->numeric()
                            ->default(0)
                            ->minValue(0),
                    ])
                    ->columns(2),
            ]);
    }
}
