GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('hydroxybenzoic_acid')
        .liquid()
        .formula('C7H6O3')
        .color(0xd0a030).iconSet(GTMaterialIconSet.DULL)

    event.create('hydroxynaphtoic_acid')
        .liquid()
        .formula('C11H8O3')
        .color(0xe07838).iconSet(GTMaterialIconSet.DULL)

    event.create('potassium_naphthoxide')
        .liquid()
        .formula('C10H7OK')
        .color(0x9868b0).iconSet(GTMaterialIconSet.DULL)

    event.create('potassium_metabisulfite')
        .dust()
        .formula('K2S2O5')
        .color(0xc8d0b8).iconSet(GTMaterialIconSet.DULL)
        .components('2x potassium', '2x sulfur', '5x oxygen')

    event.create('hydrobromic_acid')
        .liquid()
        .formula('HBr')
        .color(0xc85860).iconSet(GTMaterialIconSet.DULL)

    event.create('vectran')
        .ingot().liquid()
        .formula('C18H12O5')
        .color(0xe8d068).iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FINE_WIRE)

})
