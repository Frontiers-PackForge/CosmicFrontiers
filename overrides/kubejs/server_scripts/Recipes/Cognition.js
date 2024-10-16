ServerEvents.recipes(event => {
    event.remove({ id: 'experienceobelisk:bibliophage' })
    event.remove({ id: 'jei:/experienceobelisk/metamorpher/primordial_assembly' })
    event.remove({ id: 'jei:/experienceobelisk/metamorpher/cognitive_alloy_metamorphosis' })
    event.remove({ id: 'jei:/experienceobelisk/metamorpher/cognitive_crystal_metamorphosis' })
    event.remove({ id: 'experienceobelisk:cognitive_alloy' })
    event.remove({ id: 'experienceobelisk:cognitive_flux' })
    event.remove({ id: 'experienceobelisk:whisperglass' })
    event.remove({ id: 'jei:/experienceobelisk/metamorpher/cognitive_alloy_metamorphosis' })




    event.recipes.gtceu.mixer('cognitive_flux_mixer')
        .itemInputs(['4x gtceu:nether_quartz_dust', '4x gtceu:lapis_dust', '4x minecraft:soul_sand'])
        .itemOutputs('4x experienceobelisk:cognitive_flux')
        .duration(100)
        .EUt(12)
    event.recipes.gtceu.alloy_smelter('cognitive_alloy')
        .itemInputs(['2x experienceobelisk:cognitive_flux', 'occultism:iesnium_ingot'])
        .itemOutputs('experienceobelisk:cognitive_alloy')
        .duration(240)
        .EUt(12)
    event.recipes.gtceu.alloy_smelter('whisper_glass')
        .itemInputs(['4x experienceobelisk:cognitive_flux', 'minecraft:glass'])
        .itemOutputs('experienceobelisk:whisperglass')
        .duration(160)
        .EUt(12)
})