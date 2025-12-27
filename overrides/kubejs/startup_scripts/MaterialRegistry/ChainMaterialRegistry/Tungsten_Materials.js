StartupEvents.registry('gtceu:material', event => {
    event.create('gtceu:wolframite')
        .ore()
        .dust()
        .color(0x231b2e).iconSet(GTMaterialIconSet.DULL)
    event.create('gtceu:impure_sodium_tungstate_solution')
        .liquid()
        .color(0x9e79ad).iconSet(GTMaterialIconSet.DULL)
    event.create('gtceu:sodium_tungstate_solution')
        .liquid()
        .color(0x7d4694).iconSet(GTMaterialIconSet.DULL)
    event.create('gtceu:iron_hydroxide')
        .dust()
        .color(0xb0936f).iconSet(GTMaterialIconSet.BRIGHT)
    event.create('gtceu:manganese_hydroxide')
        .dust()
        .color(0x6fb08e).iconSet(GTMaterialIconSet.BRIGHT)
    event.create('gtceu:sodium_molybdenum_sulfide')
        .dust()
        .color(0x4c16a8).iconSet(GTMaterialIconSet.DULL)
    event.create('gtceu:molybdenum_trisulfide')
        .dust()
        .color(0xC3B138).iconSet(GTMaterialIconSet.SHINY)

    event.create('gtceu:trioctylamine')
        .liquid()
        .color(0x336666).iconSet(GTMaterialIconSet.DULL)
    event.create('gtceu:trioctylammonium_isopolytungstate')
        .liquid()
        .color(0x4C5B75).iconSet(GTMaterialIconSet.DULL)
    event.create('gtceu:ammonium_hydroxide')
        .liquid()
        .color(0xb34fc9).iconSet(GTMaterialIconSet.DULL)
    event.create('gtceu:ammonium_paratungstate')
        .dust()
        .color(0xcfc236).iconSet(GTMaterialIconSet.DULL)
    event.create('gtceu:tunstic_acid')
        .dust()
        .color(0x000F75).iconSet(GTMaterialIconSet.DULL)
    event.create('gtceu:tungsten_trioxide')
        .dust()
        .color(0x000F75).iconSet(GTMaterialIconSet.SHINY)



    event.create('gtceu:finely_ground_wolframite')
        .dust()
        .color(0x231b2e).iconSet(GTMaterialIconSet.DULL)
    event.create('gtceu:finely_ground_scheelite')
        .dust()
        .color(0xd7e8b3).secondaryColor(0x143cae).iconSet(GTMaterialIconSet.DULL)
    event.create('gtceu:finely_ground_tungstate')
        .dust()
        .color(0xe0ffc4).secondaryColor(0xab4400).iconSet(GTMaterialIconSet.SHINY)



    event.create('gtceu:triethylaluminium')
        // .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .color(0x76f593).iconSet(GTMaterialIconSet.DULL)
    event.create('gtceu:trioctylaluminium')
        // .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .color(0x76f5c4).iconSet(GTMaterialIconSet.DULL)
    event.create('gtceu:one_dash_octanol')
        // .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .color(0xf2af6f).iconSet(GTMaterialIconSet.DULL)


})


/*

Trioctylamine - aq

Trioctylammonium Isopolytungstate -aq

Ammonium Hydroxide - aq

Ammonium Paratungstate (APT) - dust 

Tungstic Acid - dust

Tungsten Trioxide - dust


# Trioctlyamine

Triethylaluminium - aq

Trioctylaluminium - aq

1-Octanol - aq

Trioctylamine - aq





*/