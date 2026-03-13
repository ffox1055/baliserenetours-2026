<?php

namespace App\Filament\Resources\AirportTransferPricings\Schemas;

use Filament\Forms\Components\TagsInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class AirportTransferPricingForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Plan Details')
                    ->schema([
                        TextInput::make('title')
                            ->required()
                            ->maxLength(255),
                        TextInput::make('duration')
                            ->required()
                            ->maxLength(255)
                            ->placeholder('e.g., 45-60 minutes'),
                        Textarea::make('description')
                            ->required()
                            ->rows(3)
                            ->columnSpanFull(),
                        TextInput::make('price')
                            ->required()
                            ->numeric()
                            ->prefix('$')
                            ->minValue(0),
                        TextInput::make('sort_order')
                            ->numeric()
                            ->default(0)
                            ->minValue(0),
                    ])
                    ->columns(2),

                Section::make('Features')
                    ->schema([
                        TagsInput::make('includes')
                            ->required()
                            ->placeholder('Add a feature and press Enter'),
                    ]),

                Section::make('Settings')
                    ->schema([
                        Toggle::make('is_popular')
                            ->label('Popular plan')
                            ->helperText('Highlighted on the pricing page'),
                        Toggle::make('is_active')
                            ->label('Active')
                            ->helperText('Inactive plans are hidden from the public site')
                            ->default(true),
                    ])
                    ->columns(2),
            ]);
    }
}
