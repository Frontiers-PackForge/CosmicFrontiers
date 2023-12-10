GTCEuStartupEvents.registry('gtceu:machine', event => {
 //Steam Singleblocks
    let isHp = false
    event.create('steam_masonry_oven', 'steam', true)
        .recipeType('masonry_oven')
        .allTiers((tier, builder) => {
            builder.workableSteamHullRenderer(isHp, GTCEu.id("block/machines/masonry_oven"))
            isHp = true
        })
        .rotationState(RotationState.NON_Y_AXIS)
//Electri Version
        event.create('masonry_oven', 'simple', GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV,GTValues.LuV,GTValues.ZPM,GTValues.UV,GTValues.UHV)
        .recipeType('masonry_oven',true, true)
        .rotationState(RotationState.NON_Y_AXIS)
        .workableTieredHullRenderer(GTCEu.id("block/machines/masonry_oven"))
    

    
})

    //Recipe Map/type
    GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
        event.create('masonry_oven')
            .category('test') 
            .setEUIO('in')
            .setMaxIOSize(3, 3, 0, 0) 
            .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
            .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
            .setSound(GTSoundEntries.COOLING);
    
     
    })