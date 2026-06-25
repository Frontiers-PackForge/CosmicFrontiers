StartupEvents.registry('gtceu:material', event => {

    event.create('gtceu:hydroxybenzoic_acid')
        .liquid()
        .formula('C7H6O3')
        .color(0xd0a030).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:hydroxynaphtoic_acid')
        .liquid()
        .formula('C11H8O3')
        .color(0xe07838).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:potassium_naphthoxide')
        .liquid()
        .formula('C10H7OK')
        .color(0x9868b0).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:potassium_metabisulfite')
        .dust()
        .formula('K2S2O5')
        .color(0xc8d0b8).iconSet(GTMaterialIconSet.DULL)
        .components('2x gtceu:potassium', '2x gtceu:sulfur', '5x gtceu:oxygen')

    event.create('gtceu:hydrobromic_acid')
        .liquid()
        .formula('HBr')
        .color(0xc85860).iconSet(GTMaterialIconSet.DULL)

    event.create('gtceu:vectran')
        .ingot().liquid()
        .formula('C18H12O5')
        .color(0xe8d068).iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FINE_WIRE)

})
