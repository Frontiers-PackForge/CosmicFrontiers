StartupEvents.registry('gtceu:material', event => {

    event.create('gtceu:andesite_alloy')
        .ingot()
        .color(0xa7ad9f).iconSet(GTMaterialIconSet.DULL)
        .components('1x andesite', '1x iron')
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_FRAME,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_RING,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_SMALL_GEAR,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL
        )
})