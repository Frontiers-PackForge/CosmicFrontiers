GTCEuStartupEvents.registry('gtceu:machine', event => {
event.create('chemical_dehydrator', 'simple', GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV)
        .recipeType('chemical_dehydrator', true, true)
        .rotationState(RotationState.NON_Y_AXIS)
        .workableTieredHullRenderer(GTCEu.id("block/machines/chemical_dehydrator"))
})
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('chemical_dehydrator')
        .category('frontiers')
        .setEUIO('in')
        .setMaxIOSize(1, 2, 2, 1) //Max Item in, max item out, max fluid in, max fluid out (in slots)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING);
})