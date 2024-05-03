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
    event.create('luminite')
        .color(0x85ffad)
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .ingot()
        .ore()
        .dust()
        .toolStats(ToolProperty.Builder.of(6.0, 7.0, 768, 3).attackSpeed(0.1).enchantability(18).build())
        .flags(
            GTMaterialFlags.NO_SMELTING
        )
        // .element(GTElements.get('prism_tungstensteel'))
        .iconSet(GTMaterialIconSet.getByName('starry'))
    event.create('desh')
        .color(0xeb9b34)
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .iconSet(GTMaterialIconSet.getByName('utherium'))
        .ingot()
        .ore()
        .dust()
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.NO_SMELTING
        )
        .element(GTElements.get('desh'))
        .iconSet(GTMaterialIconSet.getByName('starry'))
    event.create('prismatic_tungstensteel')
        .color(0x6f42cf)
        .ingot()
        .element(GTElements.get('prism_tungstensteel'))
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(
            GTMaterialFlags.NO_UNIFICATION,
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.NO_SMELTING
        )
    event.create('utherium')
        .color(0xc3434c)
        .gem()
        .ore()
        .iconSet(GTMaterialIconSet.getByName('utherium'))
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.NO_SMELTING
        )
    event.create('luminescent_utherium')
        .color(0x6A40B8)
        .gem()
        .fluid()
        .iconSet(GTMaterialIconSet.getByName('utherium'))
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.NO_SMELTING
        )
    event.create('cosmolite')
        .color(0x4614a3)
        .gem()
        .fluid()
        .iconSet(GTMaterialIconSet.getByName('luminite'))
        .cableProperties(GTValues.V[GTValues.EV], 8, 0, false)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.GENERATE_FINE_WIRE
        )

    event.create('molten_virtue_meld')
        .color(0xff8400)
        .fluid()
    event.create('raw_psionic_solution')
        .color(0xff8400)
        .fluid()
    event.create('astraline_corrosion_agent')
        .color(0xff8400)
        .fluid()
    event.create('astraline_prismatic_solution')
        .color(0xff8400)
        .fluid()
    event.create('prisma')
        .gem()
        .color(0xcfcfcf)
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .iconSet(GTMaterialIconSet.getByName('prisma'))

    event.create('super_critical_steam')
        .color(0xffffff)
        .fluid()
    event.create('virtue_meld')
        .color(0xff8400)
        .ingot()
        .fluid()
        .element(GTElements.get('virtue'))
        .cableProperties(GTValues.V[GTValues.IV], 4, 2, true)
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
    //.setProperty(PropertyKey.BLAST, new $BlastProperty())


    event.create('psi_superconductor_alpha')
        .color(0xfc642d)
        .cableProperties(GTValues.V[GTValues.EV], 16, 0, true)
    event.create('psi_superconductor_beta')
        .color(0xb940ff)
        .cableProperties(GTValues.V[GTValues.IV], 32, 0, true)
    event.create('neodymium_praseodymium')
        .dust()
        .color(0x473147)
        .flags(
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.NO_SMELTING
        )
    event.create('magnetic_neodymium_praseodymium')
        .dust()
        .color(0x473147).iconSet(GTMaterialIconSet.MAGNETIC)
        .flags(
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.NO_SMELTING
        )
    GTMaterials.get('neptunium').addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.get('plutonium').addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.get('curium').addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.get('berkelium').addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.get('californium').addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.get('einsteinium').addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.get('fermium').addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.get('mendelevium').addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.get('nobelium').addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.get('lawrencium').addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.get('praseodymium').addFlags(GTMaterialFlags.GENERATE_ROD)
})


