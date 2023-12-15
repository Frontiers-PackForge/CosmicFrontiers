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
        event.create('masonry_oven', 'simple', GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV,GTValues.LuV,GTValues.ZPM,GTValues.UV,GTValues.UHV)
        .recipeType('masonry_oven',true, true)
        .rotationState(RotationState.NON_Y_AXIS)
        .workableTieredHullRenderer(GTCEu.id("block/machines/masonry_oven")) //add this to the kube folder - Though, let Ghostipedia make these textures pls & ty
    

    
})

//Recipe Map/type - DEFINE THESE OR THE GAME WILL CRASH
    GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
        event.create('masonry_oven')
            .category('test') 
            .setEUIO('in')
            .setMaxIOSize(3, 3, 0, 0) //Max Item in, max item out, max fluid in, max fluid out (in slots)
            .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
            .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
            .setSound(GTSoundEntries.COOLING);
    
     
    })