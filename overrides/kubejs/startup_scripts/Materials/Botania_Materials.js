//Materials
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('livingrock')
    .color(0xd7d7c8)
    .iconSet(GTMaterialIconSet.ROUGH)
    .flags(
        GTMaterialFlags.GENERATE_PLATE
    )

    event.create('livingwood')
        .color(0x34140c)
        .iconSet(GTMaterialIconSet.WOOD)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
        )

    event.create('terrasteel')
        .color(0x55f609)
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(
            GTMaterialFlags.GENERATE_PLATE
        )

    event.create('elementium')
        .color(0xf472c6)
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(
            GTMaterialFlags.GENERATE_PLATE
        )

    })