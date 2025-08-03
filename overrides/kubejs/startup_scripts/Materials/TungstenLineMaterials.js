GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('wolframite')
        .ore()
        .dust()
        .color(0x231b2e).iconSet(GTMaterialIconSet.DULL)
    event.create('impure_sodium_tungstate_solution')
        .liquid()
        .color(0x9e79ad).iconSet(GTMaterialIconSet.DULL)
    event.create('sodium_tungstate_solution')
        .liquid()
        .color(0x7d4694).iconSet(GTMaterialIconSet.DULL)
    event.create('iron_hydroxide')
        .dust()
        .color(0xb0936f).iconSet(GTMaterialIconSet.BRIGHT)
    event.create('manganese_hydroxide')
        .dust()
        .color(0x6fb08e).iconSet(GTMaterialIconSet.BRIGHT)
    event.create('sodium_molybdenum_sulfide')
        .dust()
        .color(0x4c16a8).iconSet(GTMaterialIconSet.DULL)
    event.create('molybdenum_trisulfide')
        .dust()
        .color(0xC3B138).iconSet(GTMaterialIconSet.SHINY)

    event.create('trioctylamine')
        .liquid()
        .color(0x336666).iconSet(GTMaterialIconSet.DULL)
    event.create('trioctylammonium_isopolytungstate')
        .liquid()
        .color(0x4C5B75).iconSet(GTMaterialIconSet.DULL)
    event.create('ammonium_hydroxide')
        .liquid()
        .color(0xb34fc9).iconSet(GTMaterialIconSet.DULL)
    event.create('ammonium_paratungstate')
        .dust()
        .color(0xcfc236).iconSet(GTMaterialIconSet.DULL)
    event.create('tunstic_acid')
        .dust()
        .color(0x000F75).iconSet(GTMaterialIconSet.DULL)
    event.create('tungsten_trioxide')
        .dust()
        .color(0x000F75).iconSet(GTMaterialIconSet.SHINY)

    event.create('triethylaluminium')
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .color(0x76f593).iconSet(GTMaterialIconSet.DULL)
    event.create('trioctylaluminium')
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .color(0x76f5c4).iconSet(GTMaterialIconSet.DULL)
    event.create('one_dash_octanol')
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
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