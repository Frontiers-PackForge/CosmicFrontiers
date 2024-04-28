GTCEuStartupEvents.registry('gtceu:machine', event => {
    //Large Floral Propagator
    event.create('industrial_grade_floral_propagator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        // ["recipeTypes(com.gregtechceu.gtceu.api.recipe.GTRecipeType[])"]([GTRecipeTypes.get('flora_nurturer'), GTRecipeTypes.get('nether_catalyzer')])
        .recipeTypes(["flora_nurturer", "nether_catalyzer"])
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('BBBBBBB', 'BQQQQQB', 'BQQQQQB', 'BQQQQQB', 'BBBBBBB')
            .aisle('BBBBBBB', 'QGGGGGQ', 'QRRRRRQ', 'Q#####Q', 'BLLLLLB')
            .aisle('BBBBBBB', 'QGPGPGQ', 'QR#R#RQ', 'Q#####Q', 'BPPPPPB')
            .aisle('BBBBBBB', 'QGGGGGQ', 'QRRRRRQ', 'Q#####Q', 'BLLLLLB')
            .aisle('BBBCBBB', 'BQQQQQB', 'BQQQQQB', 'BQQQQQB', 'BBBBBBB')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('#', Predicates.any())
            .where('B', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get())
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY))
                .or(Predicates.abilities(PartAbility.MAINTENANCE))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH))
            )
            .where('P', Predicates.blocks('gtceu:steel_pipe_casing'))
            .where('G', Predicates.blocks('minecraft:moss_block'))
            .where('R', Predicates.blocks('minecraft:flowering_azalea'))
            .where('Q', Predicates.blocks('gtceu:tempered_glass'))
            .where('L', Predicates.blocks('cosmiccore:antiblock_white'))
            .build())
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_clean_stainless_steel', 'gtceu:block/machines/flora_nurturer', false);



    event.create('mana_simulator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('mana_simulator')
        .appearanceBlock(GTBlocks.CASING_ALUMINIUM_FROSTPROOF)
        .recipeModifier(GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('##B##', '##G##', '##G##', '##G##', '##G##', '##G##', '##B##')
            .aisle('#BBB#', '#G#G#', '#G#G#', '#G#G#', '#G#G#', '#G#G#', '#BBB#')
            .aisle('BBBBB', 'G###G', 'G###G', 'G###G', 'G###G', 'G###G', 'BBBBB')
            .aisle('#BBB#', '#G#G#', '#G#G#', '#G#G#', '#G#G#', '#G#G#', '#BBB#')
            .aisle('##C##', '##G##', '##G##', '##G##', '##G##', '##G##', '##B##')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('#', Predicates.any())
            .where('B', Predicates.blocks(GTBlocks.CASING_ALUMINIUM_FROSTPROOF.get())
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY))
                .or(Predicates.abilities(PartAbility.MAINTENANCE))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
            )
            .where('G', Predicates.blocks('botania:mana_glass'))
            .build())
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_frost_proof', 'gtceu:block/machines/mana_fluidizer', false);



    event.create('essence_reactor', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('essence_reactor')
        .appearanceBlock(GTBlocks.CASING_TITANIUM_STABLE)
        .recipeModifier(GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('#####', '##A##', '##A##', '#####', '##A##', '##A##', '#####')
            .aisle('#TTT#', '##Q##', '#####', '#####', '#####', '##Q##', '#TTT#')
            .aisle('#TTT#', 'AQGQA', 'A#G#A', '##G##', 'A#G#A', 'AQGQA', '#TTT#')
            .aisle('#TCT#', '##Q##', '#####', '#####', '#####', '##Q##', '#TTT#')
            .aisle('#####', '##A##', '##A##', '#####', '##A##', '##A##', '#####')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('#', Predicates.any())
            .where('Q', Predicates.blocks('gtceu:aluminium_frame'))
            .where('A', Predicates.blocks(GTBlocks.CASING_ALUMINIUM_FROSTPROOF.get()))
            .where('T', Predicates.blocks(GTBlocks.CASING_TITANIUM_STABLE.get())
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY))
                .or(Predicates.abilities(PartAbility.MAINTENANCE))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
            )
            .where('G', Predicates.blocks('botania:mana_glass'))
            .build())
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_stable_titanium', 'gtceu:block/machines/mana_fluidizer', false);



    event.create('molten_salt_reactor', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('molten_salt_reactor')
        .appearanceBlock(() => Block.getBlock('cosmiccore:high_temperature_fission_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('#TTT#', '#TGT#', '#TGT#', '#TGT#', '#TGT#', '#TGT#', '#TTT#')
            .aisle('TTTTT', 'TQAQT', 'TQAQT', 'TQAQT', 'TQAQT', 'TQAQT', 'TTTTT')
            .aisle('TTTTT', 'TAQAT', 'TAQAT', 'TAQAT', 'TAQAT', 'TAQAT', 'TTTTT')
            .aisle('TTTTT', 'TQAQT', 'TQAQT', 'TQAQT', 'TQAQT', 'TQAQT', 'TTTTT')
            .aisle('#TCT#', '#TGT#', '#TGT#', '#TGT#', '#TGT#', '#TGT#', '#TTT#')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('#', Predicates.any())
            .where('Q', Predicates.blocks(GTBlocks.CASING_TITANIUM_PIPE.get()))
            .where('A', Predicates.blocks(GTBlocks.FIREBOX_TITANIUM.get()))
            .where('T', Predicates.blocks('cosmiccore:high_temperature_fission_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY))
                .or(Predicates.abilities(PartAbility.MAINTENANCE))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
            )
            .where('G', Predicates.blocks(GTBlocks.CASING_LAMINATED_GLASS.get()))
            .build())
        .workableCasingRenderer('cosmiccore:block/casings/solid/high_temperature_fission_casing', 'gtceu:block/multiblock/fusion_reactor', false);



    event.create('pulse_heat_exchanger', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes(["pulse_exchange_steam_vent", "pulse_exchange_steam"])
        // ["recipeTypes(com.gregtechceu.gtceu.api.recipe.GTRecipeType[])"]('pulse_exchange_steam_vent','pulse_exchange_steam' )
        .appearanceBlock(() => Block.getBlock('cosmiccore:highly_conductive_fission_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('TTT', 'TGT', 'TGT', 'TGT', 'TTT',)
            .aisle('TTT', 'GQG', 'GQG', 'GQG', 'TTT',)
            .aisle('TCT', 'TGT', 'TGT', 'TGT', 'TTT',)
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('Q', Predicates.blocks(GTBlocks.CASING_TITANIUM_PIPE.get()))
            .where('T', Predicates.blocks('cosmiccore:highly_conductive_fission_casing')
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY))
                .or(Predicates.abilities(PartAbility.MAINTENANCE))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
            )
            .where('G', Predicates.blocks(GTBlocks.CASING_TEMPERED_GLASS.get()))
            .build())
        .workableCasingRenderer('cosmiccore:block/casings/solid/highly_conductive_fission_casing', 'gtceu:block/multiblock/fusion_reactor', false);



    event.create('arboreal_growth_facility', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('arboreal_growth_facility')
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .recipeModifier(GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('##TTT##', '##SGS##', '##SGS##', '##SGS##', '##SGS##', '##SGS##', '##SGS##', '##SGS##', '##TTT##', '#######')
            .aisle('#TTTTT#', '#FTMTF#', '#FT#TF#', '#FT#TF#', '#FT#TF#', '#FT#TF#', '#FT#TF#', '#FT#TF#', '#TTTTT#', '##SSS##')
            .aisle('TTTTTTT', 'STMMMTS', 'ST###TS', 'ST###TS', 'ST###TS', 'ST###TS', 'ST###TS', 'ST###TS', 'TT###TT', '#SSSSS#')
            .aisle('TTTTTTT', 'GMMMMMG', 'G#####G', 'G#####G', 'G#####G', 'G#####G', 'G#####G', 'G#####G', 'T#####T', '#SSPSS#')
            .aisle('TTTTTTT', 'STMMMTS', 'ST###TS', 'ST###TS', 'ST###TS', 'ST###TS', 'ST###TS', 'ST###TS', 'TT###TT', '#SSSSS#')
            .aisle('#TTTTT#', '#FTMTF#', '#FT#TF#', '#FT#TF#', '#FT#TF#', '#FT#TF#', '#FT#TF#', '#FT#TF#', '#TTTTT#', '##SSS##')
            .aisle('##TCT##', '##SGS##', '##SGS##', '##SGS##', '##SGS##', '##SGS##', '##SGS##', '##SGS##', '##TTT##', '#######')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('#', Predicates.any())
            .where('G', Predicates.blocks(GTBlocks.CASING_TEMPERED_GLASS.get()))
            .where('M', Predicates.blocks('minecraft:moss_carpet'))
            .where('P', Predicates.blocks('cosmiccore:antiblock_white'))
            .where('F', Predicates.blocks('gtceu:terrasteel_frame'))
            .where('S', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get()))
            .where('T', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get())
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS))
            )
            .build())
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_clean_stainless_steel', 'gtceu:block/machines/mana_fluidizer', false);























})