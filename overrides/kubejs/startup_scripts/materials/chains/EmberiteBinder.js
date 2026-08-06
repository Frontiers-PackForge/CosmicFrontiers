StartupEvents.registry('gtceu:material', event => {
    event.create('gtceu:pelletizing_rosin')
        .liquid(new GTFluidBuilder().temperature(360))
        .color(0x9a542d).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:cinder_pellet_binder')
        .liquid(new GTFluidBuilder().temperature(330))
        .color(0x6f351f).iconSet(GTMaterialIconSet.DULL)
})
