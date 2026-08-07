StartupEvents.registry('gtceu:material', event => {
    event.create('gtceu:utherium_phosphate')
        .dust()
        .formula('Th3(PO4)4')
        .color(0xb76678)
        .iconSet(GTMaterialIconSet.DULL)
        .components('3x gtceu:thorium', '4x gtceu:phosphorus', '16x gtceu:oxygen')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('gtceu:utherium_ceramic')
        .dust()
        .formula('Th3Al2P4O19')
        .color(0xd7a6af)
        .iconSet(GTMaterialIconSet.ROUGH)
        .components(
            '3x gtceu:thorium',
            '2x gtceu:aluminium',
            '4x gtceu:phosphorus',
            '19x gtceu:oxygen'
        )
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
})
