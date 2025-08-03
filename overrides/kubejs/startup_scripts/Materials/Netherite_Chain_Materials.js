GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('ancient_debris')
        .dust()
        .color(0x422a25).iconSet(GTMaterialIconSet.ROUGH)

    event.create('impure_ancient_debris_solution')
        .liquid()
        .color(0x635033)
    
    event.create('netherite_lava_mixture')
        .liquid()
        .color(0x997845)

    event.create('netherite_scrap')
        .dust()
        .color(0x53332b).iconSet(GTMaterialIconSet.METALLIC)

    event.create('inactive_netherite')
        .ingot()
        .color(0x524a4c).iconSet(GTMaterialIconSet.METALLIC)
});