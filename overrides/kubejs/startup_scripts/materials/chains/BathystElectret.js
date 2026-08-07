StartupEvents.registry('gtceu:material', event => {
    event.create('gtceu:bathyst_electret_compound')
        .dust()
        .formula('BaTiC38H57NO8')
        .color(0x765d8c)
        .iconSet(GTMaterialIconSet.DULL)
        .components('1x cosmiccore:bathyst', '1x gtceu:soulresin', '1x gtceu:cinderwax')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
})
