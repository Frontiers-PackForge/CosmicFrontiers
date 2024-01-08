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

    })