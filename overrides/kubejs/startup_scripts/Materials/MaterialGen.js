
GTCEuStartupEvents.registry('gtceu:material_icon_set', (event) => {
    event.create('mana').parent(GTMaterialIconSet.DULL)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('nether_brick_dust')
        .dust()
        .color(0x511515)
    event.create('zanite')
        .gem()
        .ore()
        .color(0xa521fc).iconSet(GTMaterialIconSet.DIAMOND)
    event.create('ambrosium')
        .ore()
        .color(0xfbff00).iconSet(GTMaterialIconSet.CERTUS)
    event.create('nether_sediment_sludge')
        .fluid()
        .color(0x511515)
    event.create('potent_mana')
        .fluid()
        .color(0x457bd1)
    event.create('mana_steel')
        // .ingot()
        .flags(GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD)
        .fluid()
        .color(0x67b9ee)
        .cableProperties(GTValues.V[GTValues.LV], 8, 0, false)
        .iconSet(GTMaterialIconSet.getByName('mana'))
    //nether materials, no ore veins yet 
    event.create('cincinnasite')
        .ingot()
        .ore()
        .color(0xeebb63).iconSet(GTMaterialIconSet.SHINY)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD)


    event.create('nether_ruby')
        .gem()
        .ore()
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD)
        .color(0x9f0b21).iconSet(GTMaterialIconSet.RUBY)

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
    event.create('zanosium_aluminate')
        .dust()
        .color(0x8e46fa).iconSet(GTMaterialIconSet.SHINY)
    //So Help me god please work
    GTMaterials.get('redstone').addFlags(GTMaterialFlags.GENERATE_LENS)
})
//GENERATE_LENS