GTCEuStartupEvents.registry('gtceu:machine', event => {
    //Steam Singleblocks
    let isHp = false
    event.create('steam_masonry_oven', 'steam', true)
        .recipeType('masonry_oven') // needs to be defined below otherwise the game will implote
        .allTiers((tier, builder) => {
            builder.workableSteamHullRenderer(isHp, GTCEu.id("block/machines/masonry_oven"))
            isHp = true
        })
        .rotationState(RotationState.NON_Y_AXIS)

    //Please Do not add anymore Steam machines, these are super fucking cursed because of the render builder being omega cursed


    //Electri Version
    event.create('masonry_oven', 'simple', GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV)
        .recipeType('masonry_oven', true, true)
        .rotationState(RotationState.NON_Y_AXIS)
        .workableTieredHullRenderer(GTCEu.id("block/machines/masonry_oven")) //add this to the kube folder - Though, let Ghostipedia make these textures pls & ty

    event.create('flora_nurturer', 'simple', GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV)
        .recipeType('flora_nurturer', true, true)
        .rotationState(RotationState.NON_Y_AXIS)
        .workableTieredHullRenderer(GTCEu.id("block/machines/flora_nurturer"))


    event.create('nether_catalyzer', 'simple', GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV)
        .recipeType('nether_catalyzer', true, true)
        .rotationState(RotationState.NON_Y_AXIS)
        .workableTieredHullRenderer(GTCEu.id("block/machines/nether_catalyzer"))


    //Custom Spooling Machine for Ars
    event.create('spooling_machine', 'simple', GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV)
        .recipeType('spooling_machine', true, true)
        .rotationState(RotationState.NON_Y_AXIS)
        .workableTieredHullRenderer(GTCEu.id("block/machines/nether_catalyzer"))
    //Tempering Autoclave
    event.create('tempering_autoclave', 'simple', GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV)
        .recipeType('tempering_autoclave', true, true)
        .rotationState(RotationState.NON_Y_AXIS)
        .workableTieredHullRenderer(GTCEu.id("block/machines/autoclave"))

    event.create('bronze_steam_turbine', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('bronze_turbine')
        .appearanceBlock(GTBlocks.BRONZE_HULL)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('F##F##F', 'BBBBBBB', 'BBBBBBB', 'BBBBBBB')
            .aisle('#######', 'BBBBBBB', 'XOOOOOZ', 'BBBBBBB')
            .aisle('F##F##F', 'BBBBBBB', 'BCBBBBB', 'BBBBBBB')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('#', Predicates.any())
            .where('W', Predicates.blocks(GTBlocks.COIL_CUPRONICKEL.get()))
            .where('B', Predicates.blocks(GTBlocks.BRONZE_HULL.get()))
            .where('Z', Predicates.abilities(PartAbility.IMPORT_FLUIDS).setExactLimit(1))
            .where('X', Predicates.abilities(PartAbility.OUTPUT_KINETIC).setExactLimit(1))
            .where('O', Predicates.blocks('gtceu:steam_turbine_blades'))
            .where('F', Predicates.blocks('gtceu:bronze_frame'))
            .build())
        .workableCasingRenderer('gtceu:block/casings/steam/steel/side', 'gtceu:block/multiblock/generator/large_gas_turbine', false);


})

//Recipe Map/type - DEFINE THESE OR THE GAME WILL CRASH
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('masonry_oven')
        .category('frontiers')
        .setEUIO('in')
        .setMaxIOSize(3, 3, 0, 0) //Max Item in, max item out, max fluid in, max fluid out (in slots)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING);
    event.create('flora_nurturer')
        .category('frontiers')
        .setEUIO('in')
        .setMaxIOSize(2, 3, 1, 0) //Max Item in, max item out, max fluid in, max fluid out (in slots)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.REPLICATOR);
    event.create('nether_catalyzer')
        .category('frontiers')
        .setEUIO('in')
        .setMaxIOSize(1, 3, 0, 2) //Max Item in, max item out, max fluid in, max fluid out (in slots)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL);
    event.create('bronze_turbine')
        .category('kinetic')
        .setMaxIOSize(0, 0, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.TURBINE)

    //Custom Spooling Machine for Ars
    event.create('spooling_machine')
        .category('frontiers')
        .setMaxIOSize(2, 2, 1, 0) //Max Item in, max item out, max fluid in, max fluid out (in slots)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setEUIO('in')
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)
    event.create('tempering_autoclave')
        .category('frontiers')
        .setMaxIOSize(4, 3, 2, 0) //Max Item in, max item out, max fluid in, max fluid out (in slots)
        .setSlotOverlay(false, false, GuiTextures.NEUTRAL_MATTER_OVERLAY)
        .setEUIO('in')
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)
})