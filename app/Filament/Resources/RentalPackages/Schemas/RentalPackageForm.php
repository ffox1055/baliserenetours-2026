<?php

namespace App\Filament\Resources\RentalPackages\Schemas;

use Filament\Forms\Components\TagsInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class RentalPackageForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Package Details')
                    ->schema([
                        TextInput::make('title')
                            ->required()
                            ->maxLength(255),
                        TextInput::make('duration')
                            ->required()
                            ->maxLength(255)
                            ->placeholder('e.g., 7 days'),
                        Textarea::make('description')
                            ->required()
                            ->rows(3)
                            ->columnSpanFull(),
                        TextInput::make('price')
                            ->required()
                            ->numeric()
                            ->prefix('$')
                            ->minValue(0),
                        TextInput::make('discount')
                            ->maxLength(255)
                            ->placeholder('e.g., Save 17%'),
                        TextInput::make('sort_order')
                            ->numeric()
                            ->default(0)
                            ->minValue(0),
                    ])
                    ->columns(3),

                Section::make('Included Features')
                    ->schema([
                        TagsInput::make('includes')
                            ->required()
                            ->placeholder('Add a feature and press Enter'),
                    ]),

                Section::make('Settings')
                    ->schema([
                        Toggle::make('is_popular')
                            ->label('Popular package')
                            ->helperText('Highlighted on the rental page'),
                        Toggle::make('is_active')
                            ->label('Active')
                            ->helperText('Inactive packages are hidden from the public site')
                            ->default(true),
                    ])
                    ->columns(2),
            ]);
    }
}
