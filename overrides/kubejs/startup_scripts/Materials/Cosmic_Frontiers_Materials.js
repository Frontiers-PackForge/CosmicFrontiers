GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('nether_brick_dust')
        .dust()
        .color(0x511515)
    event.create('fluix')
        .gem()
        .dust()
        .flags(GTMaterialFlags.CRYSTALLIZABLE)
        .color(0x7921c2).iconSet(GTMaterialIconSet.DIAMOND)
    event.create('zanite')
        .gem()
        .ore()
        .element(GTElements.get('zanite'))
        .flags(GTMaterialFlags.GENERATE_LENS, GTMaterialFlags.GENERATE_PLATE)
        .color(0xa521fc).iconSet(GTMaterialIconSet.DIAMOND)
    event.create('ambrosium')
        .gem()
        .ore()
        .element(GTElements.get('ambrosium'))
        .color(0xfbff00).iconSet(GTMaterialIconSet.CERTUS)
    event.create('nether_sediment_sludge')
        .fluid()
        .color(0x511515)
    event.create('aether_air')
        .fluid()
        .color(0x75bfff)
    event.create('liquid_aether_air')
        .fluid()
        .color(0x75bfff)
    event.create('tears_of_the_sky')
        .fluid()
        .color(0x2e76e8)
    event.create('thundering_aerocloud_solution')
        .liquid(new GTFluidBuilder().customStill())
    // .color(0x154085)
    event.create('thundering_aerocloud_concentration')
        .fluid()
        .color(0x173159)
    event.create('thundering_mana')
        // .color(0x154085)
        .liquid(new GTFluidBuilder().customStill())
    event.create('thunder_boosted_source_diesel')
        .color(0xe642f5)
        .liquid(new GTFluidBuilder().customStill())
    event.create('ammonia_rich_aerocloud_solution')
        .fluid()
        .color(0x9368e3)
    event.create('aether_augmented_sediment')
        .fluid()
        .color(0x00c4b7)
    event.create('potent_mana')
        .fluid()
        .color(0x457bd1)
    event.create('hydrogen_peroxide')
        .fluid()
        .color(0xa7f0fa)
    event.create('hydrazine')
        .fluid()
        .color(0xff2e51)

    //Netherite Line Materials
    event.create('ancient_debris')
        .dust()
        .color(0x422a25)


    event.create('netherite_scrap')
        .dust()
        .color(0x53332b).iconSet(GTMaterialIconSet.SHINY)


    event.create('netherite_alloy')
        .dust()
        .color(0x393435).iconSet(GTMaterialIconSet.SHINY)
    event.create('raw_mana_crystal_slurry')
        .fluid()
        .color(0x32a88d).iconSet(GTMaterialIconSet.SHINY)
    event.create('prepared_terrasteel')
        .fluid()
        .color(0x32a861).iconSet(GTMaterialIconSet.SHINY)
    event.create('unstable_terrasteel')
        .fluid()
        .color(0x00731f).iconSet(GTMaterialIconSet.SHINY)
    event.create('zano_aluminate')
        .dust()
        .color(0x8e46fa).iconSet(GTMaterialIconSet.SHINY)
        .element(GTElements.get('zano_alumate'))
    event.create('prismatic_tungstensteel')
        .color(0x6f42cf)
        .ingot()
        .element(GTElements.get('prism_tungstensteel'))
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.NO_SMELTING
        )
    event.create('virtue_meld')
        .color(0xff8400)
        .ingot()
        .element(GTElements.get('virtue'))
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.NO_SMELTING
        )
    //So Help me god please work
    GTMaterials.get('redstone').addFlags(GTMaterialFlags.GENERATE_LENS)
    // GTMaterials.get('certus').fluid()
})

